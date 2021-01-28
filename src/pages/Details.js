import React from "react";
import { View, Text, Image, Touchable, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import SwiperContent from "../components/Swiper";
import Stars from "react-native-stars";
import {
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function Details() {
  return (
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperContent />
      </View>
      <View style={styles.HeaderContent}>
        <View style={{ width: "65%" }}>
          <Text style={styles.house}>Casa de praia</Text>
        </View>

        <View style={{ width: "35%" }}>
          <Text style={styles.rating}>Avalições</Text>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Stars
              default={4}
              count={5}
              half={true}
              starSize={20}
              fullStar={
                <Ionicons name="md-star" size={24} style={styles.mystarStyle} />
              }
              emptyStar={
                <Ionicons
                  name="md-star-outline"
                  size={24}
                  style={styles.mystarStyle}
                />
              }
              halfStar={
                <Ionicons
                  name="md-star-half"
                  size={24}
                  style={styles.mystarStyle}
                />
              }
            />
          </View>
        </View>
      </View>
      <Text style={styles.price}>1223.00</Text>
      <Text style={styles.description}>
        Uma casa muito legal em algum lugar muito bacana.
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15, marginTop: 35 }}
      >
        <View style={styles.slide}>
          <Image
            source={require("../assets/house3.jpg")}
            style={{ width: 90, height: 90, borderRadius: 8 }}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../assets/house3.jpg")}
            style={{ width: 90, height: 90, borderRadius: 8 }}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../assets/house3.jpg")}
            style={{ width: 90, height: 90, borderRadius: 8 }}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../assets/house3.jpg")}
            style={{ width: 90, height: 90, borderRadius: 8 }}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../assets/house3.jpg")}
            style={{ width: 90, height: 90, borderRadius: 8 }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  swiperContent: {
    flexDirection: "row",
    height: 340,
    width: "100%",
  },
  HeaderContent: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  house: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: "#4f4a4a",
  },
  rating: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 9,
    color: "#4f4a4a",
  },
  mystarStyle: {
    color: "#e7a74e",
    backgroundColor: "transparent",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  price: {
    paddingHorizontal: 20,
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
    color: "#000",
  },
  description: {
    fontFamily: "Montserrat_500Medium",
    paddingHorizontal: 20,
    color: "#b3aeae",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 20,
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 90,
    width: 90,
    marginRight: 8,
    borderRadius: 8,
  },
});
