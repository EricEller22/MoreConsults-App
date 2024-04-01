import { createDrawerNavigator } from '@react-navigation/drawer'

import StackRoutes from './stack-routes'

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){

    return(
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name='tabhome' component={StackRoutes} />
        </Drawer.Navigator>
    )
}
