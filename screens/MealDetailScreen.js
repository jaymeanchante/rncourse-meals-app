import { Text, View } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>This is the Meals Detail Screen for {mealId}</Text>
    </View>
  );
}

export default MealDetailScreen;
