import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { ApiError } from '../utils/apiError.js';

// Ensure 'uploads' directory exists
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Disk storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

// File type filter
const fileFilter = (req, file, cb) => {
  const allowedExtensions = /jpeg|jpg|png|pdf|doc|docx/;
  const extName = allowedExtensions.test(path.extname(file.originalname).toLowerCase());
  const mimeType = allowedExtensions.test(file.mimetype);

  if (extName && mimeType) {
    return cb(null, true);
  }
  cb(new ApiError(400, 'Invalid file type. Only JPG, PNG, PDF, DOC, and DOCX files are allowed.'));
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB max file size
});