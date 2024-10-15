import { View, Text, ScrollView, FlatList } from "react-native";
import styles from "./style";
import productsData from "../../constant/products.constant";
import { TouchableOpacity } from "react-native";
const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProductScreen</Text>
      <View style={styles.header}></View>
      <FlatList
        data={productsData}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View key={item.id} style={styles.productCard}>
              <Text style={styles.productCardText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.footer}></View>
    </View>
  );
};
export default ProductScreen;
