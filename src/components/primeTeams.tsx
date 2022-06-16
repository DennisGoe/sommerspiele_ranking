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
      <img
        className="w-3/4"
        src={require(`../images/${props.name}.jpg`)}
        alt=""
      />
      {props.place === 1 && (
        <strong className="text-6xl text-yellow-500">{props.place}</strong>
      )}
      {props.place === 2 && (
        <strong className="text-4xl text-neutral-400">{props.place}</strong>
      )}
      {props.place === 3 && (
        <strong className="text-3xl text-yellow-800">{props.place}</strong>
      )}

      <div>
        <strong className="text-white text-md">{props.name}</strong>
      </div>
      <div>
        <span className="text-neutral-400 text-xs">{props.members}</span>
      </div>
      <div>
        <strong className="text-white text-lg">{props.score}</strong>
      </div>
    </div>
  );
};

export default PrimeTeams;
