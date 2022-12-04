import axios from "axios";
import { useState, useEffect } from "react";
import useUser from "../hooks/useUser";

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  //need to make sure the value of our state variables is kept in sync with the values of our inputs in the return by adding a value and onChange event to the input props
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const { user } = useUser();

  const addComment = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.post(
      `/api/articles/${articleName}/comments`,
      {
        postedBy: name,
        text: comment,
      },
      {
        headers,
      }
    );
    const updatedArticle = response.data;
    onArticleUpdated(updatedArticle);
    setName("");
    setComment("");
  };

  return (
    <div id="add-comment-form">
      <h3>Add a Comment</h3>
      {user && <p>You are posting as {user.email}</p>}

      <label>
        Comment:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="4"
          cols="50"
        />
      </label>
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
