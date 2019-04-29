import React from 'react';
import Card from './Card';
import axios from 'axios';
import { connect } from 'react-redux';
import { endpoints, getImageUrl } from '../../config';	import { endpoints, getImageUrl } from '../../config';
import { setMovieList } from '../actions';
import { getMovieList } from '../thunks';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            genreList: [],
            movieList: [],
            currentGenre: null,
        };

        this.getMovies();
        this.getGenreList();
    }

    getMovies = () => {
        axios
            .get(endpoints.mostPopularMovies())
            .then((res) => this.setMovieList(res.data.results))
            .catch((error) => console.log(error));
    };

    setMovieList = (list) => {
        const favoriteList = list.map((listItem) => {
            return {...listItem, favorite: false}
        });

        this.setState({
            movieList: favoriteList,
        });
    };

    getGenreList = () => {
        axios
            .get(endpoints.genres())
            .then((res) => this.setGenreList(res.data.genres))
            .catch((error) => console.log(error));
    };

    setGenreList = (list) => {
        this.setState({
            genreList: list,
        });
    };

    getCurrentGenre = (id) => {
        this.setState({
            currentGenre: id,
        });
    };

    setDefaultGenreState = () => {
        this.setState({
            currentGenre: null,
        });
    };

    setFavoriteMovie = (id) => {
        const newList = this.state.movieList.map((listItem) => {
            if (listItem.id === id) {
                return {...listItem, favorite: !listItem.favorite}
            } else {
                return listItem
            }
        });

        this.setState({movieList: newList})
    };

    render() {
        const {movieList, genreList, currentGenre} = this.state;
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
