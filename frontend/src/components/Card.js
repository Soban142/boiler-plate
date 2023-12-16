import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 400px;
`;

const Image = styled.img`
  object-fit: cover;
  max-width: 100%;
  flex: 3;
`;

const ContentWrapper = styled.div`
  background-color: white;
  flex: 2;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.1;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const Card = () => {
  return (
    <Container>
      <Image src="" />
      <ContentWrapper>
        <ContentHeader>
          <Title>Jo bhi</Title>
          <Price>$0.39</Price>
        </ContentHeader>
        <ContentBody>
          <Content>aaadadahdahda</Content>
        </ContentBody>
      </ContentWrapper>
    </Container>
  );
};

export default Card;
