import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center', // Centre verticalement
    alignItems: 'center',     // Centre horizontalement
    backgroundColor: "black"
  },
  centeredSquare: {
    height: 100,
    width: 100,
    backgroundColor: "red"
  }
});