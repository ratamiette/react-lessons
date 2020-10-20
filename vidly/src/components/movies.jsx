import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    render() {
        const { length: moviesCount } = this.state.movies;

        if(moviesCount === 0)
            return <h2>There are no movies in the database.</h2>;

        return (
            <React.Fragment>
                <h2>Showing {moviesCount} movies in the Database.</h2>
                
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.movies.map( movie => {
                            return (
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                        <button type="button" onClick={ () => this.handleDelete(movie) } className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }

    handleDelete = movieToDelete => {
        const movies = this.state.movies.filter(movie => movie._id !== movieToDelete._id);
        this.setState({ movies });
    }
}
 
export default Movies;