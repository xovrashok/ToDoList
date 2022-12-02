import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Component = styled.div`
  border: 1px solid #3a3a3a;
  border-radius: 10px;
  width: 40%;
  height: 40px;
`;

export const Input = styled.input`
  border: none;
  border-radius: 10px;
  width: 70%;
  height: 97%;
`;

export const Button = styled.button`
  border: none;
    border-left: 1px solid red;
    background: pink;
    text-align: center;
    padding: 10px 21px;
    align-items: center;
    height: 100%;
    margin: 0 auto;
    `;
