'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_redux = require('react-redux')
const material_ui = require('@material-ui/core')
const styles = require('./styles/index')
const Category = require('./Category')
const actions = require('../../store/actions/index')

/**
 * Constants
 */

const Component = React.Component
const connect = react_redux.connect
const LinearProgress = material_ui.LinearProgress
const getCategories = actions.getCategories

/**
 * Define component
 */

class CategoryList extends Component {
  componentDidMount() {
    this.props.getCategories(this.props.usersReducer.current_user_id)
  }

  render() {
    console.log('this.props.usersReducer.categories', this.props.usersReducer.categories)
    return (
      <styles.CategoryListStyle>
        <div className="row">
          <div className="col-12">
            {(this.props.usersReducer.isFetchingCategories) ?
              <LinearProgress /> :
              <ul>
                {this.props.usersReducer.categories.map((category, i) => <Category key={i} {...category} />)}
              </ul>
            }
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
