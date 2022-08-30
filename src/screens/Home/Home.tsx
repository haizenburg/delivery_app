import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  UserIcon,
  ChevronDownIcon,
  SparklesIcon,
} from "react-native-heroicons/solid";
import Categories from "../../components/Categories";
import FeaturedRow from "../../components/FeaturedRow";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className=" bg-white pt-5">
      {/* header */}

      <View className=" flex-row pb-3 items-center mx-4 space-x-2 px-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className={"h-7 w-7 bg-gray-300 p-4 rounded-full "}
        />

        <View className=" flex-1">
          <Text className={" font-bold text-gray-400 text-xs"}>
            Deliver Now!
          </Text>
          <Text className=" font-bold text-xl">
            Current Location
            {/* <ChevronDownIcon size={20} color="#43D0BD" /> */}
          </Text>
        </View>
        {/* <SparklesIcon /> */}
        {/* <UserIcon size={35} color="#43D0BD" /> */}
      </View>

      {/* search box */}
      <View className=" flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          {/* <SearchIcon /> */}
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        {/* adjust icon here */}
      </View>

      {/* body */}
      <ScrollView className=" bg-gray-100">
        {/* categories */}
        <Categories />
        {/* featured rows */}
        <FeaturedRow
          id={"1"}
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id={"2"}
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />
        <FeaturedRow
          id={"3"}
          title="Offers near you!"
          description="Why not support your local restaurant tonight?"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
