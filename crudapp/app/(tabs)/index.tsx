import tasks from '@/constants/TasksArray'
import { useState } from 'react'
import { Image, StyleSheet, Platform, View } from 'react-native'

export default function HomeScreen() {
  const [Task, SetTasks] = useState(tasks.sort((a, b) => b.id - a.id))
  const [Text, SetText] = useState('')
  const AddTask = () => {
    const NewId = Task.length > 1 ? Task.length + 1 : 1
    SetTasks([{ id: NewId, description: Text, completed: false }, ...Task])
    SetText('')
  }
  const UpdateTask = (id: number) => {
    SetTasks(
      tasks.map((element) =>
        element.id === id ? { ...element, completed: true } : element
      )
    )
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
