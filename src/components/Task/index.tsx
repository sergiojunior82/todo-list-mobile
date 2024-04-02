import { Image, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  id: number;
  description: string;
  finished: boolean;
  onRemove: () => void;
  onFinish: () => void;
}

export function Task( { id, description, finished, onRemove, onFinish}: Props ) {
  return (
    <View style={styles.container}>
      <View style={styles.task}>
        <TouchableOpacity onPress={onFinish}>
          <Image 
            style={styles.imageTask}
            source={require('../../../assets/image/check.png')}
            resizeMode='contain'
          />
        </TouchableOpacity>
        <Text style={finished ? styles.textTaskFinished : styles.textTask}>{description}</Text>
        <TouchableOpacity onPress={onRemove}>
          <Image 
            style={styles.imageTrash}
            source={require('../../../assets/image/trash.png')}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}