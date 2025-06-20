import { View, Text } from 'react-native'
import React from 'react'
import HolidayList from '../../../components/holidays/HolidaysList';

export default function page() {
  return (
    <View>
      <Text>setting page</Text>
      <HolidayList />
    </View>
  )
}