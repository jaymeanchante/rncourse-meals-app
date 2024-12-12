import { FlatList, StyleSheet, View } from "react-native";
//import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;
  // alternative method to access the params:
  //const route = useRoute();
  //const categoryId = route.params.caregoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
