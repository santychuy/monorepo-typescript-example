import { FC } from 'react';
import axios from 'axios';
import { GetStaticProps } from 'next';

const IndexPage: FC<{ prueba: string }> = ({ prueba }) => <div>Hola {prueba}</div>;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios('http://localhost:4000/');

  return {
    props: {
      prueba: data.prueba,
    },
  };
};

export default IndexPage;
