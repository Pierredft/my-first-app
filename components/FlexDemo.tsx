import { View } from 'react-native';
import { s } from './FlexDemo.style.js';

export function FlexDemo() {
    return (
        <View style={s.container}>
            <View style={s.centeredSquare}></View>
        </View>
    );
}