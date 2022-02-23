import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
} from "react-native";

import { Button } from "react-native-paper";

import { default as data } from "../../api/data.json";
import Swiper from "react-native-deck-swiper";

const renderItem = ({ item }) => {
  return <Text>{item.role}</Text>;
};

export const JobsScreen = () => {
  const datas = data.results;
  // const test = JSON.par
  const transformedData = [
    datas[0].company_name +
      "                               " +
      "-" +
      "                               " +
      datas[0].role,
    datas[1].company_name +
      "                               " +
      "-" +
      "                               " +
      datas[1].role,
    datas[2].company_name +
      "                               " +
      "-" +
      "                               " +
      datas[2].role,
    datas[3].company_name +
      "                               " +
      "-" +
      "                               " +
      datas[3].role,
    datas[4].company_name +
      "                               " +
      "-" +
      "                               " +
      datas[4].role,
    datas[5].company_name +
      "                               " +
      "-" +
      "                               " +
      datas[5].role,
    datas[6].company_name +
      "                               " +
      "-" +
      "                               " +
      datas[6].role,
    datas[7].company_name +
      "                               " +
      "-" +
      "                               " +
      datas[7].role,
    datas[8].company_name +
      "                               " +
      "-" +
      "                               " +
      datas[8].role,
    datas[9].company_name +
      "                               " +
      "-" +
      "                               " +
      datas[9].role,
    datas[10].company_name +
      "                               " +
      "-" +
      "                               " +
      datas[10].role,
  ];

  return (
    <View style={styles.container}>
      <Swiper
        cards={transformedData}
        renderCard={(card) => {
          return (
            <View style={styles.card}>
              <Text style={styles.text}>{card}</Text>
              <View style={styles.raw}>
                <Button
                  style={styles.boutton}
                  mode="contained"
                  labelStyle={styles.button}
                >
                  🏃
                </Button>
                <View style={styles.espace}></View>
                <Button
                  style={styles.boutton}
                  mode="contained"
                  labelStyle={styles.button}
                >
                  👨‍💻
                </Button>
              </View>
            </View>
          );
        }}
        onSwiped={(cardIndex) => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log("onSwipedAll");
        }}
        cardIndex={0}
        backgroundColor={"#4FD0E9"}
        stackSize={3}
      >
        <Button
          onPress={() => {
            console.log("oulala");
          }}
          title="Press me"
        >
          You can press me
        </Button>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    marginLeft: -400,
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
  },
  raw: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  boutton: {
    borderRadius: 100,
    marginTop: 250,
  },
  button: {
    fontSize: 60,
  },
  espace: {
    width: 70,
  },
});
