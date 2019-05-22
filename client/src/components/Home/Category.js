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
const deleteCategory = actions.deleteCategory

/**
 * Define component
 */

class Category extends Component {
  handleDeleteCategory = () => {
    let yes = window.confirm("Are you sure?")

    if (yes) {
      this.props.deleteCategory(
        this.props.usersReducer.current_user_id,
        this.props.id
      )
    }
  }

  render() {
    return (
      <styles.CategoryStyle>
        <span className="glyph__circle" style={{ backgroundColor: this.props.color }}></span>
        <span className="text__category">{this.props.title}</span>
        <span className="btn__delete" onClick={this.handleDeleteCategory}>x</span>
      </styles.CategoryStyle>
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

module.exports = connect(mapStateToProps, { deleteCategory })(Category)
