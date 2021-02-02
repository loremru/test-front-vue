import { defineComponent, reactive } from 'vue'
import { Button, Form, Input, Space } from 'ant-design-vue'
import { FormRules } from '@/types'
import { createNews } from '@/plugins/api'

export default defineComponent({
  setup() {
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

    const onSubmit = async (data: typeof formData) => {
      formData.loading = true
      try {
        const id = await createNews(formData.title, formData.content)
        console.log(id)
      } finally {
        formData.loading = false
      }
    }

    return () => (
      <>
        <h1>Создать новость</h1>

        <Form
          model={formData}
          onFinish={onSubmit}
          layout="vertical"
          rules={rules as any}
          class="form-default"
        >
          <Form.Item label="Название" name="title">
            <Input
              placeholder="Введите название"
              size="large"
              v-model={[formData.title, 'value']}
            />
          </Form.Item>
          <Form.Item label="Текс" name="content">
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
                Создать
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </>
    )
  }
})
