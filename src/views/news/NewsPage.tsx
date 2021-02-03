import { defineComponent, onMounted, reactive } from 'vue'
import router from '@/router'
import { getCurrentNews, updateCurrentNews } from '@/plugins/api/news'
import { FormRules } from '@/types'
import { Button, Form, Input, Space } from 'ant-design-vue'

export default defineComponent({
  setup() {
    const newsData = reactive({
      title: '',
      content: '',
      id: router.currentRoute.value.params.id
    })

    const formData = reactive({
      title: '',
      content: '',
      loading: false
    })

    const rules: FormRules = {
      title: [
        {
          required: true,
          message: 'Введите название новости',
          trigger: 'blur'
        }
      ],
      content: [
        {
          min: 10,
          required: true,
          message: 'Текст новости не меньше 10 символов',
          trigger: 'blur'
        }
      ]
    }

    onMounted(async () => {
      let currentNews = await getCurrentNews(newsData.id)
      if (currentNews) {
        currentNews = currentNews.data.news_by_pk
        // @ts-ignore
        newsData.title = currentNews.title
        // @ts-ignore
        newsData.content = currentNews.content
        formData.title = newsData.title
        formData.content = newsData.content
      }
    })

    const onSubmit = async (data: typeof formData) => {
      formData.loading = true
      try {
        const id = await updateCurrentNews(
          // @ts-ignore
          newsData.id,
          data.title,
          data.content
        )
        console.log(id)
        router.push('/news')
      } finally {
        formData.loading = false
      }
    }

    return () => (
      <>
        <h1>{newsData.title}</h1>
        <br />
        <pre>{newsData.content}</pre>

        <br />
        <br />
        <Form
          model={formData}
          onFinish={onSubmit}
          layout="vertical"
          rules={rules as any}
          class="form-default"
        >
          <h2>Редактировать новость</h2>
          <Form.Item label="Название" name="title">
            <Input
              placeholder="Введите название"
              size="large"
              v-model={[formData.title, 'value']}
            />
          </Form.Item>
          <Form.Item label="Текст" name="content">
            <Input.TextArea
              placeholder="Введите текст новости"
              size="large"
              v-model={[formData.content, 'value']}
              autosize={{ minRows: 5 }}
            />
          </Form.Item>
          <Form.Item>
            <Space size={24}>
              <Button
                type="primary"
                htmlType="submit"
                shape="round"
                loading={formData.loading}
                size="large"
              >
                Редактировать
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </>
    )
  }
})
