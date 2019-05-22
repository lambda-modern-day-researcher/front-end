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
const getCategories = actions.getCategories
const createCategory = actions.createCategory

/**
 * Define component
 */

class CategoryForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '#333333',
      title: '',
      created_by: props.usersReducer.current_user_id
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.createCategory(this.state)
      .then(() => {
        document.activeElement.blur()
        this.setState({ color: '#333333', title: '' })
        this.props.getCategories(this.props.usersReducer.current_user_id)
      })
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <styles.CategoryFormStyle>
        <form className="form-inline" onSubmit={this.handleOnSubmit}>
          <input type="color" name="color" value={this.state.color} onChange={this.handleOnChange} className="form-control form-control-sm input__color" required={true}></input>
          <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} placeholder="Category" className="form-control form-control-sm input__category" required={true}></input>
          <button type="submit" className="btn btn-sm btn-block btn-light btn__submit">Add</button>
        </form>
      </styles.CategoryFormStyle>
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

module.exports = connect(mapStateToProps, { createCategory, getCategories })(CategoryForm)
