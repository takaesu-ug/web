import { Typography, Paper, Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { BasicLayout } from '@/components/layouts/BasicLayout'

const PaperItem = styled(Paper)`
  padding: 10rem 0;
  margin-left: 1rem;
`

const MyAvatar = styled(Avatar)`
  width: 15rem;
  height: 15rem;
`

const RootIndex = () => {
  return (
    <BasicLayout>
      <main>
        <Typography variant="h3">
          ウェルカム<a href="https://nextjs.org">Next.js!</a>
        </Typography>

        <MyAvatar src="/avatar.jpg" alt="avatar" />

        <PaperItem>hoge</PaperItem>
        <PaperItem>fuga</PaperItem>
      </main>
    </BasicLayout>
  )
}

export default RootIndex
