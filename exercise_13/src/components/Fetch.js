import React, { useEffect, useState } from "react";

function Fetch({ userId = 1 }) {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      );
      const data = await res.json();
      setPost(data);
    };
    fetchData();
  }, [userId]);
  return (
    <div>
      {post.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Fetch;
