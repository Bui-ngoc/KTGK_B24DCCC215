export interface Post {
  id: number;
  title: string;
  author: string;
  thumbnail: string;
  content: string;
  category: string;
  date: string;
}

export type NewPost = Omit<Post, 'id' | 'date'>;
