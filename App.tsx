import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import { useFonts } from 'expo-font';


export default function App() {

  /* let [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    // Adicione mais fontes conforme necessário
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } */

  return (
    <>
      <StatusBar 
        barStyle='light-content'
        translucent
      />
      <Home />
    </>
  );
}
