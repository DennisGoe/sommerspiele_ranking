import React, { FC } from "react";
interface TeamProps {
  name: string;
  members: string;
  score: number;
  place: number;
}
const Team: FC<TeamProps> = (props) => {
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
            <strong className="text-green-400 text-lg">{props.score}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
