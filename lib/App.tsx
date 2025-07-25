// App.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { supabase } from './lib/supabase';

export default function App() {
  const fetchServices = async () => {
    const { data, error } = await supabase.from('services').select('*');
    if (error) {
      alert('Error: ' + error.message);
    } else {
      console.log('Services:', data);
      alert(`Success! Loaded ${data.length} services.`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚀 ZippUp is Connected!</Text>
      <Button title="Test Supabase" onPress={fetchServices} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
