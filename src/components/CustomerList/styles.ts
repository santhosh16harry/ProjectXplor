import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowRadius: 25,
  },
  customerImage: {
    paddingVertical: '3%',
    borderBottomColor: 'black',
    borderBottomWidth: 0.3,
  },
  customerName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    padding: '2.5%',
  },
  titleTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '2%',
  },
  balanceTextContainer: {
    paddingTop: '1%',
  },
  balanceTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  balanceContent: {
    fontSize: 10,
    fontWeight: '200',
  },
  detailsContainer: {
    flexDirection: 'row',
    marginBottom: '2%',
  },
  detailsKey: {
    fontSize: 16,
    fontWeight: '600',
  },
  detailsValue: {
    fontSize: 16,
    fontWeight: '200',
  },
  detailsMessage: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: '5%',
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: '#BABABA',
    flexDirection: 'row',
    borderBottomStartRadius: 22,
    borderBottomEndRadius: 22,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
