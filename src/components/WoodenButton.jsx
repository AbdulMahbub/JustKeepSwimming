import { Pressable, Text } from "react-native";

import { buttonStyling } from "../styles/colors";

const WoodenButton = ({children, onPress}) => {
  return (
    <Pressable onPress={onPress} style={buttonStyling.container}>
      <Text style={buttonStyling.text}>{children}</Text>
    </Pressable>
  );
};

export default WoodenButton;
