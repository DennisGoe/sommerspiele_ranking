import React from "react";
import store from "../store/store";
import { useSelector } from "react-redux";
import Team from "../components/team";
import PrimeTeamContainer from "../components/primeTeamContainer";

const RankingPage = () => {
  const teamList = useSelector(() => store.getState().ranking.notTopThreeTeams);
  return (
    <div className="bg-primary w-full h-screen">
      <PrimeTeamContainer />
      {teamList.map((team: any, index: number) => {
        return (
          <Team
            name={team.name}
            members={team.members}
            score={team.score}
            key={team.name}
            place={index + 4}
          />
        );
      })}
    </div>
  );
};

export default RankingPage;
