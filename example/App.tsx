import { StyleSheet, Text, View } from 'react-native';

import * as ExpoNostrPool from 'expo-nostr-pool';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoNostrPool.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
