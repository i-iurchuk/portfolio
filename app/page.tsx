import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-300 px-5 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
      <div>
        <main>
          <FAQ />
        </main>

        <Footer />
      </div>
    </div>
  );
}
