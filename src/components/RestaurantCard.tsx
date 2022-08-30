import { View, Text } from "react-native";
import React from "react";

interface IRestaurantCard {
  id: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: string;
  long: number;
  lat: number;
}

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}: IRestaurantCard) => {
  return (
    <View>
      <Text>RestaurantCard</Text>
    </View>
  );
};

export default RestaurantCard;
