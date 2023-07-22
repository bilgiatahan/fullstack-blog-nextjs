import React from "react";
import Layout from "../components/Layout";
import ReactPlayer from "react-player";

const Blog: React.FC = () => {
  return (
    <Layout>
      <div className="box">
        <div className="name">Bilgi</div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png"
          alt=""
          width="100"
          className="heart"
        />
        <div className="name">Betul</div>
      </div>
      <h2>Seni Seviyorum</h2>
      <div className="container">
        <div className="mario"></div>
      </div>

      <div className="player">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=o2gAwh8x4Bs"
          controls={false}
          loop={true}
          width={"200px"}
          height={"200px"}
          style={{ marginTop: "200px" }}
        />
      </div>
    </Layout>
  );
};

export default Blog;
