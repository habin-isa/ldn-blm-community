import React from 'react';
import * as S from './styles';
import HandIcon from '../../assets/hand.png';

const Navbar = () => {
  return (
    <S.Wrapper>
      <S.LeftCol>
        <S.Icon src={HandIcon} alt="hand-icon" />
      </S.LeftCol>
      <S.RightCol>
        <S.NavOption href="https://blacklivesmatter.com/about/">About</S.NavOption>
        <S.NavOption href="http://blacklivesmatteruk.com/contact/">Contacts</S.NavOption>
        <S.NavOption href="https://github.com/habin-isa/ldn-blm-community">c0de</S.NavOption>
      </S.RightCol>
    </S.Wrapper>
  );
};

export default Navbar;
