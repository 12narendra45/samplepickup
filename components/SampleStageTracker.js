import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SampleStageTracker({ stage }) {
  const stages = ['Picked Up', 'In Transit', 'Delivered'];

  return (
    <View style={styles.container}>
      {stages.map((s, idx) => (
        <Text
          key={s}
          style={[
            styles.stage,
            stage >= idx ? styles.active : styles.inactive
          ]}
        >
          {s}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
  stage: { fontSize: 14 },
  active: { color: 'green', fontWeight: 'bold' },
  inactive: { color: '#ccc' },
});
