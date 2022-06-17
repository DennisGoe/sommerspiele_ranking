import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import store from "../store/store";
// import { useNavigate } from "react-router-dom";
import rankingSlice from "../store/slices/ranking";
import { TeamModel } from "../models/teamModel";

interface AddTeamPageProps {
  setShowAddPage: (value: boolean) => void;
}

const AddTeamPage: FC<AddTeamPageProps> = (props) => {
  const [teamName, setTeamName] = useState("");
  const [teammembers, setTeammembers] = useState("");
  const [showIncompleteWarning, setShowIncompleteWarning] = useState(false);
  const authStatus = useSelector(() => store.getState().auth.auth);

  const confirmAdd = () => {
    if (teamName === "" || teammembers === "") {
      setShowIncompleteWarning(true);
      return;
    }
    const completeTeamData: TeamModel = {
      name: teamName,
      members: teammembers,
      score: 0,
    };
    store.dispatch(rankingSlice.actions.addTeam(completeTeamData));
    props.setShowAddPage(false);
  };

  return (
    <div className="bg-neutral-700 w-full h-screen">
      {showIncompleteWarning && (
        <div className="bg-red-500 p-4 grid place-items-center text-white">
          incomplete data...
        </div>
      )}
      {authStatus && (
        <div className="w-screen pt-4">
          <strong className="w-screen text-white w-full ml-4">Teamname</strong>
          <div className="w-full grid place-items-center">
            <input
              type="text"
              className="w-11/12 m-auto p-3 bg-transparent text-white rounded-lg border-2 border-neutral-400"
              onChange={(e) => setTeamName(e.target.value)}
            />
          </div>
          <strong className="w-screen text-white w-full ml-4">
            Teammembers
          </strong>
          <div className="w-full grid place-items-center">
            <input
              className="w-11/12 m-auto p-3 bg-transparent text-white rounded-lg border-2 border-neutral-400"
              type="text"
              onChange={(e) => setTeammembers(e.target.value)}
            />
            <button
              className="bg-green-300 p-3 text-lg text-white uppercase w-11/12 rounded-md mt-4"
              onClick={confirmAdd}
            >
              ADD
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTeamPage;
