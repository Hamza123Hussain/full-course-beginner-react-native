import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native'
import React from 'react'
import IcedCoffee from '@/assets/images/Iced-Caramel-Macchiato-f4a10f9.jpg' // Importing the image
import { Link } from 'expo-router'

// Functional Component for the Coffee Shop Home Page
const App: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={IcedCoffee}
        resizeMode="contain"
        style={styles.image}
      >
        {/* Overlay for better text visibility */}
        <View style={styles.overlay}>
          {/* Shop Title */}
          <Text style={styles.title}>Hamza Coffee Shop</Text>

          {/* Explore Button */}
          <Link href={'/explore'} asChild>
            <Pressable style={styles.exploreButton}>
              <Text style={styles.buttonText}>Explore</Text>
            </Pressable>
          </Link>
        </View>
      </ImageBackground>
    </View>
  )
}

// Styles for the Coffee Shop Home Page
const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container fill the entire screen
    backgroundColor: 'black', // Fallback background color in case image fails to load
  },
  image: {
    flex: 1, // Makes image cover the entire screen
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    padding: 20,
    borderRadius: 15,
    alignItems: 'center', // Ensures all content inside is centered
  },
  title: {
    color: 'white', // White text for contrast
    fontSize: 50, // Larger text for impact
    fontWeight: 'bold', // Bold text for emphasis
    textAlign: 'center',
    letterSpacing: 2, // Spaced-out letters for a more premium feel
    marginBottom: 20, // Adds spacing before the button
  },
  exploreButton: {
    backgroundColor: 'rgba(255, 165, 0, 0.8)', // Orange transparent button
    paddingVertical: 12, // Top and bottom padding
    paddingHorizontal: 30, // Left and right padding
    borderRadius: 8, // Rounded button edges
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
})

export default App // Exporting the component
