import React, { useContext, useEffect } from "react"
import { LandingContext } from "./LandingProvider.js"
import "./Landing.css"


export const Landing = () => {

    const { landing, getLanding } = useContext(LandingContext)


    useEffect(() => {
        getLanding();
    }, []);


    return (

        <article className="landing">
            <header>
                <h1>Welcome to WhoDunIt</h1>
                <div className="landing__user">Welcome: </div>
                <div className="landing__username">{landing.player?.user.username}</div>
                <div className="landing__user">Let's see if you can beat WhoDunIt and solve the crime</div>

            </header>
            <div className="landing__info">
                <div className="landing__header">
                    <h3>How To Play</h3> 
                    <div> first lets choose a movie to play and 
                </div>                   
                </div>      

                <div className="landing__objectives">
                    <h3>How to win?</h3>
                    <div> first lets choose a movie to play and 
                </div>
                    
                </div>

                <div className="landing__intro">
                <h3>Start the Movie to Start the Game</h3>
                <div> first lets choose a movie to play and </div>
                </div>

                <div className="landing__create">
                    <h3>Start the Movie to Start the Game</h3>
                </div>

                <div className="landing__announce">
                    <h3>lets have a Movie Night and </h3>
                    <div> now that you have chosen a movie, lets begin.</div>

                </div>

                <div className="landing__invite">
                    <h3>Start the Movie to Start the Game</h3>
                </div>

                <div className="landing__choose">
                    <h3>Start the Movie to Start the Game</h3>
                </div>

                <div className="landing__finish">
                    <h3>Has the movie reached the end?</h3>
                    <div>Once the move has completed, reopen the app and see who guessed correctly. Make sure theres no twist ending and that the credits are rolling.</div>
                </div>

                <div className="landing__winner">
                    <h3>Who Guessed correctly? </h3>
                    <div> The one who chose the correct suspect in the movie is the winner!</div>
                </div>

                <div className="landing__over">
                    <h3>Start the Movie to Start the Game</h3>
                    <div> The one who chose the correct suspect in the movie is the winnernow that a winner has been declared, feel free tostart another movie.</div>
                </div>
            </div>
        </article>
    )
}