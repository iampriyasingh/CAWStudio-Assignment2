import React from "react";
import { useSelector } from "react-redux";
import Blogs from "./Components/Blogs";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import { selectSignedIn } from "./features/userSlice";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./styling/app.css";
import Comments from "./comments/Comments";


const App = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="app">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blogs />}
      <Comments
        commentsUrl="http://localhost:3000/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default App;