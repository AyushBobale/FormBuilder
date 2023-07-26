import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "../../config";

export const formApi = createApi({
  reducerPath: "formApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: "include" }),
  endpoints: (builder) => ({
    createForm: builder.mutation({
      query: (body) => ({
        url: "/form",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["forms"],
    }),
    getForms: builder.query({
      query: (test) => "/form",
      providesTags: (result) => {
        console.log(result);
        return [result];
      },
    }),
    // userData: builder.query({
    //   query: () => "/auth/user_data",
    //   providesTags: ["user", "login"],
    // }),
    // login: builder.mutation({
    //   query: (body) => ({
    //     url: "/auth/login",
    //     method: "POST",
    //     body: body,
    //   }),
    //   invalidatesTags: ["user", "login"],
    // }),
    // register: builder.mutation({
    //   query: (body) => ({
    //     url: "/auth/register",
    //     method: "POST",
    //     body: body,
    //   }),
    //   invalidatesTags: ["user", "login"],
    // }),
  }),
});

export const { useCreateFormMutation, useGetFormsQuery } = formApi;
