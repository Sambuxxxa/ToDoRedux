import {Pressable, StyleSheet, Text, View} from "react-native";
import Checkbox from 'expo-checkbox';
import {MaterialIcons} from '@expo/vector-icons';

export default ({task, removeTask, changeCompleted}) => {
    return (
        <View style={styles.container}>
            <Checkbox
                onValueChange={isCompleted => changeCompleted(task.id ,isCompleted)}
                value={task.isCompleted}/>
            <Text style={styles.text}>{task.task}</Text>
            <Pressable onPress={() => removeTask(task.id)}>
                <MaterialIcons name="delete-outline" size={24} color="black"/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 20,
        elevation: 10,
        backgroundColor: 'white',
        width: '80%',
        margin: 10,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        marginHorizontal: 10,
        fontSize: 18,
        flex: 1
    }
})
