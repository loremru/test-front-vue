import {
  CreateNewsDocument,
  GetNewsDocument,
  GetCurrentNewsDocument,
  UpdateNewsDocument
} from '@/sdk/operations'
import { apolloClient, config } from '@/plugins/api/index'
import { message } from 'ant-design-vue'

export const getNews = async () => {
  try {
    return await apolloClient.query({
      query: GetNewsDocument
    })
  } catch (err) {
    console.log(err)
    config.graphqlErrorHandler(err)
  }
}

export const getCurrentNews = async (id: string | string[]) => {
  try {
    return await apolloClient.query({
      query: GetCurrentNewsDocument,
      variables: { id }
    })
  } catch (err) {
    console.log(err)
    config.graphqlErrorHandler(err)
  }
}

export const createNews = async (title: string, content: string) => {
  try {
    const id = await apolloClient.mutate({
      mutation: CreateNewsDocument,
      variables: {
        news: { title, content }
      }
    })
    message.success('Новость успешно создана!')
    return id
  } catch (err) {
    console.log(err)
    config.graphqlErrorHandler(err)
  }
}

export const updateCurrentNews = async (
  id: string,
  title: string,
  content: string
) => {
  try {
    const updatedNewsId = await apolloClient.mutate({
      mutation: UpdateNewsDocument,
      variables: {
        id,
        title,
        content
      }
    })
    console.log(id, title, content)
    message.success('Новость успешно обновлена!')
    return updatedNewsId
  } catch (err) {
    console.log(err)
    config.graphqlErrorHandler(err)
  }
}
