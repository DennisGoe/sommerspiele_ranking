import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TeamModel } from "../../models/teamModel";
const data = require("../../teams.json");

interface stateInterface {
  teamList: any;
}
const initialState: stateInterface = {
  teamList: data,
};

const rankingSlice = createSlice({
  name: "rankingSlice",
  initialState,
  reducers: {
    setTotalList(state, action: PayloadAction<any>) {
      state.teamList = action.payload;
    },
    addTeam(state, action: PayloadAction<TeamModel>) {
      state.teamList.push(action.payload);
    },
    removeTeam(state, action: PayloadAction<TeamModel>) {
      const teamIndex = state.teamList.findIndex(
        (team: any) => team.name === action.payload.name
      );
      state.teamList.slice(teamIndex);
    },
  },
});

export const { addTeam, removeTeam, setTotalList } = rankingSlice.actions;
export default rankingSlice;
