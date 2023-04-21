import React, { useState, useEffect } from 'react';

function SinglePost({ match }) {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [match.params.id]);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${match.params.id}/comments`
    )
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error(error));
  }, [match.params.id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>Comments</h2>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.body}</p>
              <p>by {comment.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>No comments found.</div>
      )}
    </div>
  );
}

export {SinglePost}