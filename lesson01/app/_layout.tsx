import { Colors } from '@/constants/Colors' // Importing custom color themes
import { useFonts } from 'expo-font' // Hook to load custom fonts
import { Stack } from 'expo-router' // Navigation stack for managing screens
import * as SplashScreen from 'expo-splash-screen' // Manages splash screen visibility
import { useEffect } from 'react' // Hook to handle side effects
import { Appearance } from 'react-native' // Retrieves the system color scheme

// Prevents the splash screen from auto-hiding before all assets (fonts, images, etc.) are loaded.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  // Gets the current system theme (light or dark)
  const colorScheme = Appearance.getColorScheme()

  // Dynamically selects the theme based on the system setting
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light

  // Loading custom fonts asynchronously
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'), // Custom font for the app
  })

  // Hides the splash screen once fonts are fully loaded
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync() // Ensures smooth transition to the main app
    }
  }, [loaded])

  // If fonts are not yet loaded, return `null` to prevent rendering incomplete UI
  if (!loaded) {
    return null
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.background }, // Dynamically sets header background color
        headerTintColor: theme.tint, // Changes text/icon color based on theme
        headerShadowVisible: false, // Removes shadow for a cleaner UI
      }}
    >
      {/* Main tab navigator, hiding the header for a fullscreen experience */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Default 404 screen if a route isn't found */}
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}
