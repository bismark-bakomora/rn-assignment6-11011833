import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={StyleSheet.headerContainer}>
      <Text style={StyleSheet.headerTitle}>Open Fashion</Text>
      <View style={StyleSheet.iconContainer}>
        <Image
          source={require("../assets/Search.png")}
          style={StyleSheet.icon}
        />
        <Image
          source={require("../assets/shoppingBag.png")}
          style={StyleSheet.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
});

export default Header;
