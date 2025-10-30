import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Post } from './types';
import initialPosts from './data/initialPosts';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const createPost = (post: Omit<Post, 'id' | 'date'>) => {
    const id = Math.max(0, ...posts.map((p) => p.id)) + 1;
    const date = new Date().toLocaleDateString();
    setPosts([{ ...post, id, date }, ...posts]);
  };

  const updatePost = (id: number, updated: Omit<Post, 'id' | 'date'>) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updated } : p))
    );
  };

  const deletePost = (id: number) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main style={{ padding: '16px' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/posts" replace />} />
            <Route
              path="/posts"
              element={<PostList posts={posts} onDelete={deletePost} />}
            />
            <Route
              path="/posts/create"
              element={<PostForm onSave={createPost} />}
            />
            <Route
              path="/create"
              element={<PostForm onSave={createPost} />}
            />
            <Route
              path="/posts/:id"
              element={<PostDetail posts={posts} onDelete={deletePost} />}
            />
            <Route
              path="/posts/edit/:id"
              element={<PostForm posts={posts} onSave={updatePost} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
