import { CreateNewsDocument } from '@/sdk/operations'
import { apolloClient, config } from '@/plugins/api/index'
import { message } from 'ant-design-vue'

export default async (title: string, content: string) => {
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
