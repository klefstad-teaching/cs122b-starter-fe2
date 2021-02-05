import React from "react";

/*
  Using localStorage is similar to how we use
  dictionary.
  
  To set a variable call `localStorage.set("key", value)`
  To get a variable call `localStorage.get("key")`

  Local Storage persists through website refreshes so
  it is perfect for storing things we dont want to lose
  like a users session

  You must call `const localStorage = require("local-storage");`
  in any class that you want to use this in, it is the same
  local storage in the entire website regardless of where you call
  it as each website gets the same instance of the storage.

  So think of it as a global dictionary.
*/
const localStorage = require("local-storage");

const Login = ({ history, location, match }) => {
    // The Top ({ history, location, match }) is a short hand for the following code:
    //     const Login = (props) => {
    //         const { history, location, match } = props;
    // If you want to accept more props just place it there like this:
    //     const Login = ({ history, location, match, yourVar }) => {

    return (
        <div className="form-box">
            <h1>Login </h1>
        </div>
    );
}

export default Login;
