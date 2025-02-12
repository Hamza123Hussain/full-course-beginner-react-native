import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import IcedCoffee from '@/assets/images/Iced-Caramel-Macchiato-f4a10f9.jpg' // Importing the image

// Renamed to 'App' (React components should start with a capital letter)
const App: React.FC = () => {
  // Added React.FC for better TypeScript support
  return (
    <View style={styles.container}>
      {/* ImageBackground allows us to set an image as the background */}
      <ImageBackground source={IcedCoffee} style={styles.image}>
        <Text style={styles.text}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  )
}

// Styling for the components
const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container fill the screen
    flexDirection: 'column', // Arranges children vertically
    backgroundColor: 'black', // Background color if image fails to load
  },
  image: {
    flex: 1, // Make the image cover the entire container
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
  },
  text: {
    color: 'white', // White text for contrast
    fontSize: 42, // Large font size
    fontWeight: 'bold', // Bold text
    textAlign: 'center', // Center align the text
  },
})

export default App // Exporting the component
