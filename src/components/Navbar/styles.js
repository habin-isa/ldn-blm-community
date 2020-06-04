import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  margin-bottom: 5px;
`;

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.img`
  width: 100px;
`;

export const RightCol = styled.div`
  font-family: 'Anonymous Pro', monospace;
  font-weight: bold;
  display: flex;
`;

export const NavOption = styled.a`
  color: #333333;
  font-size: 15px;
  margin-left: 40px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: orange;
  }
`;
