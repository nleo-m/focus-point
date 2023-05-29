import { TouchableHighlight, View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";

export default ({ route = "", icon = "" }) => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={styles.highlight}
      onPress={() => navigation.navigate(route)}
    >
      <View style={styles.button}>
        <Ionicons name={icon} size={24} color="#CED0E8" />
        <Text style={styles.label}>{route}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  highlight: {
    borderRadius: 25,
    padding: 10,
  },

  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  label: {
    color: "white",
    marginLeft: 5,
  },
});
