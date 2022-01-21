import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "./firebase";

const Create = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const colRef = collection(db, "blogs");
  // const [isPending, setIsPending] = useState(false);
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(colRef, {
      title,
      body,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    history("/");
  };

  useEffect(() => {
    if (!isAuth) {
      history("/login");
    }
  });

  return (
    <div className="create">
      <h2 className="add">Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label className="label"> Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="label">Blog body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <button type="submit"> Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
