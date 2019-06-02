import { createStackNavigator, createAppContainer } from 'react-navigation';
import Discover from '../src/components/Discover';

const AppNavigator = createStackNavigator(
 {
    Discover: { screen: Discover },
 },
 {
	initialRouteName: "Discover",
	defaultNavigationOptions: {
		//header: null,
	}
 }
);

const App = createAppContainer(AppNavigator);
export default App;
