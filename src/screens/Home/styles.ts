import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1E1E1E',
    flex: 1,
    alignItems: 'center', 
  
  },
  image: {
    width: 110,
    height: 32,
    marginTop: 70,
  },
  form: {
    width: '90%',
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 54,
    marginRight: 4,
    borderRadius: 6,
    backgroundColor: '#0D0D0D',
    color: '#F2F2F2',
    padding: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1E6F9F',
    width: 54,
    height: 54,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    width: '100%',
  }
})
