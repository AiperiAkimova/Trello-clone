// import {Navigate } from 'react-router-dom'
import TrelloLogo from "../assets/trello.svg";
import styled from "styled-components";
import hero from "../assets/hero.webp";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
    const navigate = useNavigate()
  return (
    <>
      <Wrapper>
        <Trello>
          <TrelloImg />
          <p>Возможности</p>
          <p>Зешение</p>
          <p>Планы</p>
          <p>Цены</p>
          <p>Ресурсы</p>
          <Button onClick={()=>{navigate('/login')}}>Войти</Button>
        </Trello>
        <TextDiv>
          <Title>Trello помогает командам достигать успеха.</Title>
          <Hero />
        </TextDiv>
        <Text>
          Объединяйте усилия, управляйте проектами и выводите продуктивность на
          новые высоты. Откуда бы вы ни работали — из офиса в небоскребе или из
          дома — ваш совместный труд неповторим. Добейтесь всех своих целей с
          Trello.
        </Text>
      </Wrapper>
    </>
  );
};
export default HomePage;

const Wrapper = styled.div`
  width: 100%;
  height: 657px;
  background-color: #f0edff;
  display: flex;
  flex-direction: column;

`;
const Trello = styled.div`
  width: 100%;
  height: 80px;
  background-color: #ffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  p{
    font-weight: bold;
    color:#091E42;
  }
`;
const TrelloImg = styled.img`
  display: flex;
  justify-content: start;
`;
TrelloImg.defaultProps = {
  src: TrelloLogo,
};

const Button = styled.button`
    width: 100px;
    height: 30px;
    border: none;
    background-color: #054EB9;
    color: white;
    cursor: pointer;
`

const TextDiv = styled.div`
height: 50%;
  display: flex;
  justify-content: center;
`;
const Title = styled.h2`
  width: 50%;
  color: #091e42;
  font-size: 60px;
  text-align: start;
  
`;
const Text = styled.p`
  width: 45%;
  heigh: 20%;
  text-align: start;
  font-size: 24px;
  margin:  0;
  display: flex;
  jalign-items: center;
  margin-left: 15%;
`;

const Hero = styled.img`
  width: 20%;
  display: flex;
  flex-direction: row;
`;
Hero.defaultProps = {
  src: hero,
};
