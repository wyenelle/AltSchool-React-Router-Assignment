import React from "react";
import Info from "./info/Info";
import {Routes,Route} from 'react-router-dom'

const Blogs = () => {
  let styles = {
    margiinTop : '1em',
    color : '#eee',
  };
const styles_2 = {
  marginBottom : '5em'
}
const paragraphs = {
  margiinTop : 'em',
  fontWeight : 400,
  fontSize : '20px'
}
  return (
    <main style={styles} className="">
      <div style={styles_2} className="center-all">
        <h1>Blog</h1> <br/>
        <p style={paragraphs}>
          Welcome to the <b>Blog</b> page
        </p>



      </div>



      <Routes>
        <Route path="info" element={<Info />} />
      </Routes> 
    </main>
  );
};

export default Blogs;
