  ##  This a resimator leave management system's mobile version   ##


src/
├── app/                         # App-level routes and layouts (Next.js / Expo Router style)
│   ├── (protected)/              # Protected routes for authenticated users
│   │   ├── admin/
│   │   │   ├── users/
│   │   │   │   ├── page.tsx      # Admin users management page
│   │   │   │   └── [id]/        
│   │   │   │       └── page.tsx  # Admin user detail view
│   │   │   ├── settings/
│   │   │   │   ├── page.tsx      # Admin settings main page
│   │   │   │   └── organizational/
│   │   │   │       └── page.tsx  # Org-level settings
│   │   │   └── policy/
│   │   │       └── page.tsx      # Admin policy management
│   │   └── user/
│   │       ├── dashboard/
│   │       │   └── page.tsx      # User dashboard
│   │       └── profile/
│   │           └── page.tsx      # User profile page
│   ├── applications/
│   │   └── page.tsx              # Shared applications page
│   ├── dashboard/
│   │   └── page.tsx              # Main dashboard (role-dependent)
│   ├── notice-board/
│   │   └── page.tsx              # Notice board for users
│   ├── office-holidays/
│   │   └── page.tsx              # Office holidays
│   ├── policy/
│   │   └── page.tsx              # General policy page
│   ├── _layout.tsx               # Main app layout
│   └── _auth.layout.tsx          # Layout for auth flows (login/signup)
│
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   ├── user-placeholder.png
│   │   └── ...
│   └── fonts/
│       ├── Inter-Regular.ttf
│       └── ...
│
├── components/
│   ├── auth/
│   │   ├── ProtectedRoute.tsx    # Auth guard
│   │   ├── RoleGuard.tsx         # Role-based guard
│   │   └── AuthProvider.tsx      # Auth context provider
│   ├── common/
│   │   ├── Button/
│   │   │   ├── Button.tsx        # Reusable button
│   │   │   └── variants.ts       # Button style variants
│   │   ├── Card/
│   │   │   └── Card.tsx          # Card component
│   │   └── ...
│   ├── layout/
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.tsx       # Sidebar nav
│   │   │   └── SidebarLink.tsx   # Sidebar link component
│   │   ├── Header.tsx            # Top nav/header
│   │   └── AppLayout.tsx         # App layout wrapper
│   └── users/
│       ├── UserCard.tsx          # Card displaying user info
│       ├── UserList.tsx          # List of users
│       └── UserStatus.tsx        # Online/offline indicator
│
├── constants/
│   ├── roles.ts                  # Roles enum / map
│   ├── routes.ts                 # Route definitions
│   └── permissions.ts            # Role-permission matrix
│
├── context/
│   ├── AuthContext.tsx           # Auth state context
│   └── UserContext.tsx           # User data context
│
├── hooks/
│   ├── useAuth.tsx               # Hook: auth state
│   ├── useRole.tsx               # Hook: role checks
│   ├── usePermissions.tsx        # Hook: permission checks
│   └── useUserData.tsx           # Hook: user data
│
├── services/
│   ├── auth.service.ts           # Auth API service
│   ├── user.service.ts           # User API service
│   └── api.ts                    # Axios instance / API config
│
├── styles/
│   ├── theme.ts                  # Theme config
│   ├── global.css                # Global CSS
│   └── animations.ts             # Animation definitions
│
├── types/
│   ├── user.ts                   # User types
│   ├── auth.ts                   # Auth types
│   ├── api.ts                    # API response types
│   └── navigation.ts             # Navigation types
│
├── utils/
│   ├── auth/
│   │   ├── role.utils.ts          # Role utilities
│   │   └── permissions.utils.ts   # Permission utilities
│   ├── navigation/
│   │   ├── sidebarLinks.ts        # Sidebar link generator
│   │   └── routeGuards.ts         # Route guards logic
│   ├── formatters.ts              # Data formatters
│   └── helpers.ts                 # General helpers
│



### we have more files to add ###