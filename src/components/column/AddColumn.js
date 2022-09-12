import styled from "styled-components";
import { useDispatch } from "react-redux";
import { trelloActions } from "../../store/slices/trelloSlice";
import { useState } from "react";
import { uiActions } from "../../store/slices/uiSlices";

const AddColumn = () => {
  const dispatch = useDispatch();
  const [columnName, setColumName] = useState("");

  const columnNameHandler = (e) => {
    setColumName({
      ...columnName,
      id: Math.random().toString(),
      title: e.target.value,
    });
  };
  const addHandler = () => {
    if (columnName.title.trim().length === 0) {
      return;
    }
    dispatch(trelloActions.addColumn(columnName));

    dispatch(uiActions.showColumn());
  };

  const showColumn = () => {
    dispatch(uiActions.showColumn());
  };

  return (
    <Div>
      <Input
        type="text"
        onChange={columnNameHandler}
        value={columnName.title}
      />
      <div>
        <AddButton onClick={addHandler}>Добавить список</AddButton>
        <DeleteBtn onClick={showColumn} className="delete">
          X
        </DeleteBtn>
      </div>
    </Div>
  );
};

export default AddColumn;
const Div = styled.div`
  width: 280px;
  height: 100px;
  background-color: white;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    margin-top: 20px;
  }
`;

const Input = styled.input`
  width: 250px;
  outline: 3px solid rgb(149, 189, 243);
  height: 20px;
  border: none;
  padding: 10px;
  border-radius: 3px;
`;
const AddButton = styled.button`
  background-color: rgb(0, 121, 191);
  opacity: 0.8;
  width: 120px;
  height: 40px;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
const DeleteBtn = styled.button`
  background: none;
  border: none;
  font-size: large;
  cursor: pointer;
`;
