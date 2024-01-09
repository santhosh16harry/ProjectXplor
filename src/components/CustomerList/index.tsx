import * as React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';

import MaleUser from './../../assets/svg/MaleUser';
import FemaleUser from './../../assets/svg/FemaleUser';
import {CustomerData} from '../../network/restAPI/apiInterfaces';

import styles from './styles';

interface Props {
  data: CustomerData;
  onEditPress?: () => void;
  onDeletePress?: () => void;
}

const CustomerList = ({data, onEditPress, onDeletePress}: Props) => {
  const height = Dimensions.get('screen').height;

  const renderDetails = (key: string, value: string) => (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsKey}>{key}</Text>
      <Text style={styles.detailsValue}>{value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.customerImage, {height: height * 0.15}]}>
        {data.gender === 'f' ? <FemaleUser /> : <MaleUser />}
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.customerName}>
            {`${data.salutation} ${data.initials} ${data.firstname} ${data.lastname}`}
          </Text>
          {onDeletePress && (
            <View style={styles.balanceTextContainer}>
              <Text style={styles.balanceTitle}>{'Balance'}</Text>
              <Text style={styles.balanceContent}>
                {`${data.currency} ${data.balance}`}
              </Text>
            </View>
          )}
        </View>
        {renderDetails('Email: ', data.email)}
        {renderDetails('Contact: ', data.phone_Number)}

        {!onEditPress && (
          <>
            {renderDetails('Country name: ', data.country_name)}
            {renderDetails('Language: ', data.primary_language)}
            {renderDetails('Balance: ', `${data.currency} ${data.balance}`)}
            <Text style={styles.detailsMessage}>
              {
                'Customer details added or updated have been sent to your respective Email ID. For further assistance drop a mail to\nxplorofficial@gmail.com'
              }
            </Text>
          </>
        )}
      </View>
      {onEditPress && (
        <View style={[styles.buttonContainer, {height: height * 0.04}]}>
          <TouchableOpacity
            style={[styles.button, {borderRightWidth: 0.25}]}
            onPress={onEditPress}>
            <Text style={styles.detailsKey}>{'Edit'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {borderLeftWidth: 0.25}]}
            onPress={onDeletePress}>
            <Text style={styles.detailsKey}>{'Delete'}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CustomerList;
