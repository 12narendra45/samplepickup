import React from 'react';
import { Modal, View, TextInput, Button, StyleSheet } from 'react-native';

export default function IssueReportModal({ visible, onClose, onSubmit }) {
  const [text, setText] = React.useState('');

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <TextInput
          placeholder="Describe the issue..."
          value={text}
          onChangeText={setText}
          style={styles.input}
        />
        <Button title="Submit" onPress={() => onSubmit(text)} />
        <Button title="Cancel" onPress={onClose} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 12,
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});
