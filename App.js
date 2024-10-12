import { View, Text } from "react-native";
import Home from "./components/HomePage";
import SignUp from "./components/SignUp";
import CreateAccount from "./components/CreateAccount";
const App = () => {
  return (
    <View>
      {/* <Home />
      <SignUp /> */}
      <CreateAccount />
    </View>
  );
};
export default App;
