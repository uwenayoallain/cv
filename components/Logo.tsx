import logo_dark from "public/images/logo_dark.svg";
import logo_light from "public/images/logo_light.svg";
import Image from "next/image";
import Link from "next/link";
function LogoDark() {
  return (
    <div className=''>
      <Link href='/'>
        <Image
          src={logo_dark}
          priority
          alt='dark version of the logo'
          draggable={false}
          className='cursor-pointer'
        />
      </Link>
    </div>
  );
}

function Logo() {
  return (
    <div className=''>
      <Link href='/'>
        <Image
          src={logo_light}
          priority
          alt='light version of the logo'
          draggable={false}
          className='cursor-pointer'
        />
      </Link>
    </div>
  );
}

export default Logo;
export { LogoDark };
