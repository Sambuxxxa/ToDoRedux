import {connect} from "react-redux";
import {FlatList, StyleSheet, View} from "react-native";
import {addTask, changeCompleted, removeTask} from "../../storage/actions/tasksAction";
import Task from "../../components/Task";
import Header from "../../components/Header";

const ListToDo = ({tasks, addTask, removeTask, changeCompleted}) => {
    return (
        <View style={styles.container}>
            <Header addTask={addTask} />
            <FlatList
                data={tasks}
                style={styles.container}
                renderItem={({item}) => <Task changeCompleted={changeCompleted} removeTask={removeTask} task={item} />}/>
        </View>
    )
}
export default connect(({tasks}) => ({tasks}), {addTask, removeTask, changeCompleted})(ListToDo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
})
