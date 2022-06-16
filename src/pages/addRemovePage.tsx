import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import store from "../store/store";
import AddTeamPage from "./addTeamPage";
import Team from "../components/team";

const AddRemovePage = () => {
  const authState = useSelector(() => store.getState().auth.auth);
  const teamList = useSelector(() => store.getState().ranking.teamList);
  const [showAddForm, setShowAddForm] = useState(false);
  const [copiedList, setCopiedList] = useState(false);

  useEffect(() => {
    setCopiedList(false);
  }, [teamList]);

  const printJSONTeam = () => {
    navigator.clipboard.writeText(JSON.stringify(teamList));
    setCopiedList(true);
  };
  return (
    <div className="w-full h-screen bg-neutral-700">
      {!showAddForm && (
        <div>
          <div className="flex items-center">
            <button
              onClick={printJSONTeam}
              className=" m-2 bg-transparent text-white border-white border-2 text-xs p-1 rounded-md"
            >
              copy JSON
            </button>
            {copiedList && (
              <span className="text-green-600 text-xs">copied!</span>
            )}
          </div>
          <div>
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
        </div>
      )}
      {authState && (
        <div>
          {!showAddForm && (
            <button
              className="p-4 bg-green-300 text-white w-20 h-20 right-2 bottom-2 rounded-full absolute text-2xl"
              onClick={() => setShowAddForm(true)}
            >
              +
            </button>
          )}
          {showAddForm && <AddTeamPage setShowAddPage={setShowAddForm} />}
        </div>
      )}
    </div>
  );
};

export default AddRemovePage;
