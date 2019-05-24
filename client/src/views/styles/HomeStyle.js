'use strict'

/**
 * Dependencies
 */

import styled from 'styled-components'

console.log("styled", styled)

/**
 * Define style
 */

const HomeStyle = styled.div(() => `
  height: 100vh;

  .mx-auto {
    margin-right: auto !important;
  }

  .border-right {
    border-right: 1px solid #333;
  }
`)

/**
 * Export style
 */

export default HomeStyle
