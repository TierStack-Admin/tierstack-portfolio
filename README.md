# tierstack-portfolio
web-based portfolio for Tierstack company


```
npm install dotenv express mongoose cors jsonwebtoken bcryptjs multer --workspace=back
```

"express"
thee frame work

"mongoose" 
library to deal with the database (MongoDB)

"cors" (Cross-Origin Resource Sharing) 
Express middleware that tells browsers to allow your React app to request data from your Express server.


"JsonWebToken" (JWT) 
A secure way to send user identity and credentials between your React frontend and Express backend.

React (Frontend)                     Express (Backend)
  |                                        |
  |--- POST /api/v1/auth/login ----------->| (Validates password)
  |<-- Returns JWT Token ("eyJhbGci...") --|
  |                                        |
  |---- POST /api/v1/careers ------------->| (Verifies JWT)
  |    Header: Bearer eyJhbGci...          | 
  |<-- 201 Created ------------------------|



"Multer"
middleware for Node.js (and Express) that handles  form-data, when users upload files through HTML forms (binary file streams like images, PDFs, or documents).

