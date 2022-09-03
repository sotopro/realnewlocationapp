import { Provider } from "react-redux";

import AppNavigator from "./navigation/index";
import { store } from "./store";
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
