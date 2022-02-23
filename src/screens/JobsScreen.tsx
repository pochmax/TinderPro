import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
  Button,
} from "react-native";

import { default as data } from "../../api/data.json";
import Swiper from "react-native-deck-swiper";

const renderItem = ({ item }) => {
  return <Text>{item.role}</Text>;
};

export const JobsScreen = () => {
  const datas = data.results;
  // const test = JSON.par
  const transformedData = [
    datas[0].company_name,
    datas[1].company_name,
    datas[2].company_name,
    datas[3].company_name,
    datas[4].company_name,
  ];

  return (
    <View style={styles.container}>
      <Swiper
        cards={transformedData}
        renderCard={(card) => {
          return (
            <View style={styles.card}>
              <Text style={styles.text}>{card}</Text>
              <Text style={styles.text}>super</Text>
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
});
