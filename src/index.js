import { Provider } from "react-redux";

import { init } from "./db";
import AppNavigator from "./navigation/index";
import { store } from "./store";
export default function App() {
  init()
    .then(() => {
      console.log("Initialized database");
    })
    .catch((err) => {
      console.log("Initializing db failed.");
      console.log(err);
    });

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
