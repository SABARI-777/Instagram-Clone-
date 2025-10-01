import React, { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div>
        {posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <div className="my-3"  key={post.id}>
                {
                  <div className="d-flex align-items-center">
                    <img className="dp rounded-circle" src={post.image} alt="Post" />
                    <h4>{post.username}</h4>
                  </div>
                  }
                <img className="image" src={post.pic} alt="Post" />
                <div className="d-flex">
                  <div><i className="bi bi-heart"></i></div>
                  <div><i className="bi bi-chat"></i></div>
                  <div><i className="bi bi-share"></i></div>
                 {/* used for like,comment,share icon on bootstrap */}
                </div>
                <div>
                  <b> {post.likes} Likes</b>
                </div>
                <div>
                  {post.caption}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading....</div>
        )}
      </div>
    </div>
  );
}

export default Posts;
