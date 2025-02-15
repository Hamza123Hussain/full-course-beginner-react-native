import tasks from '@/constants/TasksArray'
import { useState } from 'react'
import { Image, StyleSheet, Platform, View } from 'react-native'

export default function HomeScreen() {
  const [Tasks, setTasks] = useState(tasks.sort((a, b) => b.id - a.id))
  const [text, setText] = useState('')
  const AddTask = () => {
    // Generate a new ID based on array length (better: use Date.now() to avoid duplicate IDs)
    const newId = tasks.length > 0 ? tasks.length + 1 : 1

    // Add a new task to the beginning of the list (spread existing tasks)
    setTasks([{ id: newId, description: text, completed: false }, ...tasks])

    // Clear input field after adding a task
    setText('')
  }

  const UpdateTask = (id: number) => {
    // Update the task by mapping through the array and changing only the matching task
    setTasks(
      tasks.map((element) =>
        element.id === id ? { ...element, completed: true } : element
      )
    )
  }

  const DeleteTask = (id: number) => {
    // Remove the task by filtering out the task with the matching ID
    setTasks(tasks.filter((element) => element.id !== id))
  }

  return <View></View>
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
})
