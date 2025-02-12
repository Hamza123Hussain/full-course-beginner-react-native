// Importing necessary components from React Native
import {
  View, // Used as a container for layout
  Text, // For displaying text
  StyleSheet, // To create styles for components
  ImageBackground, // Allows setting an image as the background
  TextInput, // Input field for user text entry
  TouchableOpacity, // Makes elements touch-responsive (like buttons)
} from 'react-native'

import React from 'react' // Importing React to create the functional component

// Importing the background image from the assets folder
import IcedCoffee from '@/assets/images/Iced-Honey-Almondmilk-Flat-White-SQUARE.webp'

// Defining a functional component called "Explore"
const Explore: React.FC = () => {
  return (
    <View style={styles.container}>
      {' '}
      {/* Main container for the entire screen */}
      {/* Background image that covers the whole screen */}
      <ImageBackground
        source={IcedCoffee} // The image to be displayed as the background
        resizeMode="cover" // Ensures the image covers the entire area
        style={styles.image} // Applying custom styles to the background
      >
        {/* Overlay to add a dark transparent layer for better text visibility */}
        <View style={styles.overlay}>
          {/* Title of the coffee shop */}
          <Text style={styles.title}>Hamza Coffee Shop</Text>

          {/* Search Bar for user input */}
          <TextInput
            style={styles.searchBar} // Styling for the input box
            placeholder="Search your favorite coffee..." // Placeholder text inside the input
            placeholderTextColor="#ccc" // Light gray color for the placeholder text
          />

          {/* "Order Now" button */}
          <TouchableOpacity style={styles.button}>
            {' '}
            {/* Touchable for button functionality */}
            <Text style={styles.buttonText}>Order Now</Text> {/* Button text */}
          </TouchableOpacity>

          {/* "View Menu" button with a slightly different style */}
          <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
            <Text style={styles.buttonText}>View Menu</Text> {/* Button text */}
          </TouchableOpacity>
        </View>{' '}
        {/* Closing the overlay */}
      </ImageBackground>{' '}
      {/* Closing the ImageBackground */}
    </View> // Closing the main container
  )
}

// Creating a StyleSheet to manage the styles
const styles = StyleSheet.create({
  container: {
    flex: 1, // Fills the entire screen space
    backgroundColor: 'black', // Fallback color if the image doesn't load
  },
  image: {
    flex: 1, // Makes the image fill the screen vertically
    justifyContent: 'center', // Vertically centers child elements
    alignItems: 'center', // Horizontally centers child elements
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black background for contrast
    padding: 20, // Padding inside the overlay for spacing
    borderRadius: 15, // Rounded corners
    gap: 15, // Space between child components
  },
  title: {
    color: 'white', // White color for the title text
    fontSize: 28, // Large font size for the title
    fontWeight: 'bold', // Bold font style
    textAlign: 'center', // Center-aligned text
  },
  searchBar: {
    backgroundColor: 'white', // White background for the input field
    width: 250, // Fixed width of the input field
    padding: 10, // Inner padding for spacing
    borderRadius: 8, // Rounded corners for the input
    fontSize: 16, // Font size for the input text
    textAlign: 'center', // Center-align the text inside the input
  },
  button: {
    backgroundColor: '#D2691E', // Coffee-like brown color for the button
    paddingVertical: 12, // Vertical padding inside the button
    paddingHorizontal: 25, // Horizontal padding inside the button
    borderRadius: 8, // Rounded corners for the button
  },
  secondaryButton: {
    backgroundColor: '#8B4513', // Darker shade of brown for the secondary button
  },
  buttonText: {
    color: 'white', // White text color for buttons
    fontWeight: 'bold', // Bold font style for button text
    fontSize: 16, // Font size for button text
    textAlign: 'center', // Center-aligned text inside the button
  },
})

// Exporting the Explore component as the default export
export default Explore
