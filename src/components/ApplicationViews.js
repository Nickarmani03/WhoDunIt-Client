import React from "react"
import { Route } from "react-router-dom"
import { MovieList } from "./movie/MovieList.js"
import { MovieProvider } from "./movie/MovieProvider.js"
import { MovieForm } from "./movie/MovieForm.js"
import { EditMovieForm } from "./movie/EditMovieForm.js";
import { MovieNightList } from "./movie_nights/MovieNightList.js"
import { MovieNightProvider } from "./movie_nights/MovieNightProvider.js"
import { MovieNightForm } from "./movie_nights/MovieNightForm.js"
import { ProfileProvider } from "./auth/ProfileProvider.js"
import { SuspectList } from "./suspect/SuspectList.js"
import { SuspectProvider } from "./suspect/SuspectProvider.js"
import { SuspectForm } from "./suspect/SuspectForm.js"
import { Profile } from "./auth/Profile.js"
import { Landing } from "./auth/Landing.js"
import { LandingProvider } from "./auth/LandingProvider.js"


export const ApplicationViews = () => {
  return <>
    <main style={{
      margin: "5rem 2rem",
      lineHeight: "1.75rem"
    }}>

      <LandingProvider>
        <Route exact path="/">
          <Landing />
        </Route>
      </LandingProvider>

      <MovieProvider>

        <Route exact path="/movie">
          <MovieList />
        </Route>

        <Route exact path="/movies/new">
          <MovieForm />
        </Route>

        <Route exact path="/movies/:movieId(\d+)/edit">
          <EditMovieForm />
        </Route>

      </MovieProvider>

      <MovieNightProvider>
        <Route exact path="/movie_night">
          <MovieNightList />
        </Route>
        <MovieProvider>
          <Route exact path="/movie_night/new">
            <MovieNightForm />
          </Route>
        </MovieProvider>
      </MovieNightProvider>

      <SuspectProvider>
        <Route exact path="/suspect">
          <SuspectList />
        </Route>
        <Route exact path="/suspect/new">
          <SuspectForm />
        </Route>
      </SuspectProvider>

      <ProfileProvider>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </ProfileProvider>
    </main>
  </>
}