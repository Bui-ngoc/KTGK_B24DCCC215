import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Post } from '../types';

/**Trang chi tiets bài viết  */
type Props = {
  posts: Post[];
  onDelete: (id: number) => void;
};

export default function PostDetail({ posts, onDelete }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const pid = Number(id);
  const post = posts.find((p) => p.id === pid);

  if (!post) return <div>Bài viết không tìm thấy</div>;

  const handleDelete = () => {
    const ok = window.confirm('Bạn có chắc muốn xáo bài viết này ?');
    if (ok) {
      onDelete(post.id);
      navigate('/posts');
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <h1>{post.title}</h1>
      <div style={{ color: '#666', marginBottom: 12 }}>{post.author} • {post.date} • {post.category}</div>
      <img src={post.thumbnail} alt={post.title} style={{ width: '100%', height: 300, objectFit: 'cover' }} />
      <article style={{ marginTop: 16, lineHeight: 1.6 }}>{post.content}</article>
      <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
        <button onClick={() => navigate('/posts')}>Quay lại</button>
        <button onClick={() => navigate(`/posts/edit/${post.id}`)}>Chỉnh sửa</button>
        <button onClick={handleDelete} style={{ color: 'red' }}>Xóa bài viết</button>
      </div>
    </div>
  );
}
