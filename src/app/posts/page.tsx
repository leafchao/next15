'use client'
import React, { useState, useEffect } from 'react'
import { Space, Table, Button, Input } from 'antd'
import type { TableProps } from 'antd'

interface DataType {
  id: string
  title: string
  content: number
}

function Page() {
  const columns: TableProps<DataType>['columns'] = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '内容',
      dataIndex: 'content',
    },
    {
      title: '操作',
      render: (_, record) => (
        <div className="flex space-x-4">
          <a onClick={() => edit(record.id)}>编辑</a>
          <a onClick={() => edit(record.id)}>删除</a>
        </div>
      ),
    },
  ]

  const edit = (id: string) => {
    console.log('edit id = ', id)
  }
  const [posts, set_posts] = useState<DataType[]>([])
  useEffect(() => {
    // async function fetchData() {
    //   const data = await fetch('http://localhost:3001/api/articles/ejfac5ly')
    //   const posts = await data.json()
    //   set_posts(posts)
    // }
    // fetchData()
  }, [])

  return (
    <div>
      <Table<DataType> columns={columns} dataSource={posts} />
    </div>
  )
}

export default Page
