import React, { useContext, useEffect } from "react"
import { ProfileContext } from "./ProfileProvider.js"
import "./Profile.css"


export const Profile = () => {

    const { profile, getProfile } = useContext(ProfileContext)


    useEffect(() => {
        getProfile();
    }, []);

    return (
        <article className="profile">
            <header>
                <h1>Your Profile</h1>
            </header>
            <section className="profile__info">
                <div className="profile__header">
                    <h3>Your Info</h3>
                </div>
                <div className="profile__name">
                    Welcome: {profile.player && profile.player.user.first_name} {profile.player && profile.player.user.last_name}
                </div>
                <div className="profile__username">Username: {profile.player && profile.player.user.username}</div>

                <div className="profile__image">
                    <img src={profile.player?.profile_image_url}></img></div>

                <div className="profile__bio">About you: {profile.player && profile.player.bio}</div> <header className="registrations__header">
                    <h3>Your Movie Nights</h3>
                </header>
            </section>
            <section className="profile__registrations">
               
                <div className="registrations">
                    {
                        profile.movie_nights?.map(movie_night => {
                            return <div key={movie_night.id} className="registration">
                                <div className="registration__movie">{movie_night.movie.title}</div>
                                <div>{movie_night.description}</div>
                                <div>
                                    {movie_night.date} @ {movie_night.time}
                                </div>
                            </div>
                        })
                    }
                </div>
            </section>
        </article>
    )
}

