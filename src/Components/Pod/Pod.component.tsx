import { LoadingOverlay, Title, Image, Grid } from '@mantine/core';
import useFetch from '../../Hooks/useFetch';
import styles from './Pod.module.scss';

const url = `https://api.nasa.gov/planetary/apod?api_key=ytypvQshdSUngvOK7SIOntpyfaAwPhmRyxciswww`;

interface NasaPhoto {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

function Pod() {
  const { data, error } = useFetch<NasaPhoto>(url);

  return !data ? (
    <div>
      <LoadingOverlay visible={true} />
    </div>
  ) : (
    <Grid justify='center' align='center' className={styles.grid}>
      <Grid.Col span={4}>
        <Image radius='sm' src={data.url} alt='Nasa Picture of the Day' />
      </Grid.Col>
      <Grid.Col span={4}>
        <Title className={styles.title}>{data.title}</Title>
        <p className={styles.date}>{data.date}</p>
        <p>{data.explanation}</p>
      </Grid.Col>
    </Grid>
  );
}

export default Pod;
