import { createStackNavigator } from 'react-navigation';
import SplashScreen from './SplashScreen';
import Main from './Main';

const AppNavigator = createStackNavigator({
    SplashScreen: { screen: SplashScreen },
    Main: { screen: Main},
});

export default AppNavigator;