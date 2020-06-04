import React from 'react';
import * as S from './styles';
import HandIcon from '../../assets/hand.png';
// import { string, func } from 'prop-types';

const Navbar = () => {
  return (
    <S.Wrapper>
      <S.LeftCol>
        <S.Icon src={HandIcon} alt="hand-icon" />
      </S.LeftCol>
      <S.RightCol>
        <S.NavOption>About</S.NavOption>
        <S.NavOption>Contacts</S.NavOption>
        <S.NavOption>c0de</S.NavOption>
      </S.RightCol>
    </S.Wrapper>
  );
};

export default Navbar;

// Navbar.propTypes = {
//   text: string,
//   handleClick: func
// };

// Navbar.defaultProps = {
//   text: 'Donate',
//   handleClick: () => {}
// };
