import { useState } from "react";
import axios from 'axios';
import "./Data.css"

export const Data = ({ data}) => {
    console.log(data);
  return (
    <>
        <div className="card-container">
        {data.filter(result => result !== null && result !== undefined).map((result, id) => {
            return <div className="container-card" key={id}>
                        <div className="card">
                            <div className="card-top">
                                <div className="same-line">
                                    <h2 className="title">{result.title}</h2>
                                    <span className="subtitle">{result.genres.join(", ")}</span>
                                    <p>{result.media_type}</p>
                                    <h1 className="rating">{result.mean}</h1>
                                </div>
                            </div> 
                            <div className="media-card" style={{ 
                                backgroundImage: `url("${result.main_picture.large}")`, 
                                backgroundPosition: 'top', 
                                backgroundSize: 'cover' 
                            }}></div>
                
                            <div className="bottom-card">
                                <span className="bottom-text">{result.synopsis}</span>
                            </div> 
                        </div> 
                    </div>
        })
    }
    </div>
    </>
  );
};
