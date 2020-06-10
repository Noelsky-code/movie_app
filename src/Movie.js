import React,{Component} from 'react';
import './Movie.css';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';



function Movie({title,poster,genres,synopsis}){
    return(
        <div className="Movie">
            <div className="Movie_Columns">
              <MoviePoster poster = {poster} alt={title}/>
            </div>
            <div className="Moive_Columns">
              <h1>{title}</h1>
              <div className="Movie_Genres">
                {genres.map((genres,index)=>
                    <Movie_Genres genres ={genres} key= {index}/>
                )}
              </div>
              <p className="Movie_Synopsis">
                {synopsis}
              </p>
                    
            </div>
        </div>
    )
}

function MoviePoster({poster,alt}){
    return(
        <img src={poster} alt = {alt} title= {alt} className = "MoviePoster"/>
    )
}

function Movie_Genres({genres}){
    return(
        <span className ="Movie_Genre">{genres} </span>
    )
}

Movie.protoType={
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired

}
Movie_Genres.protoType={
    genres : PropTypes.string.isRequired
}

MoviePoster.propTypes={
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Movie;