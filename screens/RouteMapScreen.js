// RouteMapScreen.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const mockPickupLocations = [
  {
    id: 1,
    name: 'Clinic A',
    latitude: 28.6139,
    longitude: 77.2090,
  },
  {
    id: 2,
    name: 'Home Visit - Patient B',
    latitude: 28.6200,
    longitude: 77.2300,
  },
  {
    id: 3,
    name: 'Hospital C',
    latitude: 28.6000,
    longitude: 77.2000,
  },
];

const RouteMapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 28.6139,
          longitude: 77.2090,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {mockPickupLocations.map((loc) => (
          <Marker
            key={loc.id}
            coordinate={{
              latitude: loc.latitude,
              longitude: loc.longitude,
            }}
            title={loc.name}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default RouteMapScreen;
