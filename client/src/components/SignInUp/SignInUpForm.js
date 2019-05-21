'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_redux = require('react-redux')
const styles = require('./styles/index')
const actions = require('../../store/actions/index')

/**
 * Constants
 */

const Component = React.Component
const connect = react_redux.connect
const signin = actions.signin

/**
 * Define component
 */

class SignInUpForm extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.signin(this.state)
      .then(() => {
        this.props.history.push('/home')
      })
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <styles.SignInUpFormStyle>
        <form className="mb-10" onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="input_email" className="text-primary">Username <span className="text-danger">*</span></label>
            <input id="input_email" type="text" name="username" value={this.state.username} onChange={this.handleOnChange} className="form-control" autoFocus={true} required={true}></input>
          </div>

          <div className="form-group">
            <label htmlFor="input_password" className="text-primary">Password <span className="text-danger">*</span></label>
            <input id="input_password" type="password" name="password" value={this.state.password} onChange={this.handleOnChange} className="form-control" required={true}></input>
          </div>

          <button type="submit" className="btn btn-block btn-primary">Get started</button>
        </form>
      </styles.SignInUpFormStyle>
    )
  }
}

/**
 * Define mapStateToProps
 */

const mapStateToProps = (state) => {
  return state
}

/**
 * Export component
 */

module.exports = connect(mapStateToProps, { signin })(SignInUpForm)
