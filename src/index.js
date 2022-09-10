import { Provider } from "react-redux";

import { init } from "./db";
import AppNavigator from "./navigation/index";
import { store } from "./store";

init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("Initializing db failed.", err);
  });
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
