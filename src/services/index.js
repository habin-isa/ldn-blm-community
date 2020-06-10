import axios from 'axios';
import config from '../../src/config.json';

/**
 * @param {string} url url for google api youtube request
 * @param {string} q search query
 */

const blmChannelId = 'UCk8ujbLrxJBoHKsE5hpfcgA';
const url = `https://www.googleapis.com/youtube/v3/search?key=${config.API_KEY}`;

export const getChannelData = async ({ params }) => {
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${blmChannelId}&key=${config.API_KEY}`,
    {
      params
    }
  );
  return response;
};

export const getVideos = async ({ params }) => {
  const response = await axios.get(url, {
    params
  });
  return response;
};
