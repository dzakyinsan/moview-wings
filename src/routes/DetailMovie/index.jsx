import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";

function Detail() {
  const [movie, setMovie] = useState({});

  const movieId = window.location.pathname.split('/')[2] 

  async function getMovie() {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=3a2fff02&i=${movieId}&plot=full`
    );
    const movie = await response.json();
    setMovie(movie);
  }

  useEffect(() => {
    getMovie();
  },[])

  return (
    <Row>
      <Col span={12}>
        <div>title dll</div>
        <Row>
          <Col span={12}>
            <Button type="primary">Play</Button>
          </Col>
          <Col span={12}>
            <Button type="primary">Add Bookmark</Button>
          </Col>
        </Row>
      </Col>

      <Col span={12}>
        <img src={movie?.Poster || ''} alt='alt'/>
      </Col>
    </Row>
  );
}
export default Detail;
