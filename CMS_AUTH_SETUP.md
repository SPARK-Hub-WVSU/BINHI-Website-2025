# CMS Authentication Configuration

## How to Configure Authorized CMS Users

The BINHI CMS authentication system is now set up with the following security features:

### 1. **Basic Authentication Requirements**
- Only users with `@wvsu.edu.ph` email addresses can sign in
- Additional authorization layer for CMS access

### 2. **Adding Authorized Users**

To grant CMS access to specific users, edit the `AUTHORIZED_CMS_USERS` array in `src/auth.js`:

```javascript
const AUTHORIZED_CMS_USERS = [
    'admin@wvsu.edu.ph',        // Main administrator
    'editor@wvsu.edu.ph',       // Content editor
    'john.doe@wvsu.edu.ph',     // Specific user
    // Add more authorized emails here
];
```

### 3. **Authorization Levels**

**Option A: Open Access (Current Default)**
- Leave `AUTHORIZED_CMS_USERS` array empty `[]`
- Any `@wvsu.edu.ph` email can access CMS

**Option B: Restricted Access**
- Add specific emails to `AUTHORIZED_CMS_USERS` array
- Only listed emails can access CMS

### 4. **How Authentication Works**

1. **Sign-In Process:**
   - User visits `/cms` and gets redirected to `/cms/sign-in`
   - Clicks "Sign in with WVSU Google Account"
   - Google OAuth verifies the account
   - NextAuth checks if email ends with `@wvsu.edu.ph`

2. **Authorization Check:**
   - System checks if user has `hasCMSAccess` permission
   - Based on `AUTHORIZED_CMS_USERS` configuration
   - Unauthorized users see "Access Denied" page

3. **Session Management:**
   - Authenticated users get a session with CMS access flag
   - Middleware protects all `/cms/*` routes
   - Users can sign out from the CMS header

### 5. **Protected Routes**

- `/cms` - Main dashboard (requires auth)
- `/cms/news` - News management (requires auth) 
- `/cms/news/new` - Create article (requires auth)
- `/cms/news/[id]/edit` - Edit article (requires auth)
- `/cms/sign-in` - Sign-in page (public)
- `/cms/unauthorized` - Access denied page (public)

### 6. **User Interface Features**

- **CMS Header:** Shows user info, navigation, and logout
- **Professional Sign-in:** Clean Google OAuth integration
- **Security Notices:** Clear messaging about access requirements
- **Dashboard:** Welcome page with quick actions and stats
- **Error Handling:** Proper error messages for auth failures

### 7. **Customization**

You can modify the authorization logic in `src/auth.js` to add:
- Role-based permissions
- Department-based access
- Time-based restrictions
- IP-based restrictions

### 8. **Testing**

To test the authentication:
1. Visit `/cms` while not signed in → redirects to sign-in
2. Sign in with non-WVSU email → access denied  
3. Sign in with WVSU email not in authorized list → access denied
4. Sign in with authorized WVSU email → access granted