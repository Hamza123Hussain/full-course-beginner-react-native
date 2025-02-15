import { Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons' // Import icons

import { HapticTab } from '@/components/HapticTab'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'

export default function TabLayout() {
  const colorScheme = useColorScheme() // Get current color scheme

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'orange', // Color for active icon
        tabBarInactiveTintColor: 'gray', // Color for inactive icon
        headerShown: true, // Show header at the top
        tabBarButton: HapticTab, // Custom tab button with haptic feedback
        tabBarBackground: TabBarBackground, // Custom background component for tab bar
        headerTitleAlign: 'center', // Center title in header
        headerStyle: Platform.select({
          default: { backgroundColor: 'white' }, // Dark purple for Android},
        }),
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute', // Transparent effect on iOS
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black
          },
          android: {
            backgroundColor: '#4B0082', // Dark purple for Android
          },
          default: { backgroundColor: '#4B0082' }, // Dark purple for Android},
        }),
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'} // Different icons for active/inactive
              size={28}
              color={color}
            />
          ),
        }}
      />

      {/* Explore/Contact Us Tab */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Contact Us',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'phone' : 'phone-outline'} // Change icon on focus
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}
