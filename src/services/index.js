import axios from 'axios';

export const getShowData = async () => {
  // const url = 'https://api.spotify.com/v1/shows/{id}'
  const url = 'https://api.spotify.com/v1/shows/6RNwASBcNjuK4tuqdaXzBn?si=TOQk88gOSUW3zVSvr4mpVg';
  const response = await axios.get(url);
  console.log('puppi', response);
};
