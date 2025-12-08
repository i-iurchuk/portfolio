import ButtonLink from '@components/ButtonLink';
import Eye from '@components/Eye';

function NoMatch() {
  return (
    <>
      <title>404 – Page Not Found | Iryna Iurchuk</title>

      <main className="wrapper flex min-h-[90vh] flex-col items-center justify-center text-center">
        <div className="items-center">
          <div className="flex justify-center text-6xl">
            <span className="text-6xl font-bold">W</span>

            <div className="m-3">
              <div className="flex">
                <Eye />
                <Eye />
              </div>
              <div className="mx-auto h-8 w-12 -rotate-15 rounded-[50%] border-b-[1rem] border-red-400"></div>
            </div>

            <span className="text-6xl font-bold">ps!</span>
          </div>

          <p className="my-20 text-(--color-base-gray)">
            <span className="inline-block border-r border-(--color-base-gray) px-6 py-5 font-bold">404</span>
            <span className="inline-block px-6 py-5">The page you're looking for doesn't exist.</span>
          </p>
        </div>

        <ButtonLink to="/" aria-label="Go back to homepage">
          Take me back home
        </ButtonLink>
      </main>
    </>
  );
}

export default NoMatch;
