// in this file we call all api methods in this backend

import { CompanyId } from "../data/CompanyIdData";



// in this function we call all api method in this backend to check if the company id is valid or exist in the database
export const checkValidCompanyId = (companyId) => {
try {
    // Check if any object in the CompanyId array has the given companyId
    const isValid = CompanyId.some(company => company.companyId === companyId);
    
    return isValid; // returns true if found, false otherwise
} catch (error) {
    console.error("file CompanyIdServices: Error checking companyId in checkValidCompanyId function :", error);
    
    return false; // return false in case of any error
}


};