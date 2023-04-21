import React, { useState, useEffect } from 'react';
import './Global.css'

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>All Posts</h1>
      <input type="text" placeholder="Search posts" onChange={handleSearchChange} />
      {filteredPosts.length > 0 ? (
        <ul>
          {filteredPosts.map(post => (
            <li key={post.id}>
              <a href={`/posts/${post.id}`}>{post.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <div>No results found.</div>
      )}
    </div>
  );
}



export { AllPosts };
