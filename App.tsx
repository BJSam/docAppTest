import React from 'react';
import {
  SafeAreaView, View,
} from 'react-native';
import home from './screens/home';



const App = () => {


  return (
    <View>
      {home()}
    </View>
  );
};



export default App;
