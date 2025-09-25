// CMS Authorization Configuration
// 
// This file contains the list of authorized WVSU email addresses
// that can access the BINHI Content Management System.
//
// To add new users:
// 1. Add their WVSU email address to the AUTHORIZED_CMS_USERS array
// 2. Ensure the email ends with '@wvsu.edu.ph'
// 3. Save the file and restart the application
//
// To remove users:
// 1. Remove their email address from the array
// 2. Save the file and restart the application

export const AUTHORIZED_CMS_USERS = [
    // BINHI Core Team
    'spark.hub@wvsu.edu.ph',
    'binhi.incubator@wvsu.edu.ph',
    
    // Administrators
    'admin@wvsu.edu.ph',
    
    // Add more authorized emails below:
    // 'editor@wvsu.edu.ph',
    // 'content.manager@wvsu.edu.ph',
    // 'communications@wvsu.edu.ph',
];

// Helper function to check if an email is authorized
export function isAuthorizedEmail(email) {
    return email && 
           email.endsWith('@wvsu.edu.ph') && 
           AUTHORIZED_CMS_USERS.includes(email.toLowerCase());
}

// Helper function to get all authorized emails (for admin reference)
export function getAllAuthorizedEmails() {
    return [...AUTHORIZED_CMS_USERS];
}