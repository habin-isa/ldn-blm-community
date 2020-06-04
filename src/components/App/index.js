import React from 'react';
import * as S from './styles';
import Navbar from '../Navbar';
import Footer from '../Footer';
import TitleContainer from '../TitleContainer';

const App = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <Navbar />
        <TitleContainer />
      </S.Content>
      <Footer />
    </S.Wrapper>
  );
};

export default App;
