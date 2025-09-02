import { Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Human } from '../../components/Human/Human';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Human firstName="pierre" name="DEFAUQUET" age={28} />
        <Image style={{height: 200, width: 200}} source={{uri : "https://www.assuropoil.fr/wp-content/uploads/berger-australien.jpg"}} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
