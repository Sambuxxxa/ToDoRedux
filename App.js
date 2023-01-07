import {SafeAreaView, StyleSheet} from 'react-native';
import ListToDo from "./src/screens/ListToDo/ListToDo";
import {Provider} from 'react-redux'
import {store} from "./src/storage/reducers";

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <ListToDo/>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
