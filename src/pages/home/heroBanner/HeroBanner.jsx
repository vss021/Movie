import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

import "./style.scss";

const HeroBanner = () => {


  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();


  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");


  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);


  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  // for click Search Button

  const searchQueryHandlerOnClickBtn = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    
    <div className="heroBanner">
      {!loading && <div className="backdrop-img">
        <Img src={background} />
      </div>}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Milions of movies, TV shows and people to discover. Explore noew
          </span>

          <div className="searchInput">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              placeholder="Search for a movie or tv show..."
              name=""
              id=""
            />

            <button onClick={searchQueryHandlerOnClickBtn}>Search</button>
          </div>
        </div>

      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
