import * as authService from './auth.service.js';
import { validateRegister, validateLogin } from './auth.validation.js';

export const register = async (req, res, next) => {
  try {
    validateRegister(req.body);
    const data = await authService.registerUser(req.body);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    validateLogin(req.body);
    const data = await authService.loginUser(req.body);

    res.status(200).json({
      success: true,
      message: 'Logged in successfully',
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req, res, next) => {
  try {
    const user = await authService.getUserById(req.user.id);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};