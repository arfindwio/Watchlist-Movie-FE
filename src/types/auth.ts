export interface LoginPayload {
  email: string;
  password: string;
}
export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface EditProfilePayload {
  name: string;
  photo: File | null;
}

export interface ChangePasswordPayload {
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  photo: string | null;
  created_at: string;
  updated_at: string;
}

export interface LoginResponse {
  status: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

export interface RegisterResponse {
  status: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

export interface ProfileResponse {
  status: boolean;
  message: string;
  data: User;
}

export interface ChangePasswordResponse {
  status: boolean;
  message: string;
  data: User;
}
