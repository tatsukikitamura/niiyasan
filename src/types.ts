export type PageId = 'home' | 'about' | 'services' | 'works' | 'blog' | 'contact';

export type PageProps = {
  setPage: (p: PageId) => void;
};
