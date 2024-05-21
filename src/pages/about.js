import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
        <ul>
            <li>I like to Code</li>
            <li>I like to play sports</li>
            <li>I like to make music</li>
        </ul>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage