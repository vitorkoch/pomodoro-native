import React, { useState, useEffect } from 'react';
// Components
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// Assets
import GearSvg from '../../assets/gear-solid.svg';

// Styles
import styles from './styles';
import colors from '../../styles/colors';

const Timer: React.FC = ({ navigation }: any) => {
  const [remainTime, setRemainTime] = useState()

  useEffect(() => {
    setInterval(() => {
      console.log('hello')
    }, setRemainTime())
  }, [])

  return (
    <LinearGradient
      colors={[colors.primary, colors.quaternary]}
      style={styles.gradient}
    >
      <TouchableOpacity
        style={styles.configBtn}
        onPress={() => navigation.navigate('Configuration')}
      >
        <GearSvg fill={colors.quaternary} />
      </TouchableOpacity>

    <Text>{remainTime}</Text>

    </LinearGradient>
  );
};
export default Timer;
