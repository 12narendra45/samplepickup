import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Button, 
} from 'react-native';
import { mockPickups } from '../assets/data';
import PickupCard from '../components/PickupCard';

export default function HomeScreen({ navigation }) {
  const [pickups, setPickups] = useState(mockPickups);

  const toggleCollected = (id) => {
    setPickups(prev =>
      prev.map(p => p.id === id ? { ...p, collected: !p.collected } : p)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Today's Pickups</Text>

      <FlatList
        data={pickups}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PickupCard
            item={item}
            onToggle={toggleCollected}
            onPress={() => navigation.navigate('PickupDetails', { item })}
          />
        )}
      />

      {/* ✅ Add Route Map Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="View Route Map"
          onPress={() => navigation.navigate('RouteMap')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
});
