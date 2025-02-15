import tasksData from '@/constants/TasksArray' // Import the initial tasks data
import { useState } from 'react'
import {
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  // Initialize state with sorted tasks (descending order by ID for latest tasks first)
  const [Tasks, setTasks] = useState(tasksData.sort((a, b) => b.id - a.id))
  const [text, setText] = useState('') // State for handling the text input

  // Function to add a new task
  const AddTask = () => {
    if (text.trim() === '') return // Prevent adding empty tasks

    const newTask = {
      id: Date.now(), // Ensures unique ID using timestamp
      description: text, // The text input as the task description
      completed: false, // Default status is incomplete
    }

    setTasks([newTask, ...Tasks]) // Adds the new task at the top of the list
    setText('') // Clears the input field after adding
  }

  // Function to toggle a task's completion status
  const UpdateTask = (id: number) => {
    setTasks(
      Tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  // Function to delete a task
  const DeleteTask = (id: number) => {
    setTasks(Tasks.filter((task) => task.id !== id)) // Removes task by filtering it out
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Input field and Add Task button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter A Task Name"
          value={text}
          onChangeText={setText}
          placeholderTextColor={'gray'}
        />
        <Pressable style={styles.addButton} onPress={AddTask}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </Pressable>
      </View>

      {/* List of tasks */}
      <FlatList
        data={Tasks} // Use state variable for dynamic list rendering
        keyExtractor={(item) => item.id.toString()} // Convert ID to string to avoid key warning
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            {/* Task description with conditional styling if completed */}
            <Text style={[styles.taskText, item.completed && styles.completed]}>
              {item.description}
            </Text>

            {/* Task action buttons (Complete & Delete) */}
            <View style={styles.buttonContainer}>
              {/* Toggle completion status */}
              <Pressable
                style={[styles.button, styles.completeButton]}
                onPress={() => UpdateTask(item.id)}
              >
                <Text style={styles.buttonText}>
                  {item.completed ? 'Undo' : 'Complete'}
                </Text>
              </Pressable>

              {/* Delete task */}
              <Pressable
                style={[styles.button, styles.deleteButton]}
                onPress={() => DeleteTask(item.id)}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

// Styles for the UI components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa', // Light background
  },
  inputContainer: {
    flexDirection: 'row', // Arrange input and button in a row
    marginBottom: 16,
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1, // Takes most of the available space
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  taskContainer: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
    elevation: 2, // Adds a shadow for better UI on Android
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  completed: {
    textDecorationLine: 'line-through', // Strike-through effect for completed tasks
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 8,
  },
  button: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  completeButton: {
    backgroundColor: 'green', // Green for completed action
  },
  deleteButton: {
    backgroundColor: 'red', // Red for delete action
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})
