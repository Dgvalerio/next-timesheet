import { NextPage } from 'next';

import { useSelector } from 'react-redux';

import { Container } from '@mui/material';

import Loading from './loading';

const Wrapper: NextPage = ({ children }) => {
  const { loading } = useSelector((state) => state.ui);

  return loading ? (
    <Loading />
  ) : (
    <Container style={{ display: 'flex', minHeight: '100vh' }}>
      {children}
    </Container>
  );
};

export default Wrapper;
