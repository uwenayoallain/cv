import type { NextPage } from "next";
import { LogoDark } from "components/Logo";
const SignUp: NextPage = () => {
  return (
    <div>
      <section className='h-screen flex'>
        <div className='w-1/2'>
          <LogoDark />
          <h1>Sign Up</h1>
          <p>
            Hey, you can&apos;t stress out making your resume or using some
            tools that makes your application rejected. we&apos;ve got your back
          </p>
          <form action=''>
            <input name='username' placeholder='username' />
          </form>
        </div>
        <div className='w-1/2'></div>
      </section>
    </div>
  );
};

export default SignUp;
