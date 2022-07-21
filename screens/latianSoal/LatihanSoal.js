import React, { useEffect, useState } from "react";
import { Text, View, ImageBackground } from "react-native";
import { globalStyles } from "../../styles/global";
import CircleIcon from "../../components/circleIcon";
import { FlatButton } from "../../components/button";
import { tingkat1, tingkat2, tingkat3, tingkat4 } from "../../utils/soal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { normalize } from "../../utils/normalize";

var styles = {
  headingText: {
    fontSize: 28,
    fontFamily: "roboto-bold",
    lineHeight: 42,
    width: 272,
    textAlign: "center",
  },
  buttonStyle: {
    fontSize: "bold",
  },
  containerButton: {
    margin: 20,
    marginTop: 60,
  },
  slide1: {
    width: 273,
    height: 370,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonLock: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 34,
    marginTop: 8,
    backgroundColor: "#c4c4c4",
    marginVertical: 20,
  },
  textMenu: {
    fontSize: normalize(40),
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginLeft: -20,
    color: "#EA855B",
    fontFamily: "serif",
  },
  textMenuSecond: {
    fontSize: normalize(30),
    color: "#EAC28F",
    marginLeft: 50,
    marginTop: -10,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "serif",
  },
};

const LatihanSoal = ({ navigation }) => {
  const [level, setLevel] = useState({});
  useEffect(() => {
    const localLevel = async () => {
      const readLevel = await AsyncStorage.getItem("level");
      if (readLevel) {
        setLevel(JSON.parse(readLevel));
      }
    };
    localLevel();
    // if(localLevel){
    //    setLevel(JSON.parse(localLevel))
    // }
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/images/BG-1.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={globalStyles.container}>
        <CircleIcon
          name="home"
          onPress={async () => {
            await AsyncStorage.removeItem("jawaban");
            await AsyncStorage.removeItem("level");
            navigation.navigate("Menu");
          }}
        />
        <View style={globalStyles.centerContainer}>
          <Text style={styles.textMenu}>Latihan Soal</Text>
          <Text style={styles.textMenuSecond}>Aksara Jawa</Text>
        </View>

        <View style={styles.slide1}>
          <View style={styles.containerButton}>
            <FlatButton
              text="Tingkat 1"
              style={styles.buttonLock}
              onPress={() =>
                navigation.navigate("ScreenSoal", { soal: tingkat1, level: 1 })
              }
            />
            <FlatButton
              text="Tingkat 2"
              style={level?.tingkat2 ? globalStyles.button : styles.buttonLock}
              onPress={() =>
                navigation.navigate("ScreenSoal", { soal: tingkat2, level: 2 })
              }
            />
            <FlatButton
              text="Tingkat 3"
              style={level?.tingkat3 ? globalStyles.button : styles.buttonLock}
              onPress={() =>
                navigation.navigate("ScreenSoal", { soal: tingkat3, level: 3 })
              }
            />
            <FlatButton
              text="Tingkat 4"
              style={level?.tingkat4 ? globalStyles.button : styles.buttonLock}
              onPress={() =>
                navigation.navigate("ScreenSoal", { soal: tingkat4, level: 4 })
              }
            />
          </View>
        </View>
        <View style={{ marginTop: 100, marginLeft: 250 }}></View>
      </View>
    </ImageBackground>
  );
};

export default LatihanSoal;
