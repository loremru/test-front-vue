import { defineComponent } from 'vue'
import { Table } from 'ant-design-vue'

export default defineComponent({
  setup() {
    const columns = [
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
    ]

    const data = [
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
    ]

    return () => (
      <>
        <h1>Новости</h1>

        <Table columns={columns} dataSource={data} scroll={{ x: 800 }}></Table>
      </>
    )
  }
})
