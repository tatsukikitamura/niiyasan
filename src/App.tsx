import { useState } from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ServicesPage } from './pages/Services';
import { WorksPage } from './pages/Works';
import { BlogPage } from './pages/Blog';
import { ContactPage } from './pages/Contact';
import type { PageId } from './types';

export default function App() {
  const [page, setPage] = useState<PageId>('home');

  return (
    <>
      <Nav page={page} setPage={setPage} />
      <main>
        {page === 'home' && <HomePage setPage={setPage} />}
        {page === 'about' && <AboutPage />}
        {page === 'services' && <ServicesPage />}
        {page === 'works' && <WorksPage />}
        {page === 'blog' && <BlogPage />}
        {page === 'contact' && <ContactPage />}
      </main>
      <Footer setPage={setPage} />
    </>
  );
}
