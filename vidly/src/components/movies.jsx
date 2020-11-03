import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import MoviesTable from "./moviesTable";
import { getGenres } from "../services/genreService";
import { getMovies, deleteMovie } from "../services/movieService";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import SearchBox from "./common/searchBox";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: {
      path: "title",
      order: "asc",
    },
  };

  async componentDidMount() {
    const { data } = await getGenres();
    const genres = [{ _id: "", name: "All Genres" }, ...data];
    const { data: movies } = await getMovies();
    this.setState({ movies, genres });
  }

  render() {
    const { length: moviesCount } = this.state.movies;
    const { user } = this.props;
    const {
      pageSize,
      currentPage,
      sortColumn,
      genres,
      selectedGenre,
      searchQuery,
    } = this.state;

    if (moviesCount === 0) return <h2>There are no movies in the database.</h2>;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          { user && <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>}
          <h2>Showing {totalCount} movies in the Database.</h2>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      movies: allMovies,
    } = this.state;

    const genreFilter = (movie) => movie.genre._id === selectedGenre._id;
    const searchFilter = (movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase());

    let filtered = allMovies;

    if (searchQuery) {
      filtered = allMovies.filter(searchFilter);
    } else if (selectedGenre && selectedGenre._id) {
      filtered = allMovies.filter(genreFilter);
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  handleDelete = async (movieToDelete) => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter(
      (movie) => movie._id !== movieToDelete._id
    );
    this.setState({ movies });

    try {
      await deleteMovie(movieToDelete._id);
    } catch (exception) {
      if (exception.response && exception.response.status === 404)
        toast.error("This movie has already been deleted.");

      this.setState({ movies: originalMovies });
    }
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ searchQuery: "", selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };
}

export default Movies;
