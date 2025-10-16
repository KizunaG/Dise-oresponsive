import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Section from './components/Section'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Main />
      <Section />
      <Footer />
    </div>
  )
}
