import React, { useState } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f8f9fa;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Textarea = styled.textarea`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const StarRating = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  span {
    cursor: pointer;
    font-size: 2rem;
    color: ${(props) => (props.active ? "gold" : "#ccc")};
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const App = () => {
  const [rating, setRating] = useState(0); // Состояние для хранения текущего рейтинга
  const [hover, setHover] = useState(0); // Состояние для хранения значения при наведении курсора

  return (
    <PageContainer>
      <Form>
        <Label>
          Изображение:
          <Input type="file" />
        </Label>
        <Label>
          <p>Имя:</p>
          <Input type="text" />
        </Label>
        <Label>
          Электронная почта:
          <Input type="email" />
        </Label>
        <Label>
          Комментарий:
          <Textarea rows="4" />
        </Label>
        <Label>
          Рейтинг:
          <StarRating>
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <span
                  key={index}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                  style={{
                    color: index <= (hover || rating) ? "gold" : "#ccc",
                  }}
                >
                  &#9733;
                </span>
              );
            })}
          </StarRating>
        </Label>
        <SubmitButton type="submit">Отправить</SubmitButton>
      </Form>
    </PageContainer>
  );
};

export default App;
