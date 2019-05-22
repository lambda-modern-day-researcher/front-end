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
const getMainLinks = actions.getMainLinks

/**
 * Define component
 */

class MainLinkList extends Component {
  componentDidMount() {
    this.props.getMainLinks()
  }

  render() {
    return (
      <styles.MainLinkListStyle>
        <h4>All</h4>

        <hr/>

        <ul>
          {this.props.main_links.map(link => <Link {...link} />)}
        </ul>
      </styles.MainLinkListStyle>
    )
  }
}

/**
 * Define mapStateToProps
 */

const mapStateToProps = (state) => {
  console.log('MainLinkList.mapStateToProps.state', state)
  return {
    main_links: state.usersReducer.main_links
  }
}

/**
 * Export component
 */

module.exports = connect(mapStateToProps, { getMainLinks })(MainLinkList)
