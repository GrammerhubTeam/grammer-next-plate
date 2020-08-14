import App from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
            <title>Grammerhub | Level Up Your Coding Skills - Coming Soon</title>
            <link href="../static/css/normalize.css" rel="stylesheet"></link>
            <link href="../static/MyCalendar.css" rel="stylesheet"></link>
            <link href="../static/css/style.css" rel="stylesheet"></link>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}