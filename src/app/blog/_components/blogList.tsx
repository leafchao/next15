'use client'
import React from 'react'
import { List, Avatar } from 'antd'
import Link from 'next/link'
import { data } from '@/data'
function BlogList() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            className=" !items-center"
            avatar={
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
              />
            }
            title={<Link href={`/blog/${item.id}`}>{item.title}</Link>}
          />
        </List.Item>
      )}
    />
  )
}

export default BlogList
