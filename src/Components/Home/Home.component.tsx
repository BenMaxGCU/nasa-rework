import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.home}>
      <Button
        component={Link}
        to='/pod'
        variant='outline'
        color='gray'
        size='lg'
        uppercase
      >
        Picture of the Day!
      </Button>
    </div>
  );
}

export default Home;
