import React from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';

export default function PickupCard({ item, onToggle, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{item.patientName}</Text>
      <Text>{item.location}</Text>
      <View style={styles.row}>
        <Text>Status: {item.collected ? 'Collected' : 'Pending'}</Text>
        <Switch value={item.collected} onValueChange={() => onToggle(item.id)} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 12,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
