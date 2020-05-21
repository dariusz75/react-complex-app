import React, { useEffect, useState } from "react";
import Axios from "axios";

const HeaderLoggedOut = (props: any) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    try {
      const response = await Axios.post("/login", { username, password });
      if (response.data) {
        console.log(response.data);
        localStorage.setItem("complexAppToken", response.data.token);
        localStorage.setItem("complexAppUsername", response.data.username);
        localStorage.setItem("complexAppAvatar", response.data.avatar);
        props.setLoggedIn(true);
      } else {
        console.log("Incorrect username/password.");
      }
    } catch (error) {
      console.log("There was an error");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            name="username"
            className="form-control form-control-sm input-dark"
            type="text"
            placeholder="Username"
            autoComplete="off"
            onChange={(e: any): void => setUsername(e.target.value)}
          />
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            name="password"
            className="form-control form-control-sm input-dark"
            type="password"
            placeholder="Password"
            onChange={(e: any): void => setPassword(e.target.value)}
          />
        </div>
        <div className="col-md-auto">
          <button className="btn btn-success btn-sm">Sign In</button>
        </div>
      </div>
    </form>
  );
};

export default HeaderLoggedOut;
