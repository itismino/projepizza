import React from "react";
import "./Home.css"
import '../../images/iteration-1-images/home-banner.png'

export default function Home ({onButtonClick}) {
return (
    <div className="home-page" data-cy="home-page">
        <img src="../../images/iteration-1-images/logo.svg" alt="" />
        <p>KOD ACIKTIRIR <br/>
            PİZZA, DOYURUR
        </p>
        <button data-cy="home-button" onClick={onButtonClick} className="button" >ACIKTIM</button>
    </div>
)
}