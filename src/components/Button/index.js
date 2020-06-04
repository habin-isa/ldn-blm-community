import React from 'react';
import * as S from './styles';
import { string, func } from 'prop-types';

const Button = ({ text, handleClick }) => {
  return <S.Wrapper onClick={handleClick}>{text}</S.Wrapper>;
};

export default Button;

Button.propTypes = {
  text: string,
  handleClick: func
};

Button.defaultProps = {
  text: 'Donate',
  handleClick: () => {}
};
