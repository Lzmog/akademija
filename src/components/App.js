import React from 'react';
import Card from './Card';
import axios from 'axios';
import {endpoints, getImageUrl} from '../../config';
import {setActiveGenre, setHeart, unsetHeart} from '../action';
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
        const {movieList, genreList, activeGenre, onSetActiveGenre, onSetHeart, heartMovies, onUnsetHeart} = this.props;
        console.log(activeGenre);
        const filteredMovies =
            activeGenre !== null ?
            movieList &&movieList.filter(movie => {
            if (movie.genre_ids.includes(activeGenre)) {
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
                heart={heartMovies.includes(listItem.id) ? onUnsetHeart : onSetHeart}
                isHearted={heartMovies.includes(listItem.id)}
            />
        )) :
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
                heart={heartMovies.includes(listItem.id) ? onUnsetHeart : onSetHeart}
                isHearted={heartMovies.includes(listItem.id)}
            />
        ));

        return (
            <div>
                {genreList  &&genreList.map((listItem, i) => (
                    <span
                        key={i}
                        className='genre'
                        onClick={() => onSetActiveGenre(listItem.id)}
                    >
              {listItem.name}
            </span>
                ))}
                <span className='genre' onClick={() => onSetActiveGenre(null)}>
                    All genres
                </span>
                {filteredMovies}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    genreList: state.genres.list,
    activeGenre: state.genres.activeGenre,
    movieList: state.movies.list,
    heartMovies: state.movies.heartMovies
});

const mapDispatchToProps = (dispatch) => ({
    onGetGenreList: () => dispatch(getGenreList()),
    onGetMoviesList: () => dispatch(getMoviesList()),
    onSetActiveGenre: (id) => dispatch(setActiveGenre(id)),
    onSetHeart: (movieId) => dispatch(setHeart(movieId)),
    onUnsetHeart: (movieId => dispatch(unsetHeart(movieId)))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
