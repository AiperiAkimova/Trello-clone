import { useSelector } from "react-redux";
import styled from "styled-components";
import TrelloLogo from "../assets/trello.svg";
import TrelloList from "../lists/TrelloList";
import AddColumn from "../column/AddColumn";
import Column from "../column/Column";

const Trello = () => {
  const { showColumn } = useSelector((state) => state.uiSlice);

  return (
    <>
      <Wrapper>
        <Navbar>
          <TrelloImg />
          <p>Рабочие пространства</p>
          <p>Недавние</p>
          <p>В избранном</p>
          <p>Шаблоны</p>
          <p>Сoздать</p>
        </Navbar>
        <Doska>
          <TrelloList />
          {showColumn ? <Column /> : <AddColumn />}
        </Doska>
      </Wrapper>
    </>
  );
};

export default Trello;

const Wrapper = styled.div`
  width: 100%;
  height: 655px;
  background-color: white;
`;
const Navbar = styled.nav`
  width: 100%;
  height: 80px;
  background-color: rgb(215, 214, 220);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const TrelloImg = styled.img`
  width: 100px;
  height: 50px;
  display: flex;
`;
TrelloImg.defaultProps = {
  src: TrelloLogo,
};

const Doska = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  min-height: 100vh;
  /* border: 1px solid red; */
  z-index: 1;
  position: relative;
  padding-top: 100px;
`;
