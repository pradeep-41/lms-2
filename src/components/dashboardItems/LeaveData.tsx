import React from 'react';
import { Text } from '../typography/Text';
import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type LeaveProps = {
  title: string;
  data?: {name: string, id: string}[];
  emptyMessage?: string;
  onPress?: () => void;
  showActionIcon?: boolean;
};

export const LeaveData = ({ 
  title, 
  data = [], 
  emptyMessage = "No leave records",
  onPress,
  showActionIcon = false
}: LeaveProps) => {
  return (
    <TouchableOpacity 
    className='w-full'
      activeOpacity={0.9} 
      onPress={onPress}
      disabled={!onPress}
    >
      <View className=" border border-gray-200 rounded-lg my-2 p-4 bg-white shadow-xs w-full">
        <View className="flex-row justify-between items-center mb-3 ">
          <Text className="font-semibold text-gray-800 text-base">
            {title}
          </Text>
          {showActionIcon && (
            <MaterialIcons name="chevron-right" size={20} color="#9CA3AF" />
          )}
        </View>
        
        {data.length > 0 ? (
          <View className="flex-row flex-wrap">
            {data.map((person) => (
              <View 
                key={person.id} 
                className="bg-blue-50 rounded-full px-3 py-1.5 mr-2 mb-2 border border-blue-100"
              >
                <Text className="text-blue-700 text-sm">
                  {person.name}
                </Text>
              </View>
            ))}
          </View>
        ) : (
          <View className="bg-gray-50 rounded-md p-3 border border-gray-100 ">
            <Text className="text-gray-500 text-sm text-center">
              {emptyMessage}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};