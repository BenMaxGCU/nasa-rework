/* eslint-disable jsx-a11y/anchor-is-valid */
import { useMantineColorScheme } from '@mantine/core';
import { Link } from 'react-router-dom';
import ColourToggle from '../../Components/ColourToggle/ColourToggle.component';
import styles from './Nav.module.scss';

function Nav() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <div className={styles.container}>
      <div
        className={colorScheme === 'dark' ? styles.logo : styles['logo--light']}
      >
        <h1>
          <Link to='/'>Nasa</Link>
        </h1>
      </div>

      <nav className={styles.navMenuContainer}>
        <ul
          className={
            colorScheme === 'dark' ? styles.navMenu : styles['navMenu--light']
          }
        >
          <li>
            <Link to='/pod'>Picture of the Day</Link>
          </li>
          <li>
            <a>
              <ColourToggle />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
