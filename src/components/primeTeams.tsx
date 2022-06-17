import React, { FC } from "react";

interface PrimeTeamsProps {
  name: string;
  members: string;
  score: number;
  width: string;
  fontSize: string;
  place: number;
}

const PrimeTeams: FC<PrimeTeamsProps> = (props) => {
  return (
    <div className={`${props.width} grid place-items-center ${props.fontSize}`}>
      <div className="relative w-17 h-17 grid place-items-center">
        <span className="text-white">{props.place}</span>
        <img
          className="w-3/4 rounded-full border-2 border-green-400 shadow-sm"
          src={require(`../images/${props.name}.jpg`)}
          alt=""
        />
      </div>

      <div>
        <strong className="text-white text-md">{props.name}</strong>
      </div>
      <div>
        <span className="text-neutral-400 text-xs">{props.members}</span>
      </div>
      <div>
        <strong className="text-green-400 text-lg">{props.score}</strong>
      </div>
    </div>
  );
};

export default PrimeTeams;
