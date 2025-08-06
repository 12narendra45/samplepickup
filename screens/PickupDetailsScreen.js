import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SampleStageTracker from '../components/SampleStageTracker';
import IssueReportModal from '../components/IssueReport';

export default function PickupDetailsScreen({ route }) {
  const { item } = route.params;
  const [stage, setStage] = useState(item.stage);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.patientName}</Text>
      <Text>{item.location}</Text>
      <Text>Time: {item.time}</Text>

      <SampleStageTracker stage={stage} />

      <View style={styles.buttonGroup}>
        {stage < 2 && (
          <Button title="Next Stage" onPress={() => setStage(stage + 1)} />
        )}
        <Button title="Report Issue" onPress={() => setModalVisible(true)} />
      </View>

      <IssueReportModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={(text) => {
          console.log('Issue submitted:', text);
          setModalVisible(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  buttonGroup: { marginTop: 20, gap: 10 },
});
