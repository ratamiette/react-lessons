import React, { Component } from "react";

class MovieForm extends Component {
  render() {
    const { match } = this.props;

    return (
      <React.Fragment>
        <h2>Movie Details - {match.params.id}</h2>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleSave}
        >
          Save
        </button>
      </React.Fragment>
    );
  }

  handleSave = () => {
    this.props.history.push("/movies");
  };
}

export default MovieForm;
