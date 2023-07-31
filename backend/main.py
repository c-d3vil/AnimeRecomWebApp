import pandas as pd
import numpy as np
import pyarrow 
import json
import time
import requests 
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import MinMaxScaler
from pymongo import MongoClient
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

anime = pd.read_parquet("anime.parquet")
lfinal = pd.read_parquet('lfinal.parquet')
user_similarity_scores_df = pd.read_parquet('user_similarity_scores.parquet')
genre_similarity_scores_df = pd.read_parquet('genre_similarity_scores_df.parquet')


def genre_based_recommendation(anime_id):
    similarity_scores = genre_similarity_scores_df[anime_id]
    recommended_animes = similarity_scores.sort_values(ascending=False)[1:]
    return recommended_animes.head(10).index.tolist()

def user_based_recommendation(anime_id):
    similarity_scores = user_similarity_scores_df[anime_id]
    recommended_animes = similarity_scores.sort_values(ascending=False)[1:]
    return recommended_animes.head(10).index.tolist()


def get_anime_info(anime_id, client_id='17d7a82e16e1c7813f3d03cceb1cf0b9'):
    base_url = f"https://api.myanimelist.net/v2/anime/{anime_id}"
    params = {
        "fields": "synopsis,main_picture,mean,media_type",
    }
    headers = {
        "X-MAL-CLIENT-ID": client_id
    }
    try:   
        response = requests.get(base_url, params=params, headers=headers)
        if response.status_code == 200:
            data = response.json()
            if data:
                genre_info = get_genre(anime_id)
                if "genres" in genre_info:
                    data["genres"] = genre_info["genres"]
                else:
                    data["genre_error"] = genre_info["error"]
                return data
            else:
                print(f"No results found for anime ID '{anime_id}'.")
        else:
            print(f"Failed to fetch data from MyAnimeList API. Status code: {response.status_code}")
            print(response.text) 
    except requests.RequestException as e:
        print(f"An error occurred: {e}")



def get_recommendation_user_based(anime_id):
    
    if anime_id in lfinal.index:
        recommend_ids = user_based_recommendation(anime_id)
        print('user')
    else:
        recommend_ids = genre_based_recommendation(anime_id)
        print('genre')
    recommend_data = []
    for id in recommend_ids:
        recommend_data.append(get_anime_info(id))
    return recommend_data

def get_recommendation_genre_based(anime_id):
    recommend_ids = genre_based_recommendation(anime_id)
    print('genre')
    recommend_data = []
    for id in recommend_ids:
        recommend_data.append(get_anime_info(id))
    return recommend_data

def get_genre(anime_id):
    document = collection.find_one({"anime_id": anime_id})
    if document:
        genre = document.get("genre")
        if genre:
            # Split the genre string into a list of genres
            genre_list = [g.strip() for g in genre.split(',')]
            return {"anime_id": anime_id, "genres": genre_list}
        else:
            return {"anime_id": anime_id, "error": "Genre not found"}
    else:
        return {"anime_id": anime_id, "error": "Anime not found"}



client = MongoClient('mongodb://db:27017/')
db = client["animeDB"]
collection = db["animeDataCollection"]
collection.insert_many(anime.to_dict('records'))

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],
)



@app.get("/search/{anime_name_partial}")
async def search_anime(anime_name_partial: str):
    anime_name_partial = anime_name_partial.lower()
    pattern = '^' + anime_name_partial
    cursor = collection.find({'name': {'$regex': pattern, '$options': 'i'}})
    matches = [{'name': doc['name'], 'id': doc['anime_id']} for doc in cursor]
    return {"anime_matches": matches}


@app.get("/recommend/user/{anime_id}")
async def read_item(anime_id: int):
    return get_recommendation_user_based(anime_id)


@app.get("/recommend/genre/{anime_id}")
async def read_item(anime_id: int):
    return get_recommendation_genre_based(anime_id)

