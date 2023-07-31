import { useState } from "react";
import axios from 'axios';
import "./Data.css"

export const Data = ({ data }) => {
  
    console.log(data);
  return (
    <div class="container-card">
        <div class="card">
            <div class="card-top">
                <h2 class="title">Diamond no Ace: Second Season</h2>
                <span class="subtitle">Comedy, Sports, School, Shounen</span>
                <p>Movie</p>
            </div>
            
            <div class="media-card">Manga</div>
            <div class="bottom-card">
                <span class="bottom-text">After the National Tournament, the Seidou High baseball team moves forward with uncertainty as the Fall season quickly approaches. In an attempt to build a stronger team centered around their new captain, fresh faces join the starting roster for the very first time. Previous losses weigh heavily on the minds of the veteran players as they continue their rigorous training, preparing for what will inevitably be their toughest season yet.\n \nRivals both new and old stand in their path as Seidou once again climbs their way toward the top, one game at a time. Needed now more than ever before, Furuya and Eijun must be determined to pitch with all their skill and strength in order to lead their team to victory. And this time, one of these young pitchers may finally claim that coveted title: \"The Ace of Seidou.\"\n\n[Written by MAL Rewrite]</span>
                <div class="card-action">
                    <a class="btn" href="https://attackontitan.fandom.com/wiki/Levi_Ackerman" target="_blank">Saber Mais</a>
                </div>
            </div> 
        </div> 
    </div>
  );
};
