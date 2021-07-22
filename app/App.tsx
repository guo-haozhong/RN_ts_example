import React from 'react'
import {
    View,
    Text,
    Button,
    Alert
} from 'react-native'
export default function App() {
    return (
        <View>
            <Text>hello</Text>
            <Button title={'点我'}
                onPress={() => {
                  Alert.alert("温馨提示","点我button")
                }}></Button>
        </View>
    )
}
