import type { EditProfilePayload } from "../types/auth";

export function editProfileFormData(payload: EditProfilePayload): FormData {
  const formData = new FormData();

  formData.append("name", payload.name);
  if (payload.photo) {
    formData.append("photo", payload.photo);
  }

  return formData;
}
