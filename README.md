# Frontend Integration Guide

---

## 1. How to Set Up and Run the Project

### Prerequisites
* **Node.js** (v18+ recommended)
* **MongoDB** running locally on port `27017`

---

### Step-by-Step Setup

1. **Clone the repository and install dependencies:**
  ```bash
   git clone <your-repository-url>
   cd tierstack-portfolio
   npm install
  ```

2. **Configure Backend Environment:**
Ensure a `.env` file exists inside the `back/` folder with the following variables:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/tierstack_db
JWT_SECRET=super_secret_jwt_key_12345
JWT_EXPIRES_IN=1d
NODE_ENV=development
```

3. **Seed Initial Test Data (Recommended):**
```bash
npm run seed --workspace=back
```

4. **Start the Backend Server:**
From the project root
```bash
npm run dev:back
```
* **Backend Base URL:** `http://localhost:5000/api/v1`
* **Health Check:** `http://localhost:5000/health`


5. **Default Test for admin**
* **Email:** `admin@tierstack.com`
* **Password:** `Password123!`



---

## 2. API Reference

All endpoints return a standardized JSON response:

* **Success:** `{ "success": true, "data": ... }`
* **Error:** `{ "success": false, "error": "Error message string" }`

Protected routes require an `Authorization: Bearer <token>` header obtained from the Login endpoint.

---

### Authentication (`/api/v1/auth`)

| Method | Endpoint | Access | Description | Payload / Notes |
| --- | --- | --- | --- | --- |
| `POST` | `/auth/login` | **Public** | Authenticates user & returns JWT token | JSON: `{ email, password }` |
| `POST` | `/auth/register` | **Public** | Creates a new admin/user account | JSON: `{ name, email, password }` |
| `GET` | `/auth/me` | 🔒 **Protected** | Validates active token & returns profile | Bearer Token required |

---

### Career Feature (`/api/v1/career`)

| Method | Endpoint | Access | Description | Payload / Notes |
| --- | --- | --- | --- | --- |
| `GET` | `/career` | **Public** | List all active job postings | Returns array of job objects |
| `GET` | `/career/:id` | **Public** | Get details of a single job opening | Requires Job ID |
| `POST` | `/career/:id/apply` | **Public** | Submit candidate job application | `multipart/form-data`: `fullName`, `email`, `phone`, `coverLetter`, `resume` (file) |
| `POST` | `/career` | 🔒 **Protected** | Create a new job opening | JSON: `title`, `department`, `location`, `type`, `description`, `requirements` |
| `PUT` | `/career/:id` | 🔒 **Protected** | Update an existing job opening | JSON body with updated fields |
| `DELETE` | `/career/:id` | 🔒 **Protected** | Remove a job opening | Requires Job ID |
| `GET` | `/career/:id/applications` | 🔒 **Protected** | View applications for a specific job | Returns array of candidate submissions |

---

### 🎨 Portfolio Feature (`/api/v1/portfolio`)

| Method | Endpoint | Access | Description | Payload / Notes |
| --- | --- | --- | --- | --- |
| `GET` | `/portfolio` | **Public** | List published showcase projects | Sorted with featured projects first |
| `GET` | `/portfolio/:slug` | **Public** | Get project details by unique slug | e.g. `/portfolio/e-commerce-redesign` |
| `POST` | `/portfolio` | 🔒 **Protected** | Create a new showcase project | `multipart/form-data`: `title`, `slug`, `summary`, `description`, `technologies`, `coverImage` (file) |
| `PUT` | `/portfolio/:id` | 🔒 **Protected** | Update project metadata or cover image | `multipart/form-data` |
| `DELETE` | `/portfolio/:id` | 🔒 **Protected** | Remove a portfolio project | Requires Project ID |

---

## 3. Project File Structure

The project uses an **npm Workspaces Monorepo** layout. Backend features are grouped into self-contained vertical slices (`Model`, `Service`, `Controller`, `Routes`).

```text
tierstack-portfolio/            # Root Monorepo Directory
├── back/                       # Express Backend Workspace
│   ├── config/                 # App configuration files
│   │   ├── db.js               # MongoDB Mongoose connection startup
│   │   └── env.js              # Environment variable loader
│   ├── features/               # Vertical Feature Slices
│   │   ├── auth/               # Authentication Slice (User Model, JWT Service, Login Controller, Routes)
│   │   ├── career/             # Career Slice (Job/Application Models, Application Service, Controller, Routes)
│   │   └── portfolio/          # Portfolio Slice (Project Model, CRUD Service, Controller, Routes)
│   ├── middlewares/            # Centralized Express Middlewares
│   │   ├── auth.middleware.js  # JWT validation & role permission guards
│   │   ├── error.middleware.js # Global async error handler
│   │   └── upload.middleware.js# Multer configuration for file uploads (PDF, Images)
│   ├── utils/                  # Shared Utility Functions
│   │   ├── apiError.js         # Custom operational Error class
│   │   └── logger.js           # Logging utility
│   ├── uploads/                # Local disk storage for resumes and project cover images
│   ├── seed.js                 # Database seeder script for test data
│   ├── index.js                # Express app entry point & route registration
│   └── package.json            # Backend dependencies & scripts
├── front/                      # React Frontend Workspace (Client App)
├── FRONTEND_HANDOFF.md         # Integration guide for frontend developers
├── README.md                   # Overall project documentation
└── package.json                # Root monorepo configuration

```

