import { StyleSheet, Text, View } from "react-native";
//import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;
  // alternative method to access the params:
  //const route = useRoute();
  //const categoryId = route.params.caregoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId}</Text>
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
