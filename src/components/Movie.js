import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
function Movie({ coverImage, id, title, year, rating, summary, genres }) {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
      <p>{year}</p>
      <p>{summary}</p>
      <p>{rating}</p>
      <ul>
        {genres.map((gen) => (
          <li key={gen}>{gen}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;