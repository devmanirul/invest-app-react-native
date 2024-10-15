import { View, Text, ScrollView } from "react-native";
import styles from "./style";
import  productsData  from "../../constant/products.constant";
const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProductScreen</Text>
      <View style={styles.header}></View>
      <ScrollView style={styles.main}>
        {/* product 1 */}
        {productsData.map((product) => (
          <View key={product.id}>
            <Text>{product.title}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}></View>
    </View>
  );
};
export default ProductScreen;
