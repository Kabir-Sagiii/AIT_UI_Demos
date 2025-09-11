import { useState } from "react";
import { getPosts } from "./Posts";
function Posts() {
  const [posts, setPosts] = useState([]);
  return (
    <div style={{ padding: "50px" }}>
      <h1>Posts Information</h1>
      <button
        onClick={() => {
          getPosts(setPosts);
        }}
      >
        Get Posts
      </button>

      <div>
        <ol>
          {posts.map(function (post) {
            return (
              <li style={{ marginBottom: "10px", color: "blue" }}>
                {post.body}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Posts;
