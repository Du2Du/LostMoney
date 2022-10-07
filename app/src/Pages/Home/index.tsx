import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Header, Section } from "./Components";
import { homeStyles } from "./Styles";

const Home: React.FC = ({}) => {
  const addExpense = () => {};

  return (
    <View style={homeStyles.homeStyle}>
      <Header />
      <TouchableOpacity style={homeStyles.addButton}>
        <Icon onPress={addExpense} size={25} color="#efefef" name="plus" />
      </TouchableOpacity>
    <Section/>
    </View>
  );
};

export default Home;
