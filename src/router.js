import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

// PAGINAS
import  Home from "./pages/Home";
import Details from "./pages/Details";
import { Montserrat_700Bold } from "@expo-google-fonts/montserrat";

// PILHA DE PAGINAS
const Stack = createStackNavigator();

function Routes() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={Home} 
                options={{
                    title:'ALUGUE - by tikin',
                    headerTitleStyle:{
                        fontFamily:'Montserrat_700Bold'                        
                    },
                    headerRight:() =>(
                        <TouchableOpacity style={{marginRight:15}}>
                            <Feather
                            name="shopping-bag"
                            size={24}
                            color="#000"                        
                            />
                        </TouchableOpacity>
                    )
                }}/>
                <Stack.Screen name="details" component={Details}
                options={{
                    title:'DETALHE',
                    headerTitleStyle:{
                        fontFamily:'Montserrat_700Bold'                        
                    },
                    headerRight:() =>(
                        <TouchableOpacity style={{marginRight:15}}>
                            <Feather
                            name="shopping-bag"
                            size={24}
                            color="#000"                        
                            />
                        </TouchableOpacity>
                    )
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )    
}

export default Routes;