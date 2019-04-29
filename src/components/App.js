import React from 'react';
import Card from './Card';
import axios from 'axios';
import { connect } from 'react-redux';
import { endpoints, getImageUrl } from '../../config';
import { setGenre } from '../actions/genreAction';
import { setMovie } from '../actions/movieAction';
import { setLike, setUnlike } from '../actions/likeAction';
import { getMovieList } from '../thunks';

class App extends React.Component {
    componentDidMount() {
        
    }

    render() {
        const {movieList, genreList, currentGenre} = this.props;
        const filteredMovies = currentGenre !== null ? movieList.filter(movie => {
            if (movie.genre_ids.includes(currentGenre)) {
                return movie;
            }
        }).map((listItem) => (
            <Card
                movieId={listItem.id}
                backgroundImage={getImageUrl(listItem.backdrop_path)}
                title={listItem.original_title}
                releaseDate={listItem.release_date}
                score={listItem.vote_average}
                votes={listItem.vote_count}
                description={listItem.overview}
                setFavoriteMovie={this.setFavoriteMovie}
                favorite={listItem.favorite}
            />
        )) : movieList.map((listItem) => (
            <Card
                movieId={listItem.id}
                backgroundImage={getImageUrl(listItem.backdrop_path)}
                title={listItem.original_title}
                releaseDate={listItem.release_date}
                score={listItem.vote_average}
                votes={listItem.vote_count}
                description={listItem.overview}
                setFavoriteMovie={this.setFavoriteMovie}
                favorite={listItem.favorite}
            />
        ));

        return (
            <div>
                {genreList.map((listItem) => (
                    <span
                        className='genre'
                        onClick={() => this.getCurrentGenre(listItem.id)}
                    >
              {listItem.name}
            </span>
                ))}
                <span className='genre' onClick={() => this.setDefaultGenreState()}>
                    All genres
                </span>
                {filteredMovies}
            </div>
        );
    }
}

export default App;
