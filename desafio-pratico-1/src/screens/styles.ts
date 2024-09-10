import { StyleSheet } from "react-native";
import colors from "../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors['gray-700'],
    width: '100%'
  },
  header: {
    height: 200,
    backgroundColor: colors['gray-700'],
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    position: 'absolute',
    top: 170,
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 24,
    paddingRight: 24,
    zIndex: 1,
  },
  input: {
    backgroundColor: colors['gray-500'],
    height: 55,
    borderRadius: 6,
    padding: 16,
    flex: 1,
    marginRight: 8,
    color: colors['gray-100'],
    borderWidth: 1,
    borderColor: colors['gray-700'],
    fontSize: 16
  },
  inputFocused: {
    borderColor: colors['purple-dark'], 
  },
  button: {
    backgroundColor: colors['blue-dark'],
    width: 50,
    height: 55,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rest: {
    flex: 1,
    backgroundColor: colors['gray-600'],
    paddingHorizontal: 30,
    paddingVertical: 60,
    flexDirection: 'column', 
    alignItems: 'center',
    width: '100%'
  },
  containerAllTaks: {
    flexDirection: 'row',
    alignItems: 'center', 
    flexWrap: 'wrap',  
    justifyContent: 'space-between',
    width: '100%',
  },
  tasks: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  tasksCriadasText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors['blue'],
  },
  tasksConcluidasText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors['purple'],
  },
  counterNumber: {
    backgroundColor: colors['gray-400'],
    color: colors['gray-200'],
    fontSize: 14,
    fontWeight: 'bold',
    borderRadius: 10,
    marginLeft: 10,
    paddingVertical: 2,   
    paddingHorizontal: 8,
  },
  containerNoTaks: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  divisor: {
    height: 1,
    backgroundColor: colors['gray-400'],
    width: '100%',
    marginTop: 20,
    marginBottom: 30
  },
  sizeLogo: {
    height: 60,
    width: 60,
    marginBottom: 20
  },
  noTaksTextBold: {
    color: colors['gray-300'],
    fontSize: 14,
    marginTop: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  noTaksTextRegular: {
    color: colors['gray-300'],
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'regular'
  }
});
