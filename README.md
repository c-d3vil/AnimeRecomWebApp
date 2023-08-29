# Anime Recommendation System

## Project Description

Welcome to the Anime Recommendation System! This project is designed to assist anime enthusiasts in discovering new and exciting anime titles that align with their preferences. By leveraging both data from MyAnimeList and a custom-trained recommendation model, this system offers a unique blend of genre-based and user-based recommendation strategies, enhancing its versatility and accuracy. Additionally, the integration of the MyAnimeList API enriches the user experience by providing detailed information about each recommended anime.



![pic1](https://github.com/c-d3vil/AnimeRecomWebApp/assets/132782518/04f751dc-b49e-4117-bbcb-72f18d05e874)

![pic2](https://github.com/c-d3vil/AnimeRecomWebApp/assets/132782518/ddeaffe0-47c2-47fc-84d2-62a1255dfd07)


## STEPS TO LAUNCH

#### Step 1. Install Docker: Ensure you have Docker installed on your system.

#### Step 1.5. Install Git LFS: If you haven't already, install Git LFS (Large File Storage) on your system. This is necessary to clone the repository and its large files successfully.

#### Step 2. Clone the Repository: Use Git LFS to clone this repository to your local machine. Run the command: git lfs clone https://github.com/yourusername/anime-recommendation.git

#### Step 3. Obtain A client ID from [Myanimelist](https://myanimelist.net) and insert it in the /backend/MALcred.py file.

#### Step 4. In root directory launch a terminal and type   				 "docker compose up"

#### Step 5. open up Browser and goto [localhost:4000](http://localhost:4000/) 

## Limitations

While the Anime Recommendation System offers valuable insights into discovering new anime titles, it's important to be aware of the following limitations:

##### Limited Database Update: The anime database used within this system is updated only until the year 2020. As a result, newer anime titles released after this year might not be included in the recommendations.

##### Overlap Between User-Based and Genre-Based Recommendations: In cases where the user-based recommendation model cannot confidently determine personalized suggestions for a user, there might be instances where both the user-based and genre-based recommendations yield similar results.

##### User-Based Recommendation Criteria: The user-based recommendation model is designed to consider a user's preferences only if they have watched a minimum of 150 or more anime titles. Consequently, users with fewer anime views might not benefit fully from the personalized recommendations provided by this model.

## FAQ

### Why did you choose to build an anime recommendation system?

Anime is a unique and diverse form of entertainment with a global fanbase. However, with thousands of animes out there, it can be challenging for fans to discover new animes that match their tastes. As a huge anime fanatic myself I chose to build this recommendation system to help anime fans navigate this vast landscape and discover new favorites.

### What makes this recommendation system special?

###### Hybrid Approach: By fusing genre-based and user-based recommendations, this system excels in capturing both content and collaborative aspects. This results in more precise and varied anime suggestions.

###### MyAnimeList API Integration: The system seamlessly integrates with the MyAnimeList API, offering users comprehensive information about each recommended anime.


# Additional Informartion

## Resources used (Third-Party) :

### 1. Myanimelist Dataset:
		i.  [Anime.csv](https://www.kaggle.com/datasets/CooperUnion/anime-recommendations-database)
		ii. [Rating.csv](https://www.kaggle.com/datasets/CooperUnion/anime-recommendations-database)

### 2. MAL API : 
		[MAL API](https://myanimelist.net/apiconfig/references/api/v2)
		
## Tools used :
## 
### 1. Visual Studio Code
### 2. Jupyter Notebooks


# Software Components:

## Front-end: React.JS,CSS,HTML
## Back-end: Python, FastAPI (Uvicorn)
## Database: MongoDB

 
