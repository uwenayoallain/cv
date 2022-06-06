import type { NextPage } from "next";
import { LogoDark } from "components/Logo";
const SignUp: NextPage = () => {
  return (
    <div>
      <section className='h-screen flex'>
        <div className='w-1/2 p-20'>
          <LogoDark />
          <h1 className='text-dark font-chillax_bold text-7xl py-2'>
            Create New Account
          </h1>
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
