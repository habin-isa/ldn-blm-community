import React from 'react';
import * as S from './styles';

import AmnestyIcon from '../../assets/amnesty.jpg';
import SouthHallIcon from '../../assets/southall.jpg';
import RunnymedeIcon from '../../assets/runnymede.jpg';

const DonationContainer = () => {
  const donationData = [
    {
      name: 'Amnesty UK',
      donateUrl: 'https://www.amnesty.org.uk/giving/donate/give-monthly',
      info:
        'We investigate and expose abuses, educate and mobilise the public, and help transform societies to create a safer, more just world. We received the Nobel Peace Prize for our life-saving work.'
    },
    {
      name: 'Southall Black Sisters',
      donateUrl: 'https://uk.virginmoneygiving.com/donation-web/charity?charityId=1012780',
      info:
        'We are a group of black and minority women with years of experience of struggling for women’s human rights in the UK. Although based locally, our work has a national reach.'
    },
    {
      name: 'Runnymede',
      donateUrl: 'https://www.runnymedetrust.org/donations.html',
      info:
        'Runnymede is the UKs leading independent race equality think tank. We generate intelligence to challenge race inequality in Britain through research, network building, leading debate, and policy engagement.'
    }
  ];

  const sortIcons = (name) => {
    if (name === 'Amnesty UK') {
      return AmnestyIcon;
    } else if (name === 'Southall Black Sisters') {
      return SouthHallIcon;
    } else {
      return RunnymedeIcon;
    }
  };

  const renderedCompanies = donationData.map((company) => {
    return (
      <S.Company key={company.name}>
        <div>{company.name}</div>
        <S.Icon src={sortIcons(company.name)} alt={company.name} />
        <S.CompanyInfo>{company.info}</S.CompanyInfo>
        <S.Donate href={company.donateUrl}>Donate now</S.Donate>
      </S.Company>
    );
  });
  return (
    <S.Wrapper>
      <S.Title>Where can I donate?</S.Title>
      <S.CompaniesContainer>{renderedCompanies}</S.CompaniesContainer>
    </S.Wrapper>
  );
};

export default DonationContainer;
