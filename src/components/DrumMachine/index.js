import React, { useState, useEffect } from "react";

//styles
import { Wrapper } from "./DrumMachine.styles";

//components
import DrumGrid from "../DrumGrid";
import Display from "../Display";

const DrumMachine = () => {
  //states

  const [playing, setPlaying] = useState("");
  const [drums, setDrums] = useState([
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  ]);
  const [keys, setKeys] = useState([
    "Q",
    "W",
    "E",
    "A",
    "S",
    "D",
    "Z",
    "X",
    "C",
  ]);
  const [codes, setCodes] = useState([81, 87, 69, 65, 83, 68, 90, 88, 67]);
  const [displayName, setDisplayName] = useState([
    "Heater 1",
    "Heater 2",
    "Heater 3",
    "Heater 4",
    "Heater 6",
    "Dsc Oh",
    "Kick n Hat",
    "RP4 Kick 1",
    "Cev H2",
  ]);

  //handle key press and click
  useEffect(() => {
    function handleKeyDown(e) {
      // new Audio(drums[codes.indexOf(e.keyCode)]).play();
      // console.log(codes.indexOf(e.keyCode));
      const myClip = document.getElementById(keys[codes.indexOf(e.keyCode)]);
      myClip.currentTime = 0;
      myClip.play();
      // setPlaying(displayName[codes.indexOf(e.keyCode)]);
      document.getElementById("display").innerText =
        displayName[codes.indexOf(e.keyCode)];

      const myElement = document.getElementById(
        drums[codes.indexOf(e.keyCode)]
      );

      myElement.classList.add("pressed");

      document.addEventListener("keyup", () => {
        myElement.classList.remove("pressed");
        // setPlaying("");
        // document.getElementById("display").innerText = "";
      });
    }
    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [codes, drums, playing, keys, displayName]);

  // TODO:
  function handleMouseDown(e) {
    const newDrumID = e.target.id;
    e.target.classList.add("pressed");

    const myClip = document.getElementById(keys[drums.indexOf(newDrumID)]);
    try {
      myClip.currentTime = 0;
    } catch (error) {}
    myClip.play();
    // setPlaying(displayName[drums.indexOf(newDrumID)]);
    document.getElementById("display").innerText =
      displayName[drums.indexOf(newDrumID)];
  }

  function handleMouseUp(e) {
    e.target.classList.remove("pressed");
    // setPlaying("");
  }

  // const onChange = (e) => {
  //   setPlaying("");
  // };

  return (
    <Wrapper id="drum-machine">
      <Display id="display" playing={playing}></Display>
      <DrumGrid>
        {drums.map((drum) => (
          <div
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            id={drum}
            key={drum}
            className="drum-pad"
          >
            <audio
              preload="auto"
              src={drum}
              className="clip"
              id={keys[drums.indexOf(drum)]}
            ></audio>
            {keys[drums.indexOf(drum)]}
          </div>
        ))}
      </DrumGrid>
    </Wrapper>
  );
};

export default DrumMachine;
