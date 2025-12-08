import Footer from '@components/Footer';
import { Link } from 'react-router';

function NoMatch() {
  return (
    <>
      <main className="wrapper py-10 mt-10 text-center">
        <p className="py-10 text-xl">Whoops!</p>
        <h1>404</h1>
        <p className="py-10">Looks like the page you're looking for doesn't exist.</p>
        <Link to="/" className="py-2 px-4 my-6 inline-block border-2">
          Take me back home
        </Link>
      </main>
      <Footer />
    </>
  );
}

export default NoMatch;
