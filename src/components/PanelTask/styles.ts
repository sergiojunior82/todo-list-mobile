import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignItems: 'center',
    
  },
  tasksControl: {
    width: '90%',
    flexDirection: 'row',
    marginTop: 32,
    marginBottom: 22,
    justifyContent: 'space-between',
    
  },
  tasksCountPanel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createdTasksText: {
    color: '#4EA8DE',
    fontSize: 14,
    fontStyle: 'normal',
    
  },
  taskPanelText: {
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
    marginLeft: 8,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 999,
    
  },
  cratedCount: {
    fontSize: 12,
    color: '#D9D9D9',
  },
  finishedTasksText: {
    color: '#8284FA',
    fontSize: 14,
    fontStyle: 'normal',
  },
  tasks: {
    flex: 1,
    width: '100%',
    height: 208,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#808080',
  },
  image: {
    marginBottom: 16,
    width: 56,
    height: 56,
  },
  text: {
    fontSize: 16,
    color: '#808080'
  }
})