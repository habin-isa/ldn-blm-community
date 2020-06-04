import React, { useState, useEffect, useCallback } from 'react';
import * as S from './styles';
import VideoItem from './VideoItem';

import { getVideos, getChannelData } from '../../services';

const YoutubeContainer = () => {
  const [videoData, setVideoData] = useState([]);
  const [channelData, setChannelData] = useState();

  const loadVideos = useCallback(async () => {
    try {
      const response = await getVideos({
        params: {
          type: 'video',
          part: 'snippet',
          channelId: 'UCk8ujbLrxJBoHKsE5hpfcgA',
          order: 'date',
          maxResults: 3
        }
      });
      setVideoData(response.data.items);
    } catch (error) {
      console.log('error fetching videos');
    } finally {
      console.log('loadVideos has ran');
    }
  });

  const loadChannelData = useCallback(async () => {
    try {
      const response = await getChannelData({
        params: {
          part: 'snippet'
        }
      });
      setChannelData(response.data.items[0].statistics);
      console.log(response.data.items[0].statistics);
    } catch (error) {
      console.log('error fetching channel data');
    }
  }, []);

  useEffect(() => {
    loadChannelData();
  }, []);

  useEffect(() => {
    if (videoData.length === 0) {
      loadVideos();
    }
  }, [videoData, loadVideos]);

  const getDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    return mm + '-' + dd + '-' + yyyy;
  };

  const renderedVideos = videoData.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} />;
  });

  return (
    <S.Wrapper>
      <S.VideoContainer>{renderedVideos}</S.VideoContainer>
      {channelData ? (
        <S.ChannelData>
          <div>
            As of <S.Date>{getDate()}</S.Date> BLM Youtube channel currently has:
          </div>
          <S.Stats>
            <S.StatsDetail>
              <S.Date>{channelData.subscriberCount}</S.Date> Subscribers
            </S.StatsDetail>
            <S.StatsDetail>
              <S.Date>{channelData.videoCount}</S.Date> Live videos
            </S.StatsDetail>
            <S.StatsDetail>
              <S.Date>{channelData.videoCount}</S.Date> Total views
            </S.StatsDetail>
          </S.Stats>
        </S.ChannelData>
      ) : (
        <div />
      )}
    </S.Wrapper>
  );
};

export default YoutubeContainer;
