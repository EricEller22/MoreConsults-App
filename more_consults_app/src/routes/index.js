import { NavigationContainer } from '@react-navigation/native'
import InitialRoutes from './stack-routes'

export default function Routes(){

    return(
        <NavigationContainer>
            <InitialRoutes/>
        </NavigationContainer>
    )
}