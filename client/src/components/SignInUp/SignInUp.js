'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Constants
 */

const Component = React.Component

/**
 * Define component
 */

class SignInUp extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <styles.SignInUpStyle>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-5">

              <p className="text-center mt-4">LET'S DO THIS</p>

              <h2 className="text-center mb-4">Time to manage link chaos</h2>

              <form className="mb-10">
                <div className="form-group">
                  <label for="input_email" className="text-primary">Email <span className="text-danger">*</span></label>
                  <input id="input_email" type="text" name="email" className="form-control" autofocus="true" value={this.state.email} onChange={this.handleOnChange}></input>
                </div>

                <div className="form-group">
                  <label for="input_email" className="text-primary">Password <span className="text-danger">*</span></label>
                  <input id="input_password" type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleOnChange}></input>
                </div>

                <button type="submit" className="btn btn-block btn-primary">Get started</button>
              </form>

            </div>
          </div>
        </div>
      </styles.SignInUpStyle>
    )
  }
}

/**
 * Export component
 */

module.exports = SignInUp
