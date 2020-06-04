import React from 'react';
import * as S from './styles';
import HandIcon from '../../assets/hand.png';
// import { string, func } from 'prop-types';

const Navbar = () => {
  const handleClick = (url) => {
    window.open(url);
  };
  return (
    <S.Wrapper>
      <S.LeftCol>
        <S.Icon src={HandIcon} alt="hand-icon" />
      </S.LeftCol>
      <S.RightCol>
        <S.NavOption onClick={handleClick('https://blacklivesmatter.com/about/')}>About</S.NavOption>
        <S.NavOption onClick={handleClick('http://blacklivesmatteruk.com/contact/')}>Contacts</S.NavOption>
        <S.NavOption onClick={handleClick('https://github.com/habin-isa/ldn-blm-community')}>c0de</S.NavOption>
      </S.RightCol>
    </S.Wrapper>
  );
};

export default Navbar;
