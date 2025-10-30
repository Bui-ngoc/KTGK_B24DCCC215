import React from 'react';
import { Post } from '../types';
import { useNavigate } from 'react-router-dom';

 /**Hiển thị một bài viết */
type Props = {
  post: Post;
  onDelete: (id: number) => void;
};

export default function PostCard({ post, onDelete }: Props) {
  const navigate = useNavigate();

  const short = post.content.length > 100 ? post.content.slice(0, 100) + '...' : post.content;

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 6, overflow: 'hidden' }}>
      <img src={post.thumbnail} alt={post.title} style={{ width: '100%', height: 140, objectFit: 'cover' }} />
      <div style={{ padding: 12 }}>
        <h3 style={{ margin: '4px 0' }}>{post.title}</h3>
        <div style={{ fontSize: 12, color: '#666' }}>{post.author} • {post.date}</div>
        <p style={{ marginTop: 8 }}>{short}</p>
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <button onClick={() => navigate(`/posts/${post.id}`)}>Đọc thêm</button>
          <button onClick={() => onDelete(post.id)} style={{ color: 'red' }}>Xóa</button>
        </div>
      </div>
    </div>
  );
}
