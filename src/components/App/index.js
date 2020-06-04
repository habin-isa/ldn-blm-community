import React from 'react';
import * as S from './styles';
import Navbar from '../Navbar';
import Footer from '../Footer';
import TitleContainer from '../TitleContainer';
import VideoContainer from '../VideoContainer';

const App = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <Navbar />
        <S.TopBar>
          <TitleContainer />
          <VideoContainer />
        </S.TopBar>
      </S.Content>
      <Footer />
    </S.Wrapper>
  );
};

export default App;
