import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Team } from "../../models/team";

interface stateInterface {
  teamList: Team[];
}
const initialState: stateInterface = {
  teamList: [],
};

const rankingSlice = createSlice({
  name: "rankingSlice",
  initialState,
  reducers: {
    addTeam(state, action: PayloadAction<Team>) {
      state.teamList.push(action.payload);
    },
    removeTeam(state, action: PayloadAction<Team>) {
      const teamIndex = state.teamList.findIndex(
        (team) => team.name === action.payload.name
      );
      state.teamList.slice(teamIndex);
    },
  },
});

export const { addTeam, removeTeam } = rankingSlice.actions;
export default rankingSlice;
