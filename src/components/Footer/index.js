import React from 'react';
import * as S from './styles';
import InstagramIcon from '../../assets/insta.png';
import TwitterIcon from '../../assets/twitter.png';
// import { string, func } from 'prop-types';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.LeftCol>
        <S.Title>Silence is Violence.</S.Title>
        <S.Title>Demand Change.</S.Title>
        <S.Title>Demand Justice.</S.Title>
      </S.LeftCol>
      <S.RightCol>
        <S.Icon src={InstagramIcon} alt="instagram-icon" />
        <S.Icon src={TwitterIcon} alt="twitter-icon" />
      </S.RightCol>
    </S.Wrapper>
  );
};

export default Footer;

// Footer.propTypes = {
//   text: string,
//   handleClick: func
// };

// Footer.defaultProps = {
//   text: 'Donate',
//   handleClick: () => {}
// };
