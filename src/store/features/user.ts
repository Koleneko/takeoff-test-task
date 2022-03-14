import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "src/types";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface UserResponse extends User {}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
  }),
  tagTypes: ["User"],

  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: `users?q=${credentials.username}`,
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = userApi;
