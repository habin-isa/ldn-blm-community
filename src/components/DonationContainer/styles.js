import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Yeseva One', cursive;
  padding: 30px 0;
`;

export const Title = styled.div`
  font-size: 30px;
  color: #333333;
  text-align: center;
`;

export const CompaniesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
`;

export const Icon = styled.img`
  height: 400px;
  padding: 20px 0;
`;

export const Company = styled.div`
  width: 100%;
`;

export const CompanyInfo = styled.div`
  max-width: 400px;
  margin-bottom: 10px;
  padding: 0 3px;
`;

export const Donate = styled.a`
  text-decoration: none;
  color: orange;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
