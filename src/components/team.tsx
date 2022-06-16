import React, { FC } from "react";
interface TeamProps {
  name: string;
  members: string;
  score: number;
}
const Team: FC<TeamProps> = (props) => {
  return (
    <div className="bg-neutral-800 text-white p-2 mb-1 flex">
      <img
        src={require(`../images/${props.name}.jpg`)}
        alt="team"
        className="w-3/12 rounded-full"
      />
      <div>
        <strong>{props.name}</strong>
        <div>
          <span>{props.members}</span>
        </div>
        <div>
          <span>Punkte: {props.score}</span>
        </div>
      </div>
    </div>
  );
};

export default Team;
