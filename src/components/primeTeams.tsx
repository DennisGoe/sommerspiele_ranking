import React, { FC } from "react";

interface PrimeTeamsProps {
  name: string;
  members: string;
  score: number;
}

const PrimeTeams: FC<PrimeTeamsProps> = (props) => {
  return (
    <div>
      <div>
        <strong>{props.name}</strong>
      </div>
      <div>
        <span>{props.members}</span>
      </div>
      <div>
        <strong>{props.score}</strong>
      </div>
    </div>
  );
};

export default PrimeTeams;
