import React from 'react';
import Ranking from "./components/ranking";
import CustomRouter from "./routing/customRouter";
import {Provider} from "react-redux";
import store from "./store/store";




function App() {
  return (
      <Provider store={store}>
        <CustomRouter/>
      </Provider>
  );
}

export default App;
