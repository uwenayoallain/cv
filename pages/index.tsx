import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <section className='header_section'>
        <div className='flex justify-content'>
          <div className='logo' />
          <div>
            <Link href='/'>How It Works</Link>
            <Link href='/'>FAQ</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Contact</Link>
          </div>
          <button className='btn'>
            <Link href='/'>Login</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
