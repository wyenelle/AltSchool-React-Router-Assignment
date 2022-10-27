import React from "react";

const Home = () => {
  let styles = {
    height: "100vh",
    display: "flex",
    color : '#eee',
    fontSize : '20px',
    padding : 20, 
    flexDirection : 'column',
    justifyContent: "center",
    alignItems: "center",
  };
   const styles_2 = {
    padding : 10,
    textAlign : 'center'
   }

  return (
    <div style={styles} className="center-all">
      <h1>Home Page</h1> 
      <p>
        Welcome to the <b>Home</b> page
      </p>

      <p style={styles_2}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dignissimos odio rerum dolor ipsum! Cupiditate nulla repellat libero. Minus, eum? Ex in cum debitis officiis soluta sit vero ut omnis!
      </p>
    </div>
  );
};

export default Home;
