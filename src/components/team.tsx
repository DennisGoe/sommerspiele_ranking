import React, { FC, useState } from "react";
import { TeamModel } from "../models/teamModel";
import store from "../store/store";
import rankingSlice from "../store/slices/ranking";
interface TeamProps {
  name: string;
  members: string;
  score: number;
  place: number;
}
const Team: FC<TeamProps> = (props) => {
  const [score, setScore] = useState(props.score as unknown as number);
  const updateTeam = (e: any) => {
    setScore(e.target.value);
    const teamData: TeamModel = {
      name: props.name,
      members: props.members,
      score: e.target.value,
    };
    store.dispatch(rankingSlice.actions.updateTeam(teamData));
  };
  return (
    <div className=" text-white pt-2 mb-1  flex">
      <div className="text-white grid place-items-center mr-4 ml-4">
        <span>{props.place}</span>
      </div>
      <div className="bg-secondary flex w-full p-0 rounded-full h-16 mr-1">
        <div className="relative w-16 h-16 mr-3  grid place-items-center">
          <img
            className="rounded-full border border-gray-100 shadow-sm ml-3"
            src={require(`../images/${props.name}.jpg`)}
            alt="team suff"
          />
        </div>

        <div className="flex align-middle w-full ">
          <div className="w-3/4 pt-2">
            <strong>{props.name}</strong>
            <div>
              <span>{props.members}</span>
            </div>
          </div>
          <div className="grid place-items-center ml-3">
            <input
              type="text"
              value={score}
              className="w-5 text-black"
              onChange={(e) => updateTeam(e)}
            />
            {/*<strong className="text-green-400 text-lg">{props.score}</strong>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
