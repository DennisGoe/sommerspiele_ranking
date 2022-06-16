import React, { FC } from "react";
interface TeamProps {
  name: string;
  members: string;
  score: number;
}
const Team: FC<TeamProps> = (props) => {
  return (
    <div className="bg-neutral-800 text-white p-2 mb-1">
      <strong>{props.name}</strong>
      <div>
        <span>{props.members}</span>
      </div>
      <div>
        <span>Punkte: {props.score}</span>
      </div>
    </div>
  );
};

export default Team;
