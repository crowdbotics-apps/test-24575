import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile206650Navigator from '../features/UserProfile206650/navigator';
import Maps206631Navigator from '../features/Maps206631/navigator';
import Settings206609Navigator from '../features/Settings206609/navigator';
import Settings206594Navigator from '../features/Settings206594/navigator';
import NotificationList206593Navigator from '../features/NotificationList206593/navigator';
import Maps206592Navigator from '../features/Maps206592/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile206650: { screen: UserProfile206650Navigator },
Maps206631: { screen: Maps206631Navigator },
Settings206609: { screen: Settings206609Navigator },
Settings206594: { screen: Settings206594Navigator },
NotificationList206593: { screen: NotificationList206593Navigator },
Maps206592: { screen: Maps206592Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
