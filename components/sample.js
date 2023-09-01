import { StyleSheet, Text, Image, View, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default function Sample() {
  return (
    <SafeAreaView>
      <View style={[styles.box, { backgroundColor: "red" }]} />
      <View style={[styles.box, { backgroundColor: "blue" }]} />
      <View style={[styles.box, { backgroundColor: "green" }]} />
    </SafeAreaView>
  );
}
