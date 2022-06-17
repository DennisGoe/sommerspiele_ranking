import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TeamModel } from "../../models/teamModel";
const data = require("../../teams.json");

interface stateInterface {
  completeList: any;
  notTopThreeTeams: any;
  primeTeams: any;
}
const initialState: stateInterface = {
  completeList: data,
  notTopThreeTeams: data
    .sort((a: any, b: any) => (a.score < b.score ? 1 : -1))
    .slice(3, data.length),
  primeTeams: data
    .sort((a: any, b: any) => (a.score < b.score ? 1 : -1))
    .slice(0, 3),
};

const rankingSlice = createSlice({
  name: "rankingSlice",
  initialState,
  reducers: {
    // setTotalList(state, action: PayloadAction<any>) {
    //   state.teamList = action.payload;
    // },
    addTeam(state, action: PayloadAction<TeamModel>) {
      state.completeList.push(action.payload);
    },
    removeTeam(state, action: PayloadAction<TeamModel>) {
      const teamIndex = state.notTopThreeTeams.findIndex(
        (team: any) => team.name === action.payload.name
      );
      state.notTopThreeTeams.slice(teamIndex);
    },
  },
});

export const { addTeam, removeTeam } = rankingSlice.actions;
export default rankingSlice;
