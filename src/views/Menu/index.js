import { View, StyleSheet } from "react-native";

import NavigatorButton from "../../Components/NavigatorButton";

export default () => {
  return (
    <View style={styles.menu}>
      <NavigatorButton route="Checklist" icon="md-checkbox" />
      <NavigatorButton route="Pomodoro" icon="timer" />
      <NavigatorButton route="Statistics" icon="stats-chart" />
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    minHeight: 50,
    backgroundColor: "#0A3A40",
    alignItems: "center",
  },
});
