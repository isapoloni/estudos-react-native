import { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard, FlatList, Alert } from "react-native"
import { styles } from './styles'
import colors from "../styles/colors";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Card } from "./Card";

export function Home() {
    const [isFocused, setIsFocused] = useState(false);
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTasks] = useState('')
    const [completedTasks, setCompletedTasks] = useState<number>(0);

    function handleAddTask() {
        if (newTask.trim() === '') return; // Não permite adicionar tarefas vazias
        setTasks(prevState => [...prevState, newTask]);
        setNewTasks('');
    }

    function handleTaskRemove(newTask: string) {
        Alert.alert("Remover", `Remover a task ${newTask}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setTasks((prevState: any[]) => prevState.filter(task => task !== newTask));
                    Alert.alert("Deletado! a task foi removida da lista.");
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    function handleTaskToggle(checked: boolean) {
        if (checked) {
            setCompletedTasks(prevState => prevState + 1); 
        } else {
            setCompletedTasks(prevState => prevState - 1); 
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={require('../../assets/Logo.png')}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor={colors["gray-300"]}
                        style={[styles.input, isFocused && styles.inputFocused]}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChangeText={setNewTasks}
                        value={newTask}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                        <AntDesign
                            name="pluscircleo"
                            size={16}
                            color={colors["gray-100"]}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.rest}>
                    <View style={styles.containerAllTaks}>
                        <View style={styles.tasks}>
                            <Text style={styles.tasksCriadasText}>
                                Criadas
                            </Text>
                            <Text style={styles.counterNumber}>
                                {tasks.length}
                            </Text>
                        </View>
                        <View style={styles.tasks}>
                            <Text style={styles.tasksConcluidasText}>
                                Concluídas
                            </Text>
                            <Text style={styles.counterNumber}>
                                {completedTasks}
                            </Text>
                        </View>
                    </View>
                    <FlatList
                        contentContainerStyle={{ flex: 0, }}
                        data={tasks}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <Card
                                task={item}
                                onRemove={() => handleTaskRemove(item)}
                                onToggle={handleTaskToggle}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <View style={styles.containerNoTaks}>
                                <View style={styles.divisor} />
                                <Image
                                    source={require('../../assets/Clipboard.png')}
                                    style={styles.sizeLogo}
                                />
                                <Text style={styles.noTaksTextBold}>Você ainda não tem tarefas cadastradas</Text>
                                <Text style={styles.noTaksTextRegular}>Crie tarefas e organize seus itens a fazer</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
