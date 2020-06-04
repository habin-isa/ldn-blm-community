import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: 'Yeseva One', cursive;
  background: #db423d;
  color: white;
`;

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const Title = styled.span`
  font-size: 30px;
  margin-top: 5px;
`;

export const RightCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 8%;
  padding-right: 5%;
`;

export const Icon = styled.img`
  width: 35px;
`;
