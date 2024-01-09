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
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    marginBottom: '10%',
  },
  detailInputContainer: {
    marginHorizontal: '5%',
    paddingHorizontal: '2%',
    marginBottom: '2%',
  },
  detailInputTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: '2%',
  },
  textInput: {
    backgroundColor: '#E7E7E7',
    paddingHorizontal: '2%',
    marginBottom: '2%',
    borderColor: 'red',
  },
  errorText: {
    fontSize: 15,
    fontWeight: '400',
    color: 'red',
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
  headerButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    marginBottom: 5,
  },
});

export default styles;
