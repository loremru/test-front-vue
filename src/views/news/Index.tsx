import { defineComponent, reactive, onMounted } from 'vue'
import { Table } from 'ant-design-vue'
import { getNews } from '@/plugins/api/news'
import router from '@/router'

export default defineComponent({
  setup() {
    const newsData = reactive({
      columns: [
        {
          title: 'Заголовок',
          dataIndex: 'title',
          key: 'title'
        },
        {
          title: 'Дата добавления',
          dataIndex: 'date',
          key: 'date'
        }
      ],
      data: [],
      loading: true
    })

    onMounted(async () => {
      const tableContent = await getNews()
      if (tableContent) {
        newsData.data = tableContent.data.news.map(
          (el: {
            title: string
            id: string
            created_at: string | number | Date
          }) => ({
            title: el.title,
            key: el.id,
            date: new Date(el.created_at).toDateString()
          })
        )
        newsData.loading = false
      }
    })

    return () => (
      <>
        <h1>Новости</h1>

        <Table
          columns={newsData.columns}
          dataSource={newsData.data}
          loading={newsData.loading}
          scroll={{ x: 800 }}
          onRowClick={el => {
            router.push(`/news/${el.key}`)
          }}
        />
      </>
    )
  }
})
