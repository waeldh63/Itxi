// in this file we call all api methods in this backend

import {CompanyId} from '../data/CompanyIdData';

// in this function we call all api method in this backend to check if the company id is valid or exist in the database
export const checkValidCompanyId = companyId => {
  try {
    // Check if any object in the CompanyId array has the given companyId
    const isValid = CompanyId.some(company => company.companyId === companyId);

    return isValid; // returns true if found, false otherwise
  } catch (error) {
    console.error(
      'file CompanyIdServices: Error checking companyId in checkValidCompanyId function :',
      error,
    );

    return false; // return false in case of any error
  }
};

export const addCompanyId = company => {
  try {
    // Check if the company with the given companyId already exists
    const isValid = CompanyId.some(
      existingCompany => existingCompany.companyId === company,
    );

    if (!isValid) {
      const newCompany = {
        ...company,
        companyId: company,
        companyName: 'company name testing',
        companyLocation: 'company location testing',
      };
      CompanyId.push(newCompany);
      return true;
    } else {
      console.log('Company already exists');
      return false;
    }
  } catch (error) {
    console.error('Error adding company in addCompanyId function:', error);
    return false;
  }
};
