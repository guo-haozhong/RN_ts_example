import React from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
export default function App() {
    return (
        <View>
            <Text>hello</Text>
            <Button title={'点我'}
                onPress={() => {
                   console.log('点我');
                }}></Button>
        </View>
    )
}
