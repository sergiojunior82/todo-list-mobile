import { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Control, Empty } from "../../components/PanelTask";
import { Task } from "../../components/Task";
import { styles } from "./styles";
//import PlusIcon from '../../../assets/image/plus.svg';

export interface Task {
  id: number;
  description: string;
  finished: boolean;
}

export function Home() {

  const [tasks, setTasks] = useState<Task[]>([]);

  //const [id, setId] = useState(0);
  const [description, setDescription] = useState('');
  const [finished, setFinished] = useState(false);
  const [id, setId] = useState(0);

  function handleTaskAdd() {
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      description: description,
      finished: finished
    }

    setTasks([...tasks, newTask]);
    setDescription('');
    setFinished(false);
    setId(0);
  }

  function handleTaskRemove(taskToRemove: Task) {
    Alert.alert("Remover", "Deseja remover a tarefa?", [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task.id !== taskToRemove.id))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleFinishTask(taskToFinish: Task) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskToFinish.id) {
        if(task.finished === false) {
          return { ...task, finished: true };
        } else {
          return { ...task, finished: false };
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <View style={styles.container}>
      <Image 
        style={styles.image} 
        source={require("../../../assets/image/logo.png")} 
        resizeMode='contain'
        />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
          onChangeText={setDescription}
          value={description}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Image 
            source={require("../../../assets/image/plus.png")} 
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
      <Control 
        totalTasks={tasks.length}
        finishedTasks={tasks.filter(task => task.finished).length}
      />
      
      <FlatList 
        style={styles.flatList}
        data={tasks}
        keyExtractor={item => item.description}
        renderItem={({item}) => (
          <Task
            key={item.id}
            id={item.id}
            description={item.description}
            finished={item.finished}
            onRemove={() => handleTaskRemove(item)}
            onFinish={() => handleFinishTask(item)}
            />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
        ListEmptyComponent={() => (
          <Empty />
        )}    
      />
    </View>
  )
}