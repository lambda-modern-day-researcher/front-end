'use strict'

/**
 * Dependencies
 */

const styled_components = require('styled-components')

/**
 * Constants
 */

const styled = styled_components.default

/**
 * Define style
 */



let SignInUpStyle = styled.div(() => `
 

.container {
    
    width: 600px;
    margin: 20px auto;
    background: #f39c12;
    position: relative;
    top:70px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    border-radius:7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
  }

  .brand_logo_container {
    margin: 0 auto;   
    width: 170px;
    border-radius: 50%;
    background: white;
    padding: 10px;
    text-align: center;
    position:relative;
    bottom:100px;
    
}

.brand_logo {
position:relative;
width: 150px;
border-radius: 50%;


}

.row .col-10  {
padding:0px;
}




`)

/**
 * Export style
 */

module.exports = SignInUpStyle
