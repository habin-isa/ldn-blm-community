import axios from 'axios';

// export const postUser = async (user) => {
//   const url = 'https://yo7dm2sa2i.execute-api.eu-west-2.amazonaws.com/prod/signup';
//   const response = await axios.post(url, {
//     name: user.name,
//     email: user.email
//   });
//   console.log(response);
//   return response;
// };

export const getShowData = async () => {
  // const url = 'https://api.spotify.com/v1/shows/{id}'
  const url = 'https://api.spotify.com/v1/shows/6RNwASBcNjuK4tuqdaXzBn?si=TOQk88gOSUW3zVSvr4mpVg';
  const response = await axios.get(url);
  console.log('puppi', response);
};
