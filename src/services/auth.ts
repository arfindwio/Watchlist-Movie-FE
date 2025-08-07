// Axios
import api from "../lib/axios";

// Types
import type {
  LoginPayload,
  RegisterPayload,
  EditProfilePayload,
  ChangePasswordPayload,
  LoginResponse,
  RegisterResponse,
  ProfileResponse,
  ChangePasswordResponse,
} from "../types/auth";

// Utils
import { editProfileFormData } from "../utils/auth";

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  const res = await api.post("/login", payload);
  return res.data;
}

export async function register(
  payload: RegisterPayload,
): Promise<RegisterResponse> {
  const res = await api.post("/register", payload);
  return res.data;
}

export async function fetchProfile(): Promise<ProfileResponse> {
  const res = await api.get("/authenticate");
  return res.data;
}

export async function editProfile(
  payload: EditProfilePayload,
): Promise<{ data: ProfileResponse }> {
  const formData = editProfileFormData(payload);

  const res = await api.post(`/profile`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res;
}

export async function deletePhotoProfile(): Promise<{ data: ProfileResponse }> {
  const res = await api.delete(`/profile/photo`);

  return res;
}

export async function changePassword(payload: ChangePasswordPayload): Promise<{
  data: ChangePasswordResponse;
}> {
  const res = await api.put(`/change-password`, payload);

  return res.data;
}
