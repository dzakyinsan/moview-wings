import "./style.scss";

const MovieList = ({ list, range }) => {
  return (
    <div>
      <h5>{range}</h5>
      <div className="countainer-movies">
        {list.map(({ Title, Year, Poster }, i) => (
          <div className="card" key={i}>
            <div className="title-card">
              <p>
                {Title} - {Year}
              </p>
            </div>
            <img src={Poster} alt={Title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
