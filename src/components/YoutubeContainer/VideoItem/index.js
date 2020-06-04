import React, { useState, useEffect, useCallback } from 'react';

import './styles.css';
import * as S from './styles';

const VideoItem = ({ video }) => {
  return (
    <div>
      <S.VideoItem>
        <div className="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="video"
          ></iframe>
        </div>
        <S.VideoDetails>
          <S.VideoTitle>{video.snippet.title}</S.VideoTitle>
          <S.VideoDate>{video.snippet.publishedAt.slice(0, 10)}</S.VideoDate>
        </S.VideoDetails>
      </S.VideoItem>
    </div>
  );
};

export default VideoItem;
