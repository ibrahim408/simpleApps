import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../src/components/Home';
import List from '../src/components/List';

const AppNavigator = createStackNavigator(
 {
    List: { screen: List },
    Home: { screen: Home},
 },
 {
	initialRouteName: "List",
	defaultNavigationOptions: {
		//header: null,
	}
 }
);

const App = createAppContainer(AppNavigator);
export default App;
