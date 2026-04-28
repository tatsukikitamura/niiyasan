import { Arrow } from './icons';
import type { PageId } from '../types';

type Props = {
  setPage: (p: PageId) => void;
};

export function Footer({ setPage }: Props) {
  const go = (id: PageId) => {
    setPage(id);
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-cta">
          <div className="ft-q">
            <em>つくる</em>こと、
            <br />
            一緒に始めませんか。
          </div>
          <a className="ft-btn" onClick={() => go('contact')}>
            Get in touch <Arrow s={12} />
          </a>
        </div>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="lg">会社名(仮)</div>
            <p>映像、音楽、イベント。表現することすべての裏側に、わたしたちはいます。</p>
          </div>
          <div className="footer-col">
            <h4>Sitemap</h4>
            <ul>
              <li>
                <a onClick={() => go('home')}>Home</a>
              </li>
              <li>
                <a onClick={() => go('about')}>About</a>
              </li>
              <li>
                <a onClick={() => go('services')}>Services</a>
              </li>
              <li>
                <a onClick={() => go('works')}>Works</a>
              </li>
              <li>
                <a onClick={() => go('blog')}>Journal</a>
              </li>
              <li>
                <a onClick={() => go('contact')}>Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a>動画制作</a>
              </li>
              <li>
                <a>楽曲制作</a>
              </li>
              <li>
                <a>イベント制作</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li>
                <a>Instagram</a>
              </li>
              <li>
                <a>X / Twitter</a>
              </li>
              <li>
                <a>YouTube</a>
              </li>
              <li>
                <a>SoundCloud</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 会社名(仮) Inc.</div>
          <div>東京都 / Tokyo, Japan</div>
        </div>
      </div>
    </footer>
  );
}
