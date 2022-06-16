import React from "react";
import store from "../store/store";
import { useSelector } from "react-redux";
import Team from "../components/team";
import PrimeTeamContainer from "../components/primeTeamContainer";

const RankingPage = () => {
  const teamList = useSelector(() => store.getState().ranking.teamList);
  return (
    <div className="bg-gray-700 w-full h-screen">
      <PrimeTeamContainer />
      {teamList.map((team: any, index: number) => {
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
