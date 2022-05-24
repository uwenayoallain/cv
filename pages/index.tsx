import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <section className='header_section'>
        <div className='logo' />
        <div>
          <Link href='/'  />
        </div>
      </section>
    </div>
  );
};

export default Home;
