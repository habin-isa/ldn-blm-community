import React from 'react';
import * as S from './styles';
import InstagramIcon from '../../assets/insta.png';
import TwitterIcon from '../../assets/twitter.png';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.LeftCol>
        <S.Title>Silence is Violence.</S.Title>
        <S.Title>Demand Change.</S.Title>
        <S.Title>Demand Justice.</S.Title>
      </S.LeftCol>
      <S.RightCol>
        <a href="https://www.instagram.com/blklivesmatter/">
          <S.Icon src={InstagramIcon} alt="instagram-icon" />
        </a>
        <a href="https://twitter.com/blklivesmatter">
          <S.Icon src={TwitterIcon} alt="twitter-icon" />
        </a>
      </S.RightCol>
    </S.Wrapper>
  );
};

export default Footer;
