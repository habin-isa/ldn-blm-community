import React from 'react';
import * as S from './styles';

import { getShowData } from '../../services';

const YoutubeContainer = () => {
  const callShowData = () => {
    getShowData();
  };
  return (
    <S.Wrapper>
      <h1 onClick={callShowData}>YoutubeContainer </h1>
    </S.Wrapper>
  );
};

export default YoutubeContainer;
