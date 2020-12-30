import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import {
  Montserrat_500Medium_Italic,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useNavigation } from "@react-navigation/native";

import New from "../components/New";
import House from "../components/House";
import Recomended from "../components/Recomended";

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#fff" }}
    >
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name="search" size={24} color="#000" />
          <TextInput
            placeholder="O que está procurando?"
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Novidades</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <New
          cover={require("../assets/house1.jpg")}
          name="Casa de praia"
          description="Casa nova a uma quadra da praia muito boa mesmo pode confiar"
          onPress={() => navigation.navigate("details")}
        />
        <New
          cover={require("../assets/house2.jpg")}
          name="Casa de praia"
          description="Casa nova do Tikin a uma quadra da praia muito boa mesmo pode confiar"
          onPress={() => {}}
        />
        <New
          cover={require("../assets/house3.jpg")}
          name="Casa de praia"
          description="Casa na quebrada, uma quadra da entrada do morro"
          onPress={() => {}}
        />
        <New
          cover={require("../assets/house4.jpg")}
          name="Casa de praia"
          description="Casa nova a uma quadra da praia muito boa mesmo pode confiar"
          onPress={() => {}}
        />
      </ScrollView>

      <View
        style={{ flexDirection: "row", marginBottom: 10, alignItems: "center" }}
      >
        <Text style={[styles.title, { marginTop: 20 }]}>Próximo de você</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <House cover={require("../assets/house5.jpg")} />
        <House cover={require("../assets/house6.jpg")} />
        <House cover={require("../assets/house2.jpg")} />
      </ScrollView>
      <View>
        <Text style={[styles.title, { marginTop: 20 }]}>Dica do dia</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <Recomended
          cover={require("../assets/house2.jpg")}
          house="floripa nenem"
          offer="20%"
        />
        <Recomended
          cover={require("../assets/house4.jpg")}
          house="Casa legal"
          offer="20%"
        />
        <Recomended
          cover={require("../assets/house6.jpg")}
          house="nome qualquer"
          offer="20%"
        />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 20,
  },
  inputArea: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "98%",
    backgroundColor: "#fff",
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  input: {
    fontFamily: "Montserrat_500Medium",
    paddingHorizontal: 10,
    fontSize: 13,
    width: "98%",
  },
  contentNew: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  title: {
    paddingHorizontal: 15,
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: "#4f4a4a",
  },
});
