import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  confirmationIcon: {
    flex: 2,
    marginRight: '5%',
  },
  titleContainer: {
    flex: 1,
    margin: '1%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  customerCard: {
    flex: 5,
    marginHorizontal: '5%',
    marginBottom: '25%',
  },
  bottomContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    height: '10%',
    width: '100%',
    backgroundColor: 'white',
  },
  button: {
    flex: 1,
    marginVertical: '3.5%',
    marginHorizontal: '6%',
    backgroundColor: '#01A3FF',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default styles;
