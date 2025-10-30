import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Post, NewPost } from '../types';

/**form tạo/sửa bài viết */

type Props = {
  posts?: Post[];
  onSave: any;
};

export default function PostForm({ posts, onSave }: Props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const editingId = id ? Number(id) : undefined;

  const empty: NewPost = { title: '', author: '', thumbnail: '', content: '', category: 'Khác' };
  const [form, setForm] = useState<NewPost>(empty);

  useEffect(() => {
    if (editingId && posts) {
      const p = posts.find((x) => x.id === editingId);
      if (p) setForm({ title: p.title, author: p.author, thumbnail: p.thumbnail, content: p.content, category: p.category });
    }
  }, [editingId, posts]);

  const validate = () => {
    if (!form.title || form.title.trim().length < 10) return 'Tiêu đề: Bắt buộc, ít nhất 10 ký tự';
    if (!form.author || form.author.trim().length < 3) return 'Tác giả: Bắt buộc, ít nhất 3 ký tự';
    if (!form.content || form.content.trim().length < 50) return 'Nội dung: Bắt buộc, ít nhất 50 ký tự';
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) return alert(err);

    if (editingId) {
      // update: onSave(id, postData)
      onSave(editingId, form);
      alert('Cập nhật thành công!');
      navigate(`/posts/${editingId}`);
    } else {
      onSave(form);
      alert('Đăng bài thành công!');
      navigate('/posts');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 800, margin: '0 auto', display: 'grid', gap: 8 }}>
      <h2>{editingId ? 'Chỉnh sửa bài viết' : 'Tạo bài viết mới'}</h2>
      <label>
        Tiêu đề
        <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      </label>
      <label>
        Tác giả
        <input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
      </label>
      <label>
        URL ảnh thumbnail
        <input value={form.thumbnail} onChange={(e) => setForm({ ...form, thumbnail: e.target.value })} />
      </label>
      <label>
        Thể loại
        <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
          <option>Công nghệ</option>
          <option>Du lịch</option>
          <option>Ẩm thực</option>
          <option>Đời sống</option>
          <option>Khác</option>
        </select>
      </label>
      <label>
        Nội dung
        <textarea rows={10} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
      </label>

      <div style={{ display: 'flex', gap: 8 }}>
        <button type="submit">{editingId ? 'Cập nhật' : 'Đăng bài'}</button>
        <button type="button" onClick={() => editingId ? navigate(`/posts/${editingId}`) : navigate('/posts')}>Hủy</button>
      </div>
    </form>
  );
}
