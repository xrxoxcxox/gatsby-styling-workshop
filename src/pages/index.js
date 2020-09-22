import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <>
      <h1>This is index page</h1>
      <Link to="/page1">page1</Link>
      <Link to="/page2">page2</Link>
    </>
  )
}
