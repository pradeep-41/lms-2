import { View } from 'react-native'
import React from 'react'
import HolidayList from '../../../components/holidays/HolidaysList';

export default function page() {
  return (
    <View className='flex-1'>
<HolidayList />
    </View>
  )
}