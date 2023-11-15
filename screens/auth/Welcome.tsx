import { Text, SafeAreaView, View, Image, Button } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../components/colors';
import { Subtitle } from '../../components/style';

const Welcome: React.FC = () => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={[Colors.pale_primary, Colors.primary]}>
      <SafeAreaView
        style={{
          flex: 1,
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: 5,
        }}
      >
        <View style={{ width: '100%', height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Image
            resizeMode="contain"
            source={require('../../assets/chat-vector.png')}
            style={{ height: '75%', flex: 1, width: '75%' }}
          />
        </View>
        <Text
          style={{
            color: Colors.secondary,
            fontSize: 60,
            fontWeight: '700',
            marginBottom: 10,
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          Get Started!
        </Text>
        <Text style={{ color: '#fff', fontSize: 16, width: '85%', marginLeft: 10, fontWeight: '600' }}>
          Connect with your fellow colleagues through chatting, Enjoy safe community-wide texting
        </Text>
        <View
          style={{
            backgroundColor: '#fff',
            width: '95%',
            marginLeft: 10,
            marginTop: 50,
            borderRadius: 4,
            paddingTop: 13,
            paddingBottom: 13,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: Colors.primary, fontSize: 18, fontWeight: '700' }}>Continue</Text>
        </View>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 17,
            width: '100%',
            position: 'absolute',
            bottom: 13,
            fontWeight: '500',
          }}
        >
          Don't have an account? <Text style={{ color: Colors.secondary }}>Register</Text>
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Welcome;
