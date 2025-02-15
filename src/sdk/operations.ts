import gql from 'graphql-tag'
export const UserAccountFragment = gql`
  fragment UserAccount on auth_accounts {
    __typename
    id
    email
    user_id
  }
`
export const UserFragment = gql`
  fragment User on users {
    __typename
    id
    display_name
    avatar_url
    phone_number
    account {
      ...UserAccount
    }
  }
  ${UserAccountFragment}
`
export const CurrentUserFragment = gql`
  fragment CurrentUser on users {
    ...User
  }
  ${UserFragment}
`
export const CreateNewsDocument = gql`
  mutation createNews($news: news_insert_input!) {
    insert_news(objects: [$news]) {
      returning {
        id
      }
    }
  }
`
export const UpdateNewsDocument = gql`
  mutation updateNews($id: uuid!, $title: String!, $content: String!) {
    update_news_by_pk(
      pk_columns: { id: $id }
      _set: { title: $title, content: $content }
    ) {
      id
    }
  }
`
export const UpdateCurrentUserDocument = gql`
  mutation updateCurrentUser(
    $userId: uuid!
    $user: users_set_input!
    $account: auth_accounts_set_input!
  ) {
    user: update_users_by_pk(pk_columns: { id: $userId }, _set: $user) {
      ...CurrentUser
    }
    account: update_auth_accounts(
      where: { user_id: { _eq: $userId } }
      _set: $account
    ) {
      returning {
        ...UserAccount
      }
    }
  }
  ${CurrentUserFragment}
  ${UserAccountFragment}
`
export const GetCurrentNewsDocument = gql`
  query GetCurrentNews($id: uuid!) {
    news_by_pk(id: $id) {
      content
      title
    }
  }
`
export const GetCurrentUserDocument = gql`
  query getCurrentUser($userId: uuid!) {
    user: users_by_pk(id: $userId) {
      ...CurrentUser
    }
  }
  ${CurrentUserFragment}
`
export const GetNewsDocument = gql`
  query getNews {
    news {
      title
      created_at
      id
    }
  }
`
export const CurrentUserDocument = gql`
  subscription currentUser($userId: uuid!) {
    user: users_by_pk(id: $userId) {
      ...CurrentUser
    }
  }
  ${CurrentUserFragment}
`
