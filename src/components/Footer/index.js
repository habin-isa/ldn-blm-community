import React from 'react';
import * as S from './styles';
import InstagramIcon from '../../assets/insta.png';
import TwitterIcon from '../../assets/twitter.png';
// import { string, func } from 'prop-types';

const Footer = () => {
  const handleClick = (url) => {
    window.open(url);
  };
  return (
    <S.Wrapper>
      <S.LeftCol>
        <S.Title>Silence is Violence.</S.Title>
        <S.Title>Demand Change.</S.Title>
        <S.Title>Demand Justice.</S.Title>
      </S.LeftCol>
      <S.RightCol>
        <S.Icon
          src={InstagramIcon}
          alt="instagram-icon"
          onClick={handleClick('https://www.instagram.com/blklivesmatter/')}
        />
        <S.Icon src={TwitterIcon} alt="twitter-icon" onClick={handleClick('https://twitter.com/blklivesmatter')} />
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
