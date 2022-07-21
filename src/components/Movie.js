import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
function Movie({ coverImage, id, title, year, summary, genres }) {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
      <p>{year}</p>
      <p>{summary}</p>
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
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;