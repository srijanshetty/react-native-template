import React from 'react';
import PropTypes from 'prop-types';

import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

type TabBarIconProps = {
  name: string;
  focused: boolean;
};
export default function TabBarIcon({ name, focused }: TabBarIconProps) {
  return (
    <Ionicons
      name={name}
      size={28}
      style={styles.icon}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  icon: {
    marginBottom: -3,
  },
});
