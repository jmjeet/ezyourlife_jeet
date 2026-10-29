import { z } from 'zod'

export const INITIAL_FORM = {
  fullName: '',
  email: '',
  password: '',
  mobile: '',
  businessSchool: '',
  role: '',
  location: '',
}

export const createSchema = () =>
  z.object({
    fullName: z
      .string()
      .trim()
      .min(1, 'Full name is required.')
      .regex(/^[A-Za-z]+(?: [A-Za-z]+)*$/, 'Full name must contain letters and spaces only.'),
    email: z.string().trim().min(1, 'Email is required.').email('Please enter a valid email address.'),
    password: z.string().min(6, 'Password must be at least 6 characters.'),
    mobile: z
      .string()
      .trim()
      .min(1, 'Mobile number is required.')
      .regex(/^(?:\+?\d{1,3})?\d{10}$/, 'Enter a valid 10-digit mobile number.'),
    businessSchool: z.string().trim().min(1, 'Business or school is required.'),
    role: z.string().trim().min(1, 'Please select your role.'),
    location: z.string().trim().min(1, 'Location is required.'),
  })
