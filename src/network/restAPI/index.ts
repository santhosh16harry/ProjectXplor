import {CustomerData} from './apiInterfaces';

const genericApiCall = async (
  endpoint: string,
  parameters: RequestInit = {},
) => {
  const baseURL = 'https://getinvoices.azurewebsites.net/api/';
  return await fetch(`${baseURL}${endpoint}`, parameters)
    .then(async response => {
      const status = response.status;
      const data =
        parameters.method === 'GET'
          ? await response
              .json()
              .then(jsonResponse => jsonResponse)
              .catch(error => {
                throw new Error(error);
              })
          : {};
      return {status, data};
    })
    .catch(error => {
      throw new Error(error);
    });
};

export const getCustomerList = async () => {
  try {
    const response = await genericApiCall('Customers', {
      method: 'GET',
    });
    return response.data;
  } catch (error) {
    console.log(`API ERROR: ${error}`);
    return [];
  }
};

export const createNewCustomer = async (customerData: CustomerData) => {
  try {
    const response = await genericApiCall('Customer', {
      method: 'POST',
      body: JSON.stringify(customerData),
    });
    return response.status;
  } catch (error) {
    console.log(`API ERROR: ${error}`);
    return '500';
  }
};

export const getCustomerById = async (id: string) => {
  try {
    console.log('----->52', id);
    const response = await genericApiCall(`Customer/${id}`, {
      method: 'GET',
    });
    console.log('----->50', response.data);
    return response.data;
  } catch (error) {
    console.log(`API ERROR: ${error}`);
    return {};
  }
};

export const updateExistingCustomer = async (
  customerUpdatedData: CustomerData,
) => {
  try {
    const response = await genericApiCall(
      `Customer/${customerUpdatedData.id}`,
      {
        method: 'POST',
        body: JSON.stringify(customerUpdatedData),
      },
    );
    return response.status;
  } catch (error) {
    console.log(`API ERROR: ${error}`);
    return '500';
  }
};

export const deleteExistingCustomer = async (id: string) => {
  try {
    const response = await genericApiCall(`Customer/${id}`, {
      method: 'DELETE',
    });
    return response.status;
  } catch (error) {
    console.log(`API ERROR: ${error}`);
    return '500';
  }
};
