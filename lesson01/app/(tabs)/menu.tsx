import coffeeData from '@/constants/Coffee' // Importing the coffee data array
import { Colors } from '@/constants/Colors' // Importing theme colors
import React from 'react'
import {
  Appearance,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native'

// Functional Component for the Coffee Menu Page
const Menu: React.FC = () => {
  // Detects if the device is in dark mode or light mode
  const Colorscheme = Appearance.getColorScheme()
  const Theme = Colorscheme === 'dark' ? Colors.dark : Colors.light

  // Uses ScrollView for web and SafeAreaView for mobile (to avoid notches)
  const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView

  return (
    <Container
      style={[styles.container, { backgroundColor: Theme.background }]}
    >
      {/* FlatList efficiently renders a list of coffee items */}
      <FlatList
        data={coffeeData} // Data source for the list
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Coffee Image */}
            <Image source={{ uri: item.image }} style={styles.image} />

            {/* Text container */}
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()} // Converts ID to string for key
        ItemSeparatorComponent={() => <View style={styles.separator} />} // Adds spacing between items
        ListHeaderComponent={() => (
          <Text style={styles.header}>Our Coffee Menu</Text>
        )} // Adds a header
        ListFooterComponent={() => (
          <Text style={styles.footer}>Enjoy your coffee! ☕</Text>
        )} // Adds a footer
        contentContainerStyle={styles.listContainer} // Additional styling for FlatList
      />
    </Container>
  )
}

// Styling for the Coffee Menu Page
const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container fill the entire screen
    paddingHorizontal: 16, // Adds some padding on the sides
    paddingTop: 20, // Adds top padding
  },
  listContainer: {
    paddingBottom: 20, // Ensures enough space at the bottom
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'brown',
  },
  footer: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
  card: {
    backgroundColor: 'white', // Card background
    borderRadius: 10, // Rounded corners
    overflow: 'hidden', // Ensures image stays within the border
    elevation: 5, // Shadow effect for Android
    shadowColor: '#000', // Shadow effect for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    height: 200, // Fixed height for images
  },
  textContainer: {
    padding: 15, // Space inside the card
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  separator: {
    height: 10, // Space between items
  },
})

export default Menu // Exporting the component
