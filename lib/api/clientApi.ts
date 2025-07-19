import { Note } from "../../types/note";
import { NewNote } from "../../types/note";

import { clientApi } from "./api"; 

import {
  RegisterRequest,
  User,
  CheckSessionRequest,
  LoginRequest,
  UpdateUserRequest,
} from "../../types/user";

interface NotesHttpResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  query: string,
  page: number,
  tag?: string
): Promise<NotesHttpResponse> => {
  const PARAMS = new URLSearchParams({
    ...(query !== "" ? { search: query } : {}),
    ...(tag !== undefined ? { tag } : null),
    page: page.toString(),
  });

  const response = await clientApi.get<NotesHttpResponse>("/notes", { 
    params: PARAMS,
  });

  return response.data;
};

export const createNote = async (newNote: NewNote): Promise<Note> => {
  const response = await clientApi.post("/notes", newNote); 
  return response.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await clientApi.get<Note>(`/notes/${id}`); 
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await clientApi.delete<Note>(`/notes/${id}`); 
  return response.data;
};

// REGISTER
export const register = async (data: RegisterRequest): Promise<User> => {
  const res = await clientApi.post<User>("/auth/register", data); 
  return res.data;
};

// LOGIN
export const login = async (data: LoginRequest): Promise<User> => {
  const res = await clientApi.post<User>("/auth/login", data); 
  return res.data;
};

// PATCH
export const editProfile = async (data: UpdateUserRequest): Promise<User> => {
  const res = await clientApi.patch<User>("/users/me", data);
  return res.data;
};

// CHECK SESSION
export const checkSession = async (): Promise<boolean> => {
  const res = await clientApi.get<CheckSessionRequest>("/auth/session"); 
  return res.data.success;
};

// AUTH ME
export const getMe = async (): Promise<User> => {
  const { data } = await clientApi.get<User>("/users/me"); 
  return data;
};

// LOGOUT
export const logout = async (): Promise<void> => {
  await clientApi.post("/auth/logout"); 
};