import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { theme } from '../styles/theme'
import { Ionicons } from '@expo/vector-icons'

import { Home } from '../screens/Home'
import { SplashScreen } from '../screens/SplashScreen'
import { Detail } from '../screens/Detail'
import { Favorites } from '../screens/Favorites'
import { Search } from '../screens/Search'

const routeIcons = {
  Home: 'home-outline',
  Search: 'search-outline',
  Favorites: 'heart-outline',
}

const BottomRoute = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.red,
        // tabBarInactiveTintColor: theme.colors.white,
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Ionicons name={routeIcons[route.name]} size={size} color={color} />
          )
        },
        tabBarStyle: {
          backgroundColor: theme.colors.black,
          borderTopWidth: 0,
          paddingTop: theme.metrics.px(5),
        },
      })}
    >
      <Tab.Screen
        options={{
          tabBarLabel: 'Início',
          tabBarLabelStyle: {
            fontSize: theme.metrics.px(12),
            fontFamily: theme.fonts.semiBold,
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Buscar',
          tabBarLabelStyle: {
            fontSize: theme.metrics.px(12),
            fontFamily: theme.fonts.semiBold,
          },
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Favoritos',
          tabBarLabelStyle: {
            fontSize: theme.metrics.px(12),
            fontFamily: theme.fonts.semiBold,
          },
        }}
        name="Favorites"
        component={Favorites}
      />
    </Tab.Navigator>
  )
}

export const Routes = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={BottomRoute} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
