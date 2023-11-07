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
import { Task, Tarefa } from "../../components/Task";
import { useState } from "react";

export function Home() {
  const [tasks, setTasks] = useState<Tarefa[]>([]);
  const [taskName, setTaskName] = useState<string>("");
  const [taskCreated, setTaskCreated] = useState(0);
  const [taskConcluded, setTaskConcluded] = useState(0);

  function handleTaskAdd() {
    if (taskName === "") {
      return Alert.alert("Task vazia", "Insira um nome para a task.");
    }
    // Verifique se já existe uma tarefa com o mesmo nome
    const taskExists = tasks.some((task) => task.name === taskName);
    if (taskExists) {
      return Alert.alert("Task já existe", "Já existe uma task com esse nome.");
    }
    const novaTarefa: Tarefa = {
      name: taskName,
      concluded: false,
    };
    setTasks((prevState) => [...prevState, novaTarefa]);
    setTaskName("");

    setTaskCreated(taskCreated + 1);
  }

  function handleTaskRemove(name: string): void {
    Alert.alert("Remover", `Remover a tarefa ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks((prevState) => {
            const newTasks = prevState.filter((task) => task.name !== name);
            const removedTask = prevState.find((task) => task.name === name);

            if (removedTask) {
              if (removedTask.concluded) {
                setTaskCreated((prevCreated) => prevCreated - 1);
                setTaskConcluded((prevConcluded) => prevConcluded - 1);
              } else {
                setTaskCreated((prevCreated) => prevCreated - 1);
              }
            }

            return newTasks;
          });
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleTaskConcluded(name: string): void {
    setTasks((prevState) => {
      return prevState.map((task) => {
        if (task.name === name) {
          return { ...task, concluded: !task.concluded };
        }
        return task;
      });
    });

    setTaskConcluded(taskConcluded + 1);
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Task
            key={item.name}
            name={item.name}
            concluded={item.concluded}
            onRemove={() => handleTaskRemove(item.name)}
            onChangeStatus={() => handleTaskConcluded(item.name)}
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
