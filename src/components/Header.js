import {Pressable, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";
import {AntDesign} from '@expo/vector-icons';
import randomId from "../functions/randomId/randomId";

export default ({addTask}) => {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                value={text}
                style={styles.inp}
                cursorColor={'blue'}
                selectionColor={'blue'}
                placeholder={'To do...'}
                onChangeText={text => setText(text)}
                onSubmitEditing={({nativeEvent: {text}}) => {
                    setText(text)
                    text.length >= 3 && addTask(randomId(), text, false)
                }}/>
            <Pressable
                style={styles.btnBox}
                onPress={() => text.length >= 3 && addTask(randomId(), text, false)}>
                <AntDesign name="pluscircleo" size={24} color="black"/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        backgroundColor: 'rgba(0,0,0,0.10)',
        borderRadius: 20,
        flexDirection: "row"
    },
    inp: {
        flex: 1,
        marginLeft: 5
    },
    btnBox: {
        padding: 3,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: "center",
    }
})
