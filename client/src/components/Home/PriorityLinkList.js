'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_redux = require('react-redux')
const styles = require('./styles/index')
const Link = require('./Link')
const actions = require('../../store/actions/index')

/**
 * Constants
 */

const Component = React.Component
const connect = react_redux.connect
const getPriorityLinks = actions.getPriorityLinks

/**
 * Define component
 */

class PriorityLinkList extends Component {
  componentDidMount() {
    this.props.getPriorityLinks(this.props.current_user_id)
  }

  render() {
    return (
      <styles.PriorityLinkListStyle>
        <h4>Priority</h4>

        <hr/>

        <ul>
          {this.props.priority_links.map((link, i) => <Link key={i} {...link} />)}
        </ul>
      </styles.PriorityLinkListStyle>
    )
  }
}

/**
 * Define mapStateToProps
 */

const mapStateToProps = (state) => {
  return {
    priority_links: state.usersReducer.priority_links,
    current_user_id: state.usersReducer.current_user_id
  }
}

/**
 * Export component
 */

module.exports = connect(mapStateToProps, { getPriorityLinks })(PriorityLinkList)
