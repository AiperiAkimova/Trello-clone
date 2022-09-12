import styled from "styled-components";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/slices/uiSlices";

 const Column = () => {
  
  const dispatch = useDispatch();

  const toggleHandler = () => {

    dispatch(uiActions.showColumn());
  };

  return (
    <DIV>
      <button onClick={toggleHandler}>+ Добавьте одну колонку</button>
    </DIV>
  );
};
export default Column
const DIV = styled.div`
  button {
    width: 300px;
    height: 40px;
    background-color: rgb(215, 214, 220);
    opacity: 0.6;
    margin-left: 10px;
    align-items: center;
    font-weight: bold;
    border: none;
    border-radius: 5px;
  }
`;
