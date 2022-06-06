import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import template from "public/images/template.svg";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CV| The best cv maker online!</title>
      </Head>
      <section className='header_section'>
        <div className='nav flex justify-content'>
          <Link href='/signup'>
            <div className='logo' />
          </Link>
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
        <div className='content'>
          <div className='half'>
            <div>
              <h1>The Only one resume maker online free to use</h1>
              <p>
                Hey, you can&apos;t stress out making your resume or using some
                tools that makes your application rejected. we&apos;ve got your
                back
              </p>
              <div>
                <Link href='/signup'>
                  <a className='btn'>Get Started</a>
                </Link>
                <Link href='/'>
                  <a className='btn v-2'>Guest</a>
                </Link>
              </div>
            </div>
          </div>
          <div className='half'>
            <div className='image'>
              <Image
                src={template}
                alt='Template Image'
                className='image'
                draggable='false'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
