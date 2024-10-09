import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
      }}>
      <Tabs.Screen
        name="cheese"
        options={{
          title: 'Cheese',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'woman-sharp' : 'woman-sharp'} color={color} />
          ),
        }}
      />
     
    </Tabs>
  );
}
