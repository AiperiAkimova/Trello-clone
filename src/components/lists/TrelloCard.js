// import { Delete } from "@mui/icons-material";
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { modalActions } from "../../store/slices/modalSlice";
import Modal from "../modal/Modal";

const TrelloCard = (props) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  return (
    <div>
      {props.todos.map((el) => (
        <div
          key={el.items.id}
          onClick={() => {
            dispatch(modalActions.open());
          }}
        >
          <Title>
            {el.items.item} <EditIcon className="edit" fontSize="small" />
            {isOpen && <Modal />}
            {/* <Delete fontSize="small" /> */}
          </Title>
        </div>
      ))}
    </div>
  );
};
export default TrelloCard;

const Title = styled.div`
  background-color: white;
  width: 250px;
  height: 40px;
  text-align: center;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
