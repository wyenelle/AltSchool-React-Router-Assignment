import React, { useEffect } from "react";
import "./user.css";
import AOS from "aos";
import "aos/dist/aos.css";

const User = ({ user }) => {
  useEffect(() => {
    // iniyializing animation on screll to add scroll effects on components
    AOS.init();
  }, []);

  // destructurind data from the api call
  const {
    name: { first, title, last },
  } = user;
  const {
    picture: { large },
  } = user;
  const { email } = user;
  const { phone } = user;

  return (
    <div data-aos="zoom-up" className="user-container">
      <div>
        <div className="user-img-container">
          <img src={large} className="user-img" />
        </div><br />
        <h2> {`${title} ${first} ${last}`} </h2>
        <p>{email.length > 23 ? `${email.slice(0,23)}...` : email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default User;
