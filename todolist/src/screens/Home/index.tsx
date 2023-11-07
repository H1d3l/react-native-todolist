import {
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Text,
  Alert,
  FlatList,
} from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { Task } from "../../components/Task";
import { useState } from "react";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState<string>("");
  const [taskCreated, setTaskCreated] = useState(0);
  const [taskConcluded, setTaskConcluded] = useState(0);
  const [taskStatusConcluded, setTaskStatusConcluded] = useState(false);

  function handleTaskAdd() {
    if (taskName === "") {
      return Alert.alert("Task vazia", "Insira um nome para a task.");
    }
    if (tasks.includes(taskName)) {
      return Alert.alert("Task já existe", "Já existe uma task com esse nome.");
    }

    setTasks((prevState) => [...prevState, taskName]);
    setTaskName("");

    setTaskCreated(taskCreated + 1);
  }

  function handleTaskRemove(name: string): void {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((task) => task !== name)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleTaskConcluded(name: string): void{
    if (tasks.some(task => task === name)) {

      setTaskConcluded(taskConcluded+1)
      setTaskStatusConcluded(true);
    }

  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.addAreaTask}>
        <TextInput
          style={styles.inputTextTask}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity style={styles.buttonAddTask} onPress={handleTaskAdd}>
          <Image source={require("../../../assets/images/plus.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>Criadas</Text>
          <Text style={styles.infoNumber}>{taskCreated}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>Concluidas</Text>
          <Text style={styles.infoNumber}>{taskConcluded}</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task
            key={item}
            name={item}
            concluded={taskStatusConcluded}
            onRemove={() => handleTaskRemove(item)}
            onChangeStatus = {() => handleTaskConcluded(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyTask}>
            <Image source={require("../../../assets/images/clipboard.png")} />
            <View>
              <Text style={styles.emptyTaskMessageText}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyTaskMessageText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          </View>
        )}
      ></FlatList>
    </View>
  );
}
