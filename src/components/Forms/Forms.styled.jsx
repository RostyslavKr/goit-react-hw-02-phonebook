import styled from '@emotion/styled';
import { Field } from 'formik';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  border-bottom: 2px solid #f09292;
  ${
    '' /* box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px; */
  };
`;

export const TitleInput = styled.label`
  display: block;
  margin-bottom: 40px;
`;

export const Input = styled(Field)`
  display: block;
  width: 300px;
  height: 25px;
  background-color: transparent;
  border-radius: 15px;
  border: 2px solid #f09292;
`;

export const NameInput = styled.span`
  display: block;
  color: #fff;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  display: block;
  padding: 10px 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 15px;
  color: #fff;
  background: rgb(0, 117, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 117, 255, 1) 15%,
    rgba(0, 208, 255, 1) 89%
  );
`;
