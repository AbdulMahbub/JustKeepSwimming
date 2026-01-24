import { Pressable, Text } from "react-native";

import { buttonStyling } from "../styles/colors";

const WoodenButton = (props) => {
  return (
    <Pressable onPress={props.onPressFunction} style={buttonStyling.container}>
      <Text style={buttonStyling.text}>{props.title}</Text>
    </Pressable>
  );
};

export default WoodenButton;
