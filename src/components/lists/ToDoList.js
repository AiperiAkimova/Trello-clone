import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { trelloActions } from "../../store/slices/trelloSlice";

const ToDoList = ({ todo }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [column, setColumn] = useState("");

  const columnChange = (e) => {
    setColumn(e.target.value);
  };

  const submitHandler = (e, id) => {
    e.preventDefault();

    if (column.trim().length > 0) {
      const data = {
        item: column,
        id: Math.random().toString(),
      };
      dispatch(trelloActions.addData({ data, id }));
    }
    setColumn("");
  };
  return (
    <>
      {show ? (
        <div>
          <TextArea
            name="items"
            value={column}
            onChange={(e) => columnChange(e)}
          />
          <Div>
            <AddBtn className="add" onClick={(e) => submitHandler(e, todo.id)}>
              Добавить карточку
            </AddBtn>
            <CloseBtn onClick={() => setShow(false)} className="close">
              X
            </CloseBtn>
          </Div>
        </div>
      ) : (
        <AddCart id={todo.id} onClick={(e) => setShow(true)}>
          + Добавить карточку
        </AddCart>
      )}
    </>
  );
};

export default ToDoList;

const TextArea = styled.textarea`
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 3px;
  overflow: auto;
  outline: none;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  margin-top: 20px;
`;
const AddBtn = styled.button`
  background-color: rgb(0, 121, 191);
  opacity: 0.8;
  width: 120px;
  height: 40px;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: large;
  cursor: pointer;
`;

const AddCart = styled.button`
  width: 300px;
  height: 40px;
  padding: 10px;
  color: rgb(2, 106, 167);
  align-items: center;
  font-weight: bold;
  border: none;
  border-radius: 5px;
`;

