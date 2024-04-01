import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../../components/homePage/index'
import ServicePage from '../../components/servicePage/index';
import InstitutePage from '../../components/institutePage/index'
import CalendaryPage from '../../components/calendaryPage/index'
import ConfirmDataPage from '../../components/confirmDataPage/index'
import ConcludedPage from '../../components/concludedPage/index'

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (  
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomePage}/>
        <Stack.Screen name="Services" component={ServicePage} />
        <Stack.Screen name="Institutes" component={InstitutePage} />
        <Stack.Screen name="Calendary" component={CalendaryPage} />
        <Stack.Screen name="ConfirmData" component={ConfirmDataPage} />
        <Stack.Screen name="Concluded" component={ConcludedPage} />
      </Stack.Navigator>
  );
}

