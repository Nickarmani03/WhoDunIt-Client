import React, { useContext, useEffect } from "react"
import { LandingContext } from "./LandingProvider.js"
import "./Landing.css"


export const Landing = () => {

    const { landing, getLanding } = useContext(LandingContext)

    // console.log(landing)

    useEffect(() => {
        getLanding();
    }, []);


    return (

        <article className="landing">
            <header className="landing__here">
                <h1>Welcome to WhoDunIt</h1>
                <h2>Hello and welcome to who done it the crime or murder solving site</h2>
                <div className="landing__user">Welcome: </div>
                <div className="landing__username">{landing.player?.user.username}</div>
                <div className="landing__user">Let's see if you can beat WhoDunIt and solve the crime</div>

            </header>
            <div className="landing__info">

                <div className="landing__header">
                    <h3>What is WhoDunIt</h3>
                    <div> What is WhoDunIt? Have you ever sat with a group of friends and knew who the killer was or who committed the crime well before the ending? Do you have a lot of friends who like to tell you who they think committerd the crime before the end of a movie? Are you the type of person who doesn't want the twist ending spoiled? Well then this app is for you. The point of this app is to keep all your suggestions to yourself. You want to be able to solve the crime or murder and find the one WhoDunIt well before anyone else.  And remember, this app works best when the killer isn't as obvious, such as when the killers name is in the title, or  Nightmare On Elm Street, since it's a classic and everyone knows that Freddy Krueger is the killer.
                    </div>
                </div>

                {/* <h3>How To Play</h3>
                <div> First you need to get the name of the movie. You want to select a movie where there is a crime or a murder, and where a group of people can be the suspect. Anyone could be the killer. If it's a movie you seen that nobody else has you can already create the movie before watching it and put in all the suspects.
                If you've never seen it, then just enter in the movie and begin watching. Once you begin, to watch the movie, pause it once a crime or murder has been committed. You want to make sure it's not obvious who committed the murder.
                </div>

                <div className="landing__objectives">
                    <h3>How to win?</h3>
                    <div> After that we can head over to the suspects tab. From the list of suspects that you see below you can either choose one of the existing suspects, or if they aren't listed below you can create a new one. In order to throw off other users when you create a suspect, you would need to create several and only indicate that one is the guilty party. You want to create multiple suspects so it helps to throw off other people's guesses. And of course if you don't know who the actual killer is just guess. It'll be all the more fun at the end of the game. Once all the suspects are in and everybody makes their guess begin playing the movie again until ultimately the killer or criminal is found out. Then you can head back to the app and see everyone's selections to see who was correct. They want to see who done it all along.
                    </div>

                </div> */}

                <div className="landing__intro">
                    <h3>1. Add or choose a movie</h3>
                    <div> First lets choose a movie from the movie tab to play. If theres a movie that you want thats not on the list, feel free to create one. </div>
                </div>

                <div className="landing__announce">
                    <h3>2. Lets have a Movie Night</h3>
                    <div>Now that you have your movie created you can now head to the Movie Night tab and create a movie night and select a movie for everyone to join, or join an exiting one with a movie already attached.</div>

                </div>
                <div className="landing__choose_movie">
                    <h3>3. Start the Movie to Start the Game</h3>
                    <div>Now lets start the movie and wait for a crime to happen. once it does, PAUSE THE MOVE and CHOOSE A SUSPECT!</div>
                </div>

                <div className="landing__guilty_suspect">
                    <h3>4. Go to the suspects tab</h3>
                    <div> Now that you have chosen a movie, head to the Suspects tab choose from a list of suspects. you can edit the one who you think is the criminal, or you can create a character and slect that they are the one WhoDunIt</div>
                </div>

                <div className="landing__resume">
                    <h3>5. Resume the Movie</h3>
                    <div> once everyone has chosen their suspect, resume the movie until the crime is solved and the criminal / killer is revealed.</div>
                </div>

                <div className="landing__finish">
                    <h3>6. Has the movie reached the end?</h3>
                    <div>Once the move has completed, reopen the app and see who guessed correctly. Make sure theres no twist ending and that the credits are rolling.</div>
                </div>

                <div className="landing__winner">
                    <h3>7. Who Guessed correctly? </h3>
                    <div> The one who chose the correct suspect in the movie is the winner! If no one guessed corretly, then you can always play again.</div>
                </div>

                <div className="landing__over">
                    <h3>8. Found WhoDun It?</h3>
                    <div> Now that a winner has been declared, feel free to start another movie and invite your friends to another Movie Night!</div>
                </div>
            </div>
        </article>
    )
}