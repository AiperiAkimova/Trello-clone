import { useDispatch } from "react-redux";
import styled from "styled-components";
import { modalActions } from "../../store/slices/modalSlice";
const Modal = () => {
  const dispatch = useDispatch();
  
  return (
    <BackDrop>
      <Modalka>
        <h4>Описание</h4>
        <input type="text" placeholder="Добавить более подробнее описание..." />
        <div>
          <SaveButton>Сохранить</SaveButton>
          <СancelBtn
            onClick={()=>{dispatch(modalActions.close())}}
          >
            Отмена
          </СancelBtn>
        </div>
      </Modalka>
    </BackDrop>
  );
};
export default Modal;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Modalka = styled.div`
  position: fixed;
  top: 30vh;
  left: 30%;
  width: 80%;
  width: 400px;
  background: white;
  border-radius: 5px;
  padding: 20px;
  z-index: 2;
  h4 {
    font-weight: 600;
    color: rgb(2, 106, 167);
  }

  input {
    background-color: rgb(235, 236, 240);
    width: 300px;
    height: 50px;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-bottom: 10px;
    :focus {
      border: 2px solid rgb(2, 106, 167);
      border-radius: 5px;
    }
    :hover {
      background-color: rgb(200, 200, 200);
    }
  }
`;
const SaveButton = styled.button`
  background-color: rgb(0, 121, 191);
  opacity: 0.8;
  width: 120px;
  height: 40px;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 20px;
`;

const СancelBtn = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;

