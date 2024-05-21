import * as React from 'react'
import Layout  from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home" >
      <p>Welcome to the homepage</p>
      </Layout>
  )
}

export const Head = () => <title>HomePage</title>

export default IndexPage;