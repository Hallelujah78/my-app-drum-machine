import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  /* border: solid 2px; */
  height: 8vh;
  margin: 0 auto;
  padding: 0;
  border-radius: 3px;
  animation: neon1 2s ease-in-out infinite alternate;
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
`;

export const Content = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Monoton;
  font-size: 4.5rem;
  color: #fff;

  .pressed {
    background: black;
  }
`;
