import React, { useState } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

import Page from "./Page";

const CreatePost = (props: any) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();

    try {
      const response = await Axios.post("/create-post", {
        title: title,
        body: body,
        token: localStorage.getItem("complexAppToken"),
      });
      // Redirect to new post url
      props.history.push(`/post/${response.data}`);
      console.log("New post was created");
      props.addFlashMessage("The new post has been added");
    } catch (error) {
      console.log("There was a problem");
      console.log(error);
    }
  };

  return (
    <Page title="Create New Post">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="post-title" className="text-muted mb-1">
            <small>Title</small>
          </label>
          <input
            name="title"
            id="post-title"
            className="form-control form-control-lg form-control-title"
            type="text"
            placeholder=""
            autoFocus
            autoComplete="off"
            onChange={(e: any) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="post-body" className="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <textarea
            name="body"
            id="post-body"
            className="body-content tall-textarea form-control"
            onChange={(e: any) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary">Save New Post</button>
      </form>
    </Page>
  );
};

export default withRouter(CreatePost);
