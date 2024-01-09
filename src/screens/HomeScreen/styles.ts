import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderView: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    height: '7%',
    justifyContent: 'center',
    paddingLeft: '5%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
    padding: '5%',
    paddingTop: 0,
    paddingBottom: '7%',
  },
  bottomContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    height: '7%',
    width: '100%',
    backgroundColor: '#01A3FF',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  headerButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    marginBottom: 5,
  },
});

export default styles;
