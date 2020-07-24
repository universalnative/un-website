import { useEffect } from 'react';
import Router from 'next/router';

const Index = () => {
  useEffect(() => {
    Router.push('/home');
  }, []);

  return <></>;
};

export default Index;
