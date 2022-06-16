import React from "react";
import PrimeTeams from "./primeTeams";
import store from "../store/store";
import { useSelector } from "react-redux";

const PrimeTeamContainer = () => {
  const firstPlaceTeam = useSelector(
    () => store.getState().ranking?.primeTeams[0]
  );
  const secondPlaceTeam = useSelector(
    () => store.getState().ranking?.primeTeams[1]
  );
  const thirdPlaceTeam = useSelector(
    () => store.getState().ranking?.primeTeams[2]
  );
  return (
    <div className="flex w-screen pt-3">
      {/*second place*/}
      <PrimeTeams
        name={secondPlaceTeam.name}
        members={secondPlaceTeam.members}
        score={secondPlaceTeam.score}
        width={"w-1/4"}
        fontSize={"text-lg"}
        place={2}
      />
      {/*  first place */}
      <PrimeTeams
        name={firstPlaceTeam.name}
        members={firstPlaceTeam.members}
        score={firstPlaceTeam.score}
        width={"w-2/4"}
        fontSize={"text-2xl"}
        place={1}
      />
      {/*  third place */}
      <PrimeTeams
        name={thirdPlaceTeam.name}
        members={thirdPlaceTeam.members}
        score={thirdPlaceTeam.score}
        width={"w-1/4"}
        fontSize={"text-lg"}
        place={3}
      />
    </div>
  );
};

export default PrimeTeamContainer;
