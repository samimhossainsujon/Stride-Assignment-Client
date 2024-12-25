import { baseApi } from "../../api";

const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllProducts: build.query({
            query: (query) => ({
                url: `/get-products`,
                method: 'GET',
                params: query
            }),
            providesTags: ['product']
        }),
        getSingleProduct: build.query({
            query: (productId) => ({
                url: `/get-single-product/${productId}`,
                method: 'GET',
            }),
            providesTags: ['product']
        }),
        getSellerProducts: build.query({
            query: () => ({
                url: `/seller-products`,
                method: 'GET',
            }),
            providesTags: ['product']
        }),
        addProduct: build.mutation({
            query: (body) => ({
                url: `/add-product`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['product']
        }),
        deleteProduct: build.mutation({
            query: (productId) => ({
                url: `/delete-product/${productId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['product']
        }),
        updateProduct: build.mutation({
            query: (body) => ({
                url: `/update-product/${body?._id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['product']
        }),
    })
})

export const { useGetAllProductsQuery, useGetSingleProductQuery, useGetSellerProductsQuery,
    useAddProductMutation,
    useDeleteProductMutation,
    useUpdateProductMutation } = productApi