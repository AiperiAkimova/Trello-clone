import TrelloLogo from "../assets/trello-official.svg";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/slices/loginSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const validate = useSelector((state) => state.user.formIsValid);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(loginActions.setUser({ email, password }));
    }, 500);

    return () => clearTimeout(timer);
  }, [email, password, dispatch]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    //
    if (validate) {
      // alert("WOW");
      navigate("/trello");
    }
  };

  return (
    <>
      <Wrapper>
        <TrelloImg />
        <Form>
          <Theme>Вход в Trello</Theme>
          <InputEmail
            value={email}
            onChange={emailHandler}
            placeholder="Укажите адрес электронной почты"
          />
          <InputEmail
            value={password}
            onChange={passwordHandler}
            placeholder="Введите пароль"
          />
          <Button onClick={submitHandler} disabled={!validate}>
            Войти
          </Button>
        </Form>
      </Wrapper>
    </>
  );
};
export default Login;

//styled-components
const TrelloImg = styled.img`
  margin: 20px auto;
  width: 200px;
`;
TrelloImg.defaultProps = {
  src: TrelloLogo,
};

const Wrapper = styled.div`
  width: 500px;
  height: 600px;
  background-color:#f0edff;
  margin: 0 auto;
  border-radius:25px;
`;

const Form = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
  margin: 40px auto;
  box-shadow: 0 11px 20px rgba(0, 0, 0, 0.15);
`;
const Theme = styled.h2`
  width: 300px;
  margin: 0px auto;
  padding: 30px;
  color: #5e6c84;
  font-weight: bold;
`;

const InputEmail = styled.input`
  width: 300px;
  height: 50px;
  margin: 10px auto;
  color: #b3b3b3;
  font-size: 16px;
  padding: 0 15px;
  border: 2px solid #dfe1e6;
  background-color: rgb(250, 251, 252);
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  margin-top:20px;
  background-color: #5aac44;
  color: white;
  font-sixe: 16px;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 10px;
  &:disabled{ background-color:gray;}
`;
