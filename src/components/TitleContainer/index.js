import React from 'react';
import * as S from './styles';
import Button from '../Button';

// import { string, func } from 'prop-types';

const TitleContainer = () => {
  return (
    <S.Wrapper>
      <S.Title>
        London Black Lives Matter. <br /> Welcome to the community looking to educate, share and deliver change.
      </S.Title>
      <Button text="Donate now" />
    </S.Wrapper>
  );
};

export default TitleContainer;

// TitleContainer.propTypes = {
//   text: string,
//   handleClick: func
// };

// TitleContainer.defaultProps = {
//   text: 'Donate',
//   handleClick: () => {}
// };
