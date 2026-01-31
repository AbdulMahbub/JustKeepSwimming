import { View, Text } from "react-native";
import WoodenButton from "../components/WoodenButton.jsx";
import { useNavigation } from "@react-navigation/native";
import { APP_NAME, SETTINGS, PLAY, INFO } from "../constants/constants.js";
import { homeScreenStyling } from "../styles/colors";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={homeScreenStyling.container}>
      <Text style={homeScreenStyling.gameTitle}>{APP_NAME}</Text>
      <WoodenButton onPress={() => console.log("pressed play")}>
        {PLAY}
      </WoodenButton>
      <View style={{ flexDirection: "row" }}>
        <WoodenButton onPress={() => navigation.navigate("Settings")}>
          {SETTINGS}
        </WoodenButton>

        <WoodenButton onPress={() => console.log("You pressed info")}>
          {INFO}
        </WoodenButton>
      </View>
    </View>
  );
};

export default HomeScreen;
