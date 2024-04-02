import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    width: "90%",
    borderRadius: 8,
    marginBottom: 8,
  },
  task: {
    flexDirection: 'row',
    width: "100%",
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 64,
  },
  imageTask: {
    width: 24,
    height: 24,
    marginRight: 8,
    marginLeft:12,
  },
  textTask: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 14,
  },
  textTaskFinished: {
    flex: 1,
    color: '#808080',
    textDecorationLine: 'line-through',
    fontSize: 14,
  },
  imageTrash: {
    width: 32,
    height: 32,
    marginRight: 16,
  }
})