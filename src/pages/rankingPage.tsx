import React from "react";
import store from "../store/store";
import { useSelector } from "react-redux";
import Team from "../components/team";

const RankingPage = () => {
  const teamList = useSelector(() => store.getState().ranking.teamList);
  return (
    <div className="bg-gray-700 w-full h-screen">
      {teamList.map((team: any) => {
        return (
          <Team
            name={team.name}
            members={team.members}
            score={team.score}
            key={team.name}
          />
        );
      })}
    </div>
  );
};

export default RankingPage;
