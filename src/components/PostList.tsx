import React, { useMemo, useState } from 'react';
import { Post } from '../types';
import PostCard from './PostCard';
import { useNavigate } from 'react-router-dom';

/* Trang chủ hiển thị danh sách */
type Props = {
  posts: Post[];
  onDelete: (id: number) => void;
};

export default function PostList({ posts, onDelete }: Props) {
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter((p) => p.title.toLowerCase().includes(q));
  }, [filter, posts]);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <h2>Danh sách bài viết ({posts.length})</h2>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          <input placeholder="Tìm theo tiêu đề" value={filter} onChange={(e) => setFilter(e.target.value)} />
          <button onClick={() => navigate('/posts/create')}>Viết bài mới</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {filtered.map((p) => (
          <PostCard key={p.id} post={p} onDelete={(id) => {
            const ok = window.confirm('Bạn có chắc muốn xáo bài viết này ?');
            if (ok) onDelete(id);
          }} />
        ))}
      </div>
    </div>
  );
}
