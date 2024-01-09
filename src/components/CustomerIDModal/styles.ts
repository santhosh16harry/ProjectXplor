import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  innerContainer: {
    width: '90%',
    height: '20%',
    marginTop: '80%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 20,
    padding: '5%',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    marginTop: '4%',
    backgroundColor: '#E7E7E7',
    height: '28%',
    paddingHorizontal: '4%',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '7%',
    height: '25%',
  },
  button: {
    width: '48%',
    height: '100%',
    backgroundColor: '#01A3FF',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttontext: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
});

export default styles;
