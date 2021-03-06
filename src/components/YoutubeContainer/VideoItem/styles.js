import styled from 'styled-components';

export const VideoItem = styled.div`
  width: 415px;
  display: flex !important;
  align-items: center !important;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VideoTitle = styled.div`
  font-weight: bold;
  padding: 20px;
  color: #db423d;
`;

export const VideoDate = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-align: right;
  padding-bottom: 5px;
  color: #323232;
`;

export const VideoStats = styled.div`
  padding-bottom: 20px;
  color: #fcba03;
  font-size: 10px;
  font-weight: normal;
  text-align: center;
`;
