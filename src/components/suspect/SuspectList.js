import React, { useContext, useEffect } from "react"
import { SuspectContext } from "./SuspectProvider.js"
import { useHistory } from 'react-router'

export const SuspectList = () => {

    const { suspects, getSuspects } = useContext(SuspectContext)

    const history = useHistory()

    useEffect(() => {
        getSuspects()
    }, [])

    return (
        <>
            <header className="suspect__new">
                <h1>WhoDunIt Characters</h1>
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/suspect/new" })
                    }}>Add New Characters</button>
            </header>

            <article className="suspects">
                {
                    suspects.map(suspect => {

                        return <section key={`suspect--${suspect.id}`} className="suspect">

                            <div className="suspect__image">
                                <img src={suspect.suspect_image_url}></img></div>

                            <div className="suspect__name">Suspect:   {suspect.name}</div>

                            <div className="suspect__description">Description:   {suspect.description}</div>

                            <div className="suspect__movie">Who did it?:   {suspect.movie.name}</div>

                            <div className="suspect__guilty"> Did they do it?:   {suspect.guilty.label} </div>

                            <div className="suspect__edit">
                                <button className="btn btn-3"
                                    onClick={() => {
                                        history.push(`/suspect/${suspect.id}/edit`)
                                    }}>Edit</button>
                            </div>

                        </section>
                    })
                }

            </article>
        </>
    )
}