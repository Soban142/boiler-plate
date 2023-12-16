import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { request } from "../axios";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginStart,
  loginSucces,
} from "../redux/slices/userSlice";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: aqua;
  /* align-items: center; */
`;

const Wrapper = styled.div`
  width: 100%;
  /* max-width: 1024px; */
  /* height: fit-content; */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
`;

const ContentWrapper = styled.div`
  padding: 10px;
  width: 100%;
  flex: 1;
`;

const HeadingText = styled.h1``;

const Image = styled.img``;

const FormWrapper = styled.div`
  padding: 30px 5px;
  width: 450px;
  background-color: white;
  border-radius: 10px;
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
`;

const FormHeader = styled.h1`
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const TextInput = styled.input`
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 300;
  border: 1px solid rgba(0, 0, 0, 0.83);
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 80%;
  background-color: rgba(115, 77, 255, 1);
  color: white;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 3px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 250ms ease-out;
`;

const FormText = styled.p`
  color: rgba(0, 0, 0, 0.83);
  margin-top: 10px;

  & span {
    color: rgba(44, 59, 222, 0.83);
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const user = await request.post("/auth/signin", {
        email,
        password,
      });
      console.log(user.data);
      dispatch(loginSucces(user.data));
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(loginFailure());
    }
  };

  return (
    <Container>
      <Wrapper>
        {/* <ContentWrapper>
          <HeadingText>Sign up to explore world</HeadingText>
          <Image />
        </ContentWrapper> */}
        <FormWrapper>
          <FormHeader>Sign In</FormHeader>
          <Form>
            <TextInput
              type="text"
              placeholder="Email or username"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              type="text"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form>
          <Button onClick={handleLogin}>Sign In</Button>
          <FormText>
            Don't have an account?
            <Link to="/signup">
              <span>Sign In</span>
            </Link>
          </FormText>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default Login;
