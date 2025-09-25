# CMS Authorization Management

This document explains how to manage authorized users for the BINHI CMS system.

## Current Authorized Users

The CMS is restricted to specific WVSU email addresses. Currently authorized users:

- `spark.hub@wvsu.edu.ph` - BINHI Core Team
- `binhi.incubator@wvsu.edu.ph` - BINHI Incubator
- `admin@wvsu.edu.ph` - System Administrator

## Adding New Users

To authorize a new user for CMS access:

1. Open `src/config/cms-authorization.js`
2. Add the new email address to the `AUTHORIZED_CMS_USERS` array
3. Ensure the email ends with `@wvsu.edu.ph`
4. Save the file
5. Restart the application

Example:
```javascript
export const AUTHORIZED_CMS_USERS = [
    'spark.hub@wvsu.edu.ph',
    'binhi.incubator@wvsu.edu.ph',
    'admin@wvsu.edu.ph',
    'new.user@wvsu.edu.ph',  // ← Add new email here
];
```

## Removing Users

To remove a user's CMS access:

1. Open `src/config/cms-authorization.js`
2. Remove or comment out their email address
3. Save the file
4. Restart the application

## Security Features

✅ **WVSU Domain Restriction**: All emails must end with `@wvsu.edu.ph`
✅ **Whitelist-based Access**: Only specifically listed emails can access the CMS
✅ **Case-insensitive Matching**: Email comparison is case-insensitive
✅ **Secure Sign-in**: Uses Google OAuth with NextAuth.js
✅ **Session-based Authorization**: Permissions checked on every request

## Error Messages

- **Access Denied**: User tried to sign in with unauthorized email
- **Unauthorized**: User somehow accessed CMS without proper permissions

## Testing Authorization

1. Try signing in with an unauthorized WVSU email - should see "Access Denied"
2. Try signing in with authorized email - should access CMS dashboard
3. Try signing in with non-WVSU email - should see "Access Denied"