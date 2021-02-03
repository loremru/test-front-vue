// @ts-nocheck
import * as Types from './types'

import * as Operations from './operations'
import * as VueApolloComposable from '@vue/apollo-composable'
import * as VueCompositionApi from 'vue'
export type ReactiveFunction<TParam> = () => TParam

/**
 * __useCreateNewsMutation__
 *
 * To run a mutation, you first call `useCreateNewsMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewsMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateNewsMutation({
 *   variables: {
 *      news: // value for 'news'
 *   },
 * });
 */
export function useCreateNewsMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        Types.CreateNewsMutation,
        Types.CreateNewsMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          Types.CreateNewsMutation,
          Types.CreateNewsMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    Types.CreateNewsMutation,
    Types.CreateNewsMutationVariables
  >(Operations.CreateNewsDocument, options)
}
export type CreateNewsMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  Types.CreateNewsMutation,
  Types.CreateNewsMutationVariables
>

/**
 * __useUpdateNewsMutation__
 *
 * To run a mutation, you first call `useUpdateNewsMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNewsMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateNewsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpdateNewsMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        Types.UpdateNewsMutation,
        Types.UpdateNewsMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          Types.UpdateNewsMutation,
          Types.UpdateNewsMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    Types.UpdateNewsMutation,
    Types.UpdateNewsMutationVariables
  >(Operations.UpdateNewsDocument, options)
}
export type UpdateNewsMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  Types.UpdateNewsMutation,
  Types.UpdateNewsMutationVariables
>

/**
 * __useUpdateCurrentUserMutation__
 *
 * To run a mutation, you first call `useUpdateCurrentUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCurrentUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateCurrentUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      user: // value for 'user'
 *      account: // value for 'account'
 *   },
 * });
 */
export function useUpdateCurrentUserMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        Types.UpdateCurrentUserMutation,
        Types.UpdateCurrentUserMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          Types.UpdateCurrentUserMutation,
          Types.UpdateCurrentUserMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    Types.UpdateCurrentUserMutation,
    Types.UpdateCurrentUserMutationVariables
  >(Operations.UpdateCurrentUserDocument, options)
}
export type UpdateCurrentUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  Types.UpdateCurrentUserMutation,
  Types.UpdateCurrentUserMutationVariables
>

/**
 * __useGetCurrentNewsQuery__
 *
 * To run a query within a Vue component, call `useGetCurrentNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentNewsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetCurrentNewsQuery(
 *   {
 *      id: // value for 'id'
 *   }
 * );
 */
export function useGetCurrentNewsQuery(
  variables:
    | Types.GetCurrentNewsQueryVariables
    | VueCompositionApi.Ref<Types.GetCurrentNewsQueryVariables>
    | ReactiveFunction<Types.GetCurrentNewsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        Types.GetCurrentNewsQuery,
        Types.GetCurrentNewsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          Types.GetCurrentNewsQuery,
          Types.GetCurrentNewsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          Types.GetCurrentNewsQuery,
          Types.GetCurrentNewsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    Types.GetCurrentNewsQuery,
    Types.GetCurrentNewsQueryVariables
  >(Operations.GetCurrentNewsDocument, variables, options)
}
export type GetCurrentNewsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  Types.GetCurrentNewsQuery,
  Types.GetCurrentNewsQueryVariables
>

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a Vue component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetCurrentUserQuery(
 *   {
 *      userId: // value for 'userId'
 *   }
 * );
 */
export function useGetCurrentUserQuery(
  variables:
    | Types.GetCurrentUserQueryVariables
    | VueCompositionApi.Ref<Types.GetCurrentUserQueryVariables>
    | ReactiveFunction<Types.GetCurrentUserQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        Types.GetCurrentUserQuery,
        Types.GetCurrentUserQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          Types.GetCurrentUserQuery,
          Types.GetCurrentUserQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          Types.GetCurrentUserQuery,
          Types.GetCurrentUserQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    Types.GetCurrentUserQuery,
    Types.GetCurrentUserQueryVariables
  >(Operations.GetCurrentUserDocument, variables, options)
}
export type GetCurrentUserQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  Types.GetCurrentUserQuery,
  Types.GetCurrentUserQueryVariables
>

/**
 * __useGetNewsQuery__
 *
 * To run a query within a Vue component, call `useGetNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetNewsQuery(
 *   {
 *   }
 * );
 */
export function useGetNewsQuery(
  options:
    | VueApolloComposable.UseQueryOptions<
        Types.GetNewsQuery,
        Types.GetNewsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          Types.GetNewsQuery,
          Types.GetNewsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          Types.GetNewsQuery,
          Types.GetNewsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<Types.GetNewsQuery, undefined>(
    Operations.GetNewsDocument,
    undefined,
    options
  )
}
export type GetNewsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  Types.GetNewsQuery,
  Types.GetNewsQueryVariables
>

/**
 * __useCurrentUserSubscription__
 *
 * To run a query within a Vue component, call `useCurrentUserSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserSubscription` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the subscription, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/subscription.html#options;
 *
 * @example
 * const { result, loading, error } = useCurrentUserSubscription(
 *   {
 *      userId: // value for 'userId'
 *   }
 * );
 */
export function useCurrentUserSubscription(
  variables:
    | Types.CurrentUserSubscriptionVariables
    | VueCompositionApi.Ref<Types.CurrentUserSubscriptionVariables>
    | ReactiveFunction<Types.CurrentUserSubscriptionVariables>,
  options:
    | VueApolloComposable.UseSubscriptionOptions<
        Types.CurrentUserSubscription,
        Types.CurrentUserSubscriptionVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseSubscriptionOptions<
          Types.CurrentUserSubscription,
          Types.CurrentUserSubscriptionVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseSubscriptionOptions<
          Types.CurrentUserSubscription,
          Types.CurrentUserSubscriptionVariables
        >
      > = {}
) {
  return VueApolloComposable.useSubscription<
    Types.CurrentUserSubscription,
    Types.CurrentUserSubscriptionVariables
  >(Operations.CurrentUserDocument, variables, options)
}
export type CurrentUserSubscriptionCompositionFunctionResult = VueApolloComposable.UseSubscriptionReturn<
  Types.CurrentUserSubscription,
  Types.CurrentUserSubscriptionVariables
>
