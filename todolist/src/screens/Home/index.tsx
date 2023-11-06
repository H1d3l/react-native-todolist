import { TextInput, TouchableOpacity, View, Image, Text } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.addAreaTask}>
        <TextInput
          style={styles.inputTextTask}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.buttonAddTask}>
          <Image source={require("../../../assets/images/plus.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>Criadas</Text>
          <Text style={styles.infoNumber}>0</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>Concluidas</Text>
          <Text style={styles.infoNumber}>0</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.emptyTask}>
        <Image source={require("../../../assets/images/clipboard.png")} />
        <View>
          <Text style={styles.emptyTaskMessageText}>Você ainda não tem tarefas cadastradas</Text>
          <Text style={styles.emptyTaskMessageText}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
      </View>
    </View>
  );
}
