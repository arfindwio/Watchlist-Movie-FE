// Axios
import api from "../lib/axios";

// Types
import type {
  LoginPayload,
  RegisterPayload,
  LoginResponse,
  RegisterResponse,
  ProfileResponse,
} from "../types/auth";

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
  const res = await api.get<ProfileResponse>("/authenticate");
  return res.data;
}
