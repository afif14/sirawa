import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Alert } from "react-native";
import Slick from "react-native-slick";
import CircleIcon from "../../components/circleIcon";
import { globalStyles } from "../../styles/global";
import { normalize } from "../../utils/normalize";
import RadioButtonRN from "radio-buttons-react-native-expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { tingkat1, tingkat2, tingkat3, tingkat4 } from "../../utils/soal";

const ScreenSoal = ({ route, navigation }) => {
  const { soal, level } = route.params;
  const [isianUser, setIsianUser] = useState([]);

  const jawaban = async (value) => {
    const isAnswer = await AsyncStorage.getItem("jawaban");
    if (isAnswer) {
      const replace = JSON.parse(isAnswer).filter(
        (el) => !(level == el.level && value.id == el.id)
      );
      const answer = replace.concat([
        { level, id: value.id, jawabanUser: value.isian },
      ]);
      await AsyncStorage.setItem("jawaban", JSON.stringify(answer));
    } else {
      await AsyncStorage.setItem(
        "jawaban",
        JSON.stringify([{ level, id: value.id, jawabanUser: value.isian }])
      );
    }
  };

  const cekJawaban = async () => {
    const isAnswer = await AsyncStorage.getItem("jawaban");
    if (isAnswer) {
      JSON.parse(isAnswer).map((el) => {
        if (el.level == level) {
          setIsianUser((prevState) => {
            return [...prevState, { jawabanUser: el.jawabanUser, id: el.id }];
          });
        }
      });
    }
  };
  useEffect(() => {
    cekJawaban();
  }, []);

  const handleSoal = (level) => {
    if (level == 1) {
      return tingkat1;
    } else if (level == 2) {
      return tingkat2;
    } else if (level == 3) {
      return tingkat3;
    } else if (level == 4) {
      return tingkat4;
    }
  };

  const pilihanUser = (id, pilihanSoal, tebakanUser) => {
    let idJawaban = 0;
    tebakanUser.map((value, index) => {
      if (id == value.id) {
        pilihanSoal.map((el, i) => {
          if (value.jawabanUser == el) {
            idJawaban = i + 1;
          }
        });
      }
    });
    return idJawaban;
  };

  const initialLevel = async (tingkat) => {
    const isLevel = await AsyncStorage.getItem("level");
    if (isLevel) {
      const updateLevel = JSON.parse(isLevel);
      if (tingkat <= 3) {
        updateLevel[`tingkat${tingkat + 1}`] = true;
        await AsyncStorage.setItem("level", JSON.stringify(updateLevel));
      }
    } else {
      await AsyncStorage.setItem(
        "level",
        JSON.stringify({
          tingkat1: true,
          tingkat2: false,
          tingkat3: false,
          tingkat4: false,
        })
      );
    }
  };

  const pilihan = (index) => {
    if (index == 0) {
      return "a";
    } else if (index == 1) {
      return "b";
    } else if (index == 2) {
      return "c";
    } else if (index == 3) {
      return "d";
    }
  };

  const handleArrow = (level) => {
    if (level == 1) {
      return `flex-end`;
    } else if (level == 4) {
      return "flex-start";
    } else {
      return "space-between";
    }
  };

  const Exit = () => {
    Alert.alert('', 'Yen kowe metu saka Latihan Soal, Jawaban mu ora kesimpen', [
      { text: 'Iya', onPress: async () => {
        await AsyncStorage.removeItem('jawaban')
        await AsyncStorage.removeItem('level')
        navigation.navigate("Menu") }},
      {
        text: 'Ora',
        onPress: () => null,
        style: 'cancel',
      },
    ])
    return true
  }

  const Done = () => {
    Alert.alert('', 'Yakin kowe wes rampung ngerjakno Latian Soal?', [
      { text: 'uwes', onPress: async () => {
        navigation.navigate("ScreenNilai") }},
      {
        text: 'urung',
        onPress: () => null,
        style: 'cancel',
      },
    ])
    return true
  }

  const kumpulanSoal = () => {
    return soal.map((value, index) => {
      return (
        <View style={styles.container} key={level + index}>
          <View style={styles.aksaraBox}>
            <Text style={styles.textContoh}>{value.arti}</Text>
          </View>
          <Text style={styles.textSoal}>{value.soal}</Text>
          <View>
            {/* {value.pilihan.map((value, index) => {
                     return ( */}
            <RadioButtonRN
              initial={pilihanUser(value.id, value.pilihan, isianUser)}
              box={false}
              boxStyle={styles.boxRadio}
              textStyle={styles.textHitam}
              data={value.pilihan.map((element, i) => {
                return {
                  isian: element,
                  label: `${pilihan(i)}. ${element}`,
                  id: value.id,
                };
              })}
              selectedBtn={(e) => jawaban(e)}
            />
            {/* )
                  })} */}
          </View>
        </View>
      );
    });
  };

  return (
    <ImageBackground
      source={require("../../assets/images/BG-1.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={globalStyles.container}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <CircleIcon name="home" onPress={Exit} />
          {level == 4 && (
            <CircleIcon
              name="star"
              onPress={Done}
            />
          )}
        </View>
        <View style={globalStyles.centerContainer}>
          <Text style={styles.textMenu}>Latihan Soal</Text>
          <Text style={styles.textMenuSecond}>
            Tingkat {level}
          </Text>
          <View style={styles.historyContainer}>
            <Slick loop={false}>{kumpulanSoal()}</Slick>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: handleArrow(level),
            marginTop: 10
          }}
        >
          {level != 1 && (
            <CircleIcon
              name="arrow-left"
              onPress={() =>
                navigation.navigate("ScreenSoal", {
                  soal: handleSoal(level - 1),
                  level: level - 1,
                })
              }
            />
          )}
          {level != 4 && (
            <CircleIcon
              name="arrow-right"
              onPress={() =>
                navigation.navigate("ScreenSoal", {
                  soal: handleSoal(level + 1),
                  level: level + 1,
                })
              }
            />
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: normalize(28),
    fontFamily: "roboto-bold",
    lineHeight: 42,
    width: 272,
    textAlign: "center",
  },
  historyContainer: {
    width: 320,
    height: 440,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  container: {
    marginTop: 10,
    margin: 5,
    alignItems: "center",
  },
  aksaraBox: {
    backgroundColor: "#FFA1A1",
    borderRadius: 18,
    display: "flex",
    justifyContent: "center",
    height: "30%",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  textContoh: {
    fontSize: normalize(30),
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 15,
    marginTop: -25
  },
  textHitam: {
    color: "black",
    fontSize: normalize(19),
    fontWeight: "700",
    paddingVertical: 15,
  },
  textSoal: {
    fontSize: 18,
  },
  boxRadio: {
    width: 260,
  },
  textMenu: {
   fontSize: normalize(40),
   fontWeight: 'bold',
   textAlign: 'center',
   marginTop: 20,
   marginLeft: -20,
   color: '#EA855B',
   fontFamily: 'serif'
 },
 textMenuSecond: {
   fontSize: normalize(25),
   color: '#EAC28F',
   marginLeft: 120,
   marginTop: -10,
   marginBottom:30,
   fontWeight: 'bold',
   textAlign: 'center',
   fontFamily: 'serif'
 },
});

export default ScreenSoal;
