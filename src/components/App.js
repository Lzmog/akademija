import React from 'react';
import Card from './Card';
import axios from 'axios';
import {endpoints, getImageUrl} from '../../config';
import {} from '../action';
import {connect} from "react-redux";
import {getMoviesList, getGenreList} from '../thunks';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.props.onGetMoviesList();
        this.props.onGetGenreList();
    }

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
        const {movieList, genreList, currentGenre = null} = this.props;
        console.log(movieList, genreList);
        const filteredMovies =
            // currentGenre !== null ?
        //     movieList.filter(movie => {
        //     if (movie.genre_ids.includes(currentGenre)) {
        //         return movie;
        //     }
        // }).map((listItem) => (
        //     <Card
        //         movieId={listItem.id}
        //         backgroundImage={getImageUrl(listItem.backdrop_path)}
        //         title={listItem.original_title}
        //         releaseDate={listItem.release_date}
        //         score={listItem.vote_average}
        //         votes={listItem.vote_count}
        //         description={listItem.overview}
        //         setFavoriteMovie={this.setFavoriteMovie}
        //         favorite={listItem.favorite}
        //     />
        // )) :
            movieList &&movieList.map((listItem) => (
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
                {genreList  &&genreList.map((listItem, i) => (
                    <span
                        key={i}
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

const mapStateToProps = (state) => ({
    genreList: state.genres.list,
    movieList: state.movies.list,
});

const mapDispatchToProps = (dispatch) => ({
    onGetGenreList: () => dispatch(getGenreList()),
    onGetMoviesList: () => dispatch(getMoviesList()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
