import { defineComponent, reactive } from 'vue'
import { Table } from 'ant-design-vue'

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
      data: [
        {
          key: '1',
          title: 'Выполнено тестовое задание!!!',
          date: '04.02.2021'
        },
        {
          key: '2',
          title: 'Сегодня 5 февраля!',
          date: '05.02.2021'
        },
        {
          key: '3',
          title: 'ыыыы',
          date: '06.02.2021'
        }
      ],
      loading: true
    })

    return () => (
      <>
        <h1>Новости</h1>

        <Table
          columns={newsData.columns}
          dataSource={newsData.data}
          loading={newsData.loading}
          scroll={{ x: 800 }}
        ></Table>
      </>
    )
  }
})
