import React from 'react';
import { SafeAreaView } from 'react-native';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

export default function App() {
    return (
      
            <SafeAreaView style={{flex:1}}>
                <Provider store={store}>
                    <Main />
                </Provider>
            </SafeAreaView>

        
        
    );
}