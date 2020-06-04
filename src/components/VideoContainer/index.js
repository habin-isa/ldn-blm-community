import React from 'react';
import * as S from './styles';
import ReactPlayer from 'react-player';

const VideoContainer = () => {
  const url = 'https://vimeo.com/174602253';
  return (
    <S.Wrapper>
      <ReactPlayer url={url} volume={0} width="100%" loop={true} playing />
    </S.Wrapper>
  );
};

export default VideoContainer;
