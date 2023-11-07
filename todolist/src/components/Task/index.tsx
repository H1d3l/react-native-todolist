import { Image, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export type Tarefa = {
  name: string;
  concluded: boolean;
  onChangeStatus?: () => void;
  onRemove?: () => void;
};

export function Task({ name, concluded, onChangeStatus, onRemove }: Tarefa) {
  return (
    <View style={styles.cardTask}>
      <TouchableOpacity style={styles.cicle} onPress={onChangeStatus}>
        <Image
          source={
            concluded
              ? require("../../../assets/images/cicle-on.png")
              : require("../../../assets/images/cicle-off.png")
          }
        />
      </TouchableOpacity>

      <Text
        style={concluded ? styles.cardTaskTextConcluded : styles.cardTaskText}
      >
        {name}
      </Text>
      <TouchableOpacity style={styles.trash} onPress={onRemove}>
        <Image source={require("../../../assets/images/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
