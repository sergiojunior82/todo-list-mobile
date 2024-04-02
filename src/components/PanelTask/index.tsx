import { Image, Text, View } from "react-native";
import { styles } from "./styles";

interface ControlProps {
  totalTasks: number;
  finishedTasks: number;
}

export function Control({ totalTasks, finishedTasks}: ControlProps) {
  return (
    <View style={styles.tasksControl}>
      <View style={styles.tasksCountPanel}>
        <Text style={styles.createdTasksText}>Criadas</Text>
        <View style={styles.taskPanelText}>
          <Text style={styles.cratedCount}>{totalTasks}</Text>
        </View>
      </View>
      <View style={styles.tasksCountPanel}>
        <Text style={styles.finishedTasksText}>Concluídas</Text>
        <View style={styles.taskPanelText}>
          <Text style={styles.cratedCount}>{finishedTasks}</Text>
        </View>
      </View>
    </View>
  )
}

export function Empty() {
  return (
    <View style={styles.container}>
      <View style={styles.tasks}>
        <Image
          style={styles.image}
          source={require("../../../assets/image/table.png")}
          resizeMode="contain"
        />
        <Text style={styles.text}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}

