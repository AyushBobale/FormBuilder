import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_URL } from "../../config";

export const formApi = createApi({
  reducerPath: "formApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    createForm: builder.mutation({
      query: (body) => ({
        url: "/form",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["forms"],
    }),
    deleteFrom: builder.mutation({
      query: (id) => ({
        url: `/form/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["forms", "id"],
    }),
    getForms: builder.query({
      query: () => "/form",
      providesTags: ["forms"],
    }),
    getFormId: builder.query({
      query: (id) => `/form/${id}`,
      providesTags: ["forms", "id"],
    }),
    submitForm: builder.mutation({
      query: (id, body) => ({
        url: `/form/response/${id}`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["forms", "id", "responses"],
    }),
    getFormResponses: builder.query({
      query: (id) => `/form/response/${id}`,
      providesTags: ["forms", "responses"],
    }),
  }),
});

export const {
  useCreateFormMutation,
  useGetFormsQuery,
  useGetFormIdQuery,
  useDeleteFromMutation,
  useSubmitFormMutation,
  useGetFormResponsesQuery,
} = formApi;
