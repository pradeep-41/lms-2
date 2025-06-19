import React, { useState } from 'react'
import { View, Text, Platform } from 'react-native'

const DateInput = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChangeDate  = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === "ios");
       
    }

  return (
    <View>
      <Text>DateInput</Text>
    </View>
  )
}

export default DateInput