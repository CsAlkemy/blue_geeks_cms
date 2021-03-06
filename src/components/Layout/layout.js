import * as React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import Header from "./navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
