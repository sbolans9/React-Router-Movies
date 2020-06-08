import React from 'react';
import Movie from './Movie';
import MovieList from './MovieList'
import {Link} from 'react-router-dom'

const MovieCard = props => {
  console.log(props.movies)
  const { director, metascore, stars, id } = props.movies;
  const title = props.movies.title;
  return
  // (
  //   <div className="save-wrapper">
  //     {console.log(id)}
  //     <div className="movie-card">
  //       <h2><em>{title}</em></h2>
  //       <div className="movie-director">
  //         Director: <em>{director}</em>
  //       </div>
  //       <div className="movie-metascore">
  //         Metascore: <strong>{metascore}</strong>
  //       </div>
  //       <h3>Actors</h3>
        
  //       {props.movies.map(star => (
  //         <div key={star} className="movie-star">
  //           {star.stars}
  //           {console.log(star.stars)}
  //         </div>
  //       ))}

  //     </div>
  //     <div className="save-button">Save</div>
  //   </div>
  // )
};

export default MovieCard;
