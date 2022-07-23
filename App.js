import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScheduleConfiguration from './screens/ScheduleConfiguration';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hola</Text>
      <StatusBar style="auto" />
      <ScheduleConfiguration />
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
