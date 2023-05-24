import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Search bar */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1,
            margin: 10,
            padding: 10,
            borderRadius: 7,
            borderColor: "#C0C0C0",
          }}
        >
          <TextInput
            style={{ fontSize: 17 }}
            placeholder="Search for Restaurant item or more"
          />
          <AntDesign name="search1" size={24} color="#E52B50" />
        </View>
        {/* Image slider component */}
        <Carousel />
        {/* Food item Types */}
        <FoodTypes />
        {/*Quick food Component*/}
        <QuickFood />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
