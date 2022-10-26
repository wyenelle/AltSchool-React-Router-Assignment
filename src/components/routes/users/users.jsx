import React, { useEffect, useState } from "react";
import ErrorBoundary from "../../ErrorBoundary";
import Loading from "../loading";
import User from "./user";
import axios from "axios";
import Pagination from "./pagination";
import "./users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);

  const url = "https://randomuser.me/api/?results=120";

  useEffect(() => {
    // fetch data and set users while checking against null or undefined values
    axios.get(url).then((response) => setUsers(response?.data?.results));
  setIsLoading(false)
  }, []);
  // getting the index values of the data to be shown on the page
  const index_of_last_post = currentPage * postPerPage;
  const index_of_first_post = index_of_last_post - postPerPage;

  // this array contains the starting point for the fast and data to be shown per page
  const current_post = users.slice(index_of_first_post, index_of_last_post);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(users)
  return (
    <div className="users-container">
      <div className="wrapper">
        { users.length < 1  && <Loading /> }
        
        {isLoading ? (
          '...'
        ) : (
          current_post.map((user, idx) => (
            <ErrorBoundary>
              {" "}
              <User user={user} key={idx} />
            </ErrorBoundary>
          ))
        )}
      </div>
      <Pagination
        postPerPage={postPerPage}
        totalPost={users.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Users;
