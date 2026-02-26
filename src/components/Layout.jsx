import Navbar from './Navbar';
import Footer from './Footer';
import { profile } from '../data/profile';

export default function Layout({ children }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer data={profile} />
    </>
  );
}
