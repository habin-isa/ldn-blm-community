import React from 'react';
import { shallow } from 'enzyme';
import mockAxios from 'axios';
import config from '../../src/config.json';

import * as youtubeApi from './index';
import { response } from 'express';

const mockResponse = {
  channelData: {
    kind: 'youtube#channelListResponse',
    etag: '_D9hJ45f-qpnSagSJ0hwxxlfVlU',
    pageInfo: {
      totalResults: 1,
      resultsPerPage: 1
    },
    items: [
      {
        kind: 'youtube#channel',
        etag: 'FsPGXZKIbGQgc24RVIR41HuCbJo',
        id: 'UCk8ujbLrxJBoHKsE5hpfcgA',
        statistics: {
          viewCount: '2982347',
          commentCount: '0',
          subscriberCount: '8990',
          hiddenSubscriberCount: false,
          videoCount: '72'
        }
      }
    ]
  }
};

const url = {
  channelUrl: `/youtube/v3/channels?part=statistics&id=UCk8ujbLrxJBoHKsE5hpfcgA&key=${config.API_KEY}`,
  videosUrl: `https://www.googleapis.com/youtube/v3/search?key=${config.API_KEY}`
};

const params = {
  channelParams: {
    params: {
      part: 'snippet'
    }
  },
  videosParams: {
    params: {
      type: 'video',
      part: 'snippet',
      channelId: 'UCk8ujbLrxJBoHKsE5hpfcgA',
      order: 'date',
      maxResults: 3
    }
  }
};

describe('getChannelData service', () => {
  it('returns correct response from get call', async () => {
    const mockPromise = Promise.resolve(mockResponse.channelData);
    jest.spyOn(youtubeApi, 'getChannelData').mockImplementation(() => mockPromise);
  });
  it('should call a get request', (done) => {
    youtubeApi.getChannelData('./test', {}).then((response) => {
      expect(mockAxios.request).toHaveBeenCalledWith({
        method: 'get',
        url: url.channelUrl,
        params: params.channelParams
      });
      expect(response.status).toEqual(200);
    });
    done();
  });
});

describe('getVideos service', () => {
  it('should call a get request', (done) => {
    youtubeApi.getVideos('./test', {}).then((response) => {
      expect(mockAxios.request).toHaveBeenCalledWith({
        method: 'get',
        url: url.videosUrl,
        params: params.videosParams
      });
      expect(response.status).toEqual(200);
    });
    done();
  });
});
