import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Pod } from '../../Components';
import Nav from '../Nav/Nav.component';
import styles from './Layout.module.scss';

function Layout() {
  return (
    <BrowserRouter>
      <div className={styles.nav}>
        <Nav />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pod' element={<Pod />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Layout;
