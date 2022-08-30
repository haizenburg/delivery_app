import { View, Text, ScrollView } from "react-native";
import React from "react";

interface FeaturedProps {
  id: string;
  title: string;
  description: string;
}

const FeaturedRow = ({ title, description, id }: FeaturedProps) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text>{title}</Text>
        {/* arrow icon here */}
      </View>

      <Text className=" text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* restaurants card */}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
