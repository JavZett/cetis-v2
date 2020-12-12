import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../Navbar/styles';

export default function NavLink({ ruta, nombre, clases = '' }) {
  const router = useRouter();

  return (
    <>
      <li>
        <Link href={ruta}>
          <a className={router.pathname == ruta ? `active ${clases}` : clases}>
            {nombre}
          </a>
        </Link>
      </li>
      <style jsx>{styles}</style>
    </>
  );
}
