import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "./firebase";

const Home = ({ isAuth }) => {
  const [blogs, setBlogs] = useState([]);
  const colRef = collection(db, "blogs");

  const deletePost = async (id) => {
    const postDoc = doc(db, "blogs", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(colRef);
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBlogs();
  }, [colRef]);

  return (
    <div className="homepage">
      {blogs.map((post) => {
        return (
          <div
            className="post"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px",
              border: "3px solid #f1356d",
              borderRadius: "30px",
              padding: "12px",
            }}
          >
            <div
              className="post-header"
              style={{
                display: "flex",
              }}
            >
              <div>
                <h2
                  style={{
                    color: "#f162ff",
                  }}
                >
                  {" "}
                  {post.title}
                </h2>
                <p
                  style={{
                    color: "darkgrey",
                    marginTop: "15px",
                  }}
                >
                  {post.body}
                </p>
              </div>
              <div
                className="deletePost"
                style={{
                  display: "inline-block",
                  marginLeft: "20px",
                }}
              >
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    className="btn"
                    style={{
                      height: "35px",
                      width: "35px",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
