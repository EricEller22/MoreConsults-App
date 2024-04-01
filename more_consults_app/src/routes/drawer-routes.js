import { createDrawerNavigator } from '@react-navigation/drawer'

import HomePage from '../../components/homePage/index';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){

    return(
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name='Home' component={HomePage} />

            
        </Drawer.Navigator>
    )
}
