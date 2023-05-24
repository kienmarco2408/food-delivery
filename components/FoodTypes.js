import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import foodtypes from "../data/foodtypes";

const FoodTypes = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {foodtypes.map((item, index) => {
          return (
            <View style={{ margin: 12 }} key={index}>
              <Image
                source={{ uri: item.image }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  alignSelf: "center",
                }}
              />
              <Text style={{ marginTop: 6, textAlign: "center" }}>
                {item.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FoodTypes;

const styles = StyleSheet.create({});
