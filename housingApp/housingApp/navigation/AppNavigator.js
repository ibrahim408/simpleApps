import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../src/components/Home';
import Discover from '../src/components/Discover';

const AppNavigator = createStackNavigator(
 {
    Discover: { screen: Discover },
    Home: { screen: Home},
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
