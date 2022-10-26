import React from "react";

const Home = () => {
  let styles = {
    height: "100vh",
    display: "flex",
    color : '#eee',
    flexDirection : 'column',
    justifyContent: "center",
    alignItems: "center",
  };
  
  return (
    <div style={styles} className="center-all">
      <h1>Home Page</h1> 
      <p>
        Welcome to the <b>Home</b> page
      </p>
    </div>
  );
};

export default Home;
