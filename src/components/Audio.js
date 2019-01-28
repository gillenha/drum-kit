import React from "react";

const Audio = props => {
  let drumPad = props.sounds.map(sound => {
    return (
      <div className="drum-kit" key={sound.dataKey} datakey={sound.dataKey}>
        {sound.letter}
        <audio key={sound.id} datakey={sound.dataKey} src={sound.src} />
      </div>
    );
  });
  return <div id="content">{drumPad}</div>;
};

export default Audio;
