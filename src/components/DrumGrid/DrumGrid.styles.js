import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
  margin-top: 2vh;
  align-items: center;
  height: 200%;
  background: #808080;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1vh;
  font-family: Monoton;

  div {
    border: none;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    height: 28vh;
    align-items: center;
    font-size: 6rem;
    color: #fff;
  }

  div:nth-child(1) {
    background: linear-gradient(-45deg, #ee7752, #ffcccc, #23a6d5, #23d5ab);

    background-size: 400% 400%;
    animation: neon1 1.5s ease-in-out infinite alternate,
      gradient 2s ease infinite;
  }

  .pressed:nth-child(1) {
    animation: none;
    background: black;
  }

  div:nth-child(2) {
    background: linear-gradient(-65deg, #ffcccc, #ee7752, #23d5ab, #23a6d5);
    animation: neon1 1.5s ease-in-out infinite alternate,
      gradient 4s ease infinite;
    background-size: 400% 400%;
  }

  .pressed:nth-child(2) {
    animation: none;
    background: black;
  }

  div:nth-child(3) {
    background: linear-gradient(-85deg, #ffcccc, #ee7752, #23d5ab, #23a6d5);
    animation: neon1 1.5s ease-in-out infinite alternate,
      gradient 3.4s ease infinite;
    background-size: 400% 400%;
  }

  .pressed:nth-child(3) {
    animation: none;
    background: black;
  }

  div:nth-child(4) {
    background: linear-gradient(-125deg, #ffcccc, #ee7752, #23d5ab, #23a6d5);
    animation: neon1 1.5s ease-in-out infinite alternate,
      gradient 3.8s ease infinite;
    background-size: 400% 400%;
  }

  .pressed:nth-child(4) {
    animation: none;
    background: black;
  }

  div:nth-child(5) {
    background: linear-gradient(-145deg, #ffcccc, #ee7752, #23d5ab, #23a6d5);
    animation: neon1 1.5s ease-in-out infinite alternate,
      gradient 2.4s ease infinite;
    background-size: 400% 400%;
  }

  .pressed:nth-child(5) {
    animation: none;
    background: black;
  }

  div:nth-child(6) {
    background: linear-gradient(-145deg, #ffcccc, #ee7752, #23d5ab, #23a6d5);
    animation: neon1 1s ease-in-out infinite alternate,
      gradient 2s ease infinite;
    background-size: 400% 400%;
  }

  .pressed:nth-child(6) {
    animation: none;
    background: black;
  }

  div:nth-child(7) {
    background: linear-gradient(-165deg, #ffcccc, #ee7752, #23d5ab, #23a6d5);
    animation: neon1 1.4s ease-in-out infinite alternate,
      gradient 2.8s ease infinite;
    background-size: 400% 400%;
  }

  .pressed:nth-child(7) {
    animation: none;
    background: black;
  }

  div:nth-child(8) {
    background: linear-gradient(-185deg, #ffcccc, #ee7752, #23d5ab, #23a6d5);
    animation: neon1 1.7s ease-in-out infinite alternate,
      gradient 3.4s ease infinite;
    background-size: 400% 400%;
  }

  .pressed:nth-child(8) {
    animation: none;
    background: black;
  }

  div:nth-child(9) {
    background: linear-gradient(-205deg, #ffcccc, #ee7752, #23d5ab, #23a6d5);
    animation: neon1 2s ease-in-out infinite alternate,
      gradient 4s ease infinite;
    background-size: 400% 400%;
  }

  .pressed:nth-child(9) {
    animation: none;
    background: black;
  }

  @keyframes neon1 {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff1177,
        0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177;
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff1177,
        0 0 35px #ff1177, 0 0 40px #ff1177, 0 0 50px #ff1177, 0 0 75px #ff1177;
    }
  }

  @keyframes neon2 {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff1177,
        0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177;
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff1177,
        0 0 35px #ff1177, 0 0 40px #ff1177, 0 0 50px #ff1177, 0 0 75px #ff1177;
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
