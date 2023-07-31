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
      query: (data) => ({
        url: `/form/response/${data.id}`,
        method: "POST",
        body: data.body,
      }),
      invalidatesTags: ["forms", "id", "responses"],
    }),
    getFormResponses: builder.query({
      query: (id) => `/form/response/${id}`,
      providesTags: ["forms", "responses"],
    }),
  }),
});

export const formApiNew = createApi({
  reducerPath: "formApiNew",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + "/v1" }),
  endpoints: (builder) => ({
    createFormNew: builder.mutation({
      query: (body) => ({
        url: "/form",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["forms"],
    }),
    getFormsNew: builder.query({
      query: () => "/form",
      providesTags: ["forms"],
    }),
    getFormIdNew: builder.query({
      query: (id) => `/form/${id}`,
      providesTags: ["forms", "id"],
    }),
    deleteFromNew: builder.mutation({
      query: (id) => ({
        url: `/form/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["forms", "id"],
    }),
    submitFormNew: builder.mutation({
      query: (data) => ({
        url: `/form/response/${data.id}`,
        method: "POST",
        body: data.body,
      }),
      invalidatesTags: ["forms", "id", "responses"],
    }),
    // getFormResponses: builder.query({
    //   query: (id) => `/form/response/${id}`,
    //   providesTags: ["forms", "responses"],
    // }),
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

export const {
  useCreateFormNewMutation,
  useGetFormsNewQuery,
  useGetFormIdNewQuery,
  useDeleteFromNewMutation,
  useSubmitFormNewMutation,
} = formApiNew;
