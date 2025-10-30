import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

/** Menu điều hướng  */
const activeStyle = { fontWeight: 700, textDecoration: 'underline' } as const;

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header style={{ background: '#0d6efd', color: 'white', padding: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ fontWeight: 700, fontSize: 18, cursor: 'pointer' }} onClick={() => navigate('/')}>MyBlog</div>      

        <nav style={{ display: 'flex', gap: 8 }}>
          <NavLink to="/posts" style={({ isActive }) => (isActive ? activeStyle : { color: 'white' })}>
            Trang chủ
          </NavLink>
          <NavLink to="/posts/create" style={({ isActive }) => (isActive ? activeStyle : { color: 'white' })}>
            Viết bài
          </NavLink>
        </nav>
        <div style={{ marginLeft: 'auto' }}>
          <button onClick={() => navigate('/posts/create')}>Viết bài mới</button>
        </div>
      </div>
    </header>
  );
}
