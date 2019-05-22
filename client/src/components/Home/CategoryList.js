'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_redux = require('react-redux')
const styles = require('./styles/index')
const Category = require('./Category')
const actions = require('../../store/actions/index')

/**
 * Constants
 */

const Component = React.Component
const connect = react_redux.connect
const getCategories = actions.getCategories

/**
 * Define component
 */

class CategoryList extends Component {
  componentDidMount() {
    this.props.getCategories(this.props.current_user_id)
  }

  render() {
    return (
      <styles.CategoryListStyle>
        <div className="row">
          <div className="col-12">
            <ul>
              {this.props.usersReducer.categories.map((category, i) => <Category key={i} {...category} />)}
            </ul>
          </div>
        </div>
      </styles.CategoryListStyle>
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

module.exports = connect(mapStateToProps, { getCategories })(CategoryList)
