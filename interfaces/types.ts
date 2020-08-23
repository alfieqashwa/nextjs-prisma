export type Data = {
  name: string;
  gender: string;
};

export type Article = {
  id: number;
  title: string;
  content: string;
  published: boolean;
};

export type User = {
  id: number;
  name: string;
  email: string;
  articles?: Article[];
};
