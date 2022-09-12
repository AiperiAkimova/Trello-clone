import { useSelector } from "react-redux";
import styled from "styled-components";
import TrelloCard from "./TrelloCard";
import  ToDoList  from "./ToDoList";
import {MoreHoriz } from "@mui/icons-material";


 const TrelloList = () => {
  const { todo } = useSelector((state) => state.column);
  return (
    <Div>
      {todo.map((el) => {
        return (
          <Container key={el.id}>
            <TextStyle>{el.title}
            <MoreHoriz />
            </TextStyle>
            <TrelloCard todos={el.todos} />
            
            <ToDoList todo={el} />
          </Container>
        );
      })}
    </Div>
  );
};
export default TrelloList

const Container = styled.div`
  background-color: rgb(215, 214, 220);
  margin-left: 10px;
  display: flex;
  flex-direction: column;
 
  align-items: center;
  padding: 20px;
  border-radius: 5px;
`;
const TextStyle = styled.p`
width: 250px;
  color: black;
  font-weight: 600;
  display: flex;
  justify-content: space-between;

`;
const Div = styled.div`

  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;




