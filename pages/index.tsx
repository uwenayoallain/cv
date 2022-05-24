import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <section className='header_section'>
        <div className='flex justify-content'>
          <div className='logo' />
          <div className='nav-links'>
            <Link href='/'>
              <a>How It Works</a>
            </Link>
            <Link href='/'>
              <a>FAQ</a>
            </Link>
            <Link href='/'>
              <a>About</a>
            </Link>
            <Link href='/'>
              <a>Contact</a>
            </Link>
          </div>
          <Link href='/'>
            <a className='btn'>Login</a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
