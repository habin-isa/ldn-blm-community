import React from 'react';
import * as S from './styles';
import Button from '../Button';

const TitleContainer = () => {
  const openWindow = () => {
    window.open(
      'https://www.gofundme.com/f/ukblm-fund?utm_medium=referral&utm_source=unknown&utm_campaign=comms_h4hk+ukblm-fund'
    );
  };
  return (
    <S.Wrapper>
      <h1>
        London Black Lives Matter. <br /> Welcome to the community looking to educate, share and deliver change.
      </h1>
      <Button text="Donate now" handleClick={openWindow} />
    </S.Wrapper>
  );
};

export default TitleContainer;
