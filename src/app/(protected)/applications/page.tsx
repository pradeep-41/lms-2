import { View, Text } from 'react-native'
import React from 'react'
import { ApplicationsLists } from '../../../components/applicationsItems/ApplicationLists';

export default function page() {
  return (
    <View className='flex-1 justify-center bg-white'>
      <Text>application page</Text>
      <ApplicationsLists />
    </View>
  )
}