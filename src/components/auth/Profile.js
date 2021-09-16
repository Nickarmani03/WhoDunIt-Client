import React, { useContext, useEffect } from "react"
import { ProfileContext } from "./ProfileProvider.js"
import "./Profile.css"


export const Profile = () => {

    const { profile, getProfile } = useContext(ProfileContext)


    useEffect(() => {
        getProfile();
    }, []);

    return (
//         <>
//             <header className="profile__new">
//                 <h1>WhoDunIt Profiles</h1>
//             </header>

//             <article className="profiles">
//                 {
//                     profile.map(profile => {
//                         return <div className="profile" id={`profile--${profile.id}`} key={profile.id}>
//                             <div className="profile__name">Name: {profile.user.first_name} {profile.user.last_name}</div>

//                             <img src={profile.profile_image_url} alt="ProfilePic" />

//                             <div className="profile__bio">Bio:  {profile.user.bio}</div>

//                             <div className="profile__username">Username: {profile.user.username}</div>
//                             <div>Email: {profile.user.email}</div>

//                             <div>Profile Type: {
//                                 profile.is_staff
//                             }
//                             </div>

//                         </div>

//                     })
//                 }
//             </article>
//         </>

//     );
// };

<article className="profile">
            <header>
                <h1>Your Profile</h1>
            </header>
            <section className="profile__info">
                <header className="profile__header">
                    <h3>Your Info</h3>
                </header>
                <div className="profile__name">
                    Welcome: {profile.player && profile.player.user.first_name} {profile.player && profile.player.user.last_name}
                </div>
                <div className="profile__username">Username: {profile.player && profile.player.user.username}</div>
                <div className="profile__bio">About you: {profile.player && profile.player.bio}</div>
            </section>
            <section className="profile__registrations">
                <header className="registrations__header">
                    <h3>Your Movie Nights</h3>
                </header>
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

