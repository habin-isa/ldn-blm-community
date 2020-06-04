import React from 'react';
import * as S from './styles';
import Navbar from '../Navbar';
import Footer from '../Footer';
import TitleContainer from '../TitleContainer';
import VideoContainer from '../VideoContainer';
import YoutubeContainer from '../YoutubeContainer';
import DonationContainer from '../DonationContainer';

import PosterImg from '../../assets/posters.png';

const App = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <Navbar />
        <S.TopBar>
          <TitleContainer />
          <VideoContainer />
        </S.TopBar>
        <YoutubeContainer />
        <DonationContainer />
      </S.Content>
      <S.Poster src={PosterImg} alt="poster-img" />
      <Footer />
    </S.Wrapper>
  );
};

export default App;
