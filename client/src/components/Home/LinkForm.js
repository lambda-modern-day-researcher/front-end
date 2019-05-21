'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Define component
 */

function LinkForm() {
  return (
    <styles.LinkFormStyle>
      <form>
        <div className="row">
          <div className="col-9 pr-1">
            <div className="form-group">
              <input type="text" name="title" placeholder="Title" className="form-control form-control-sm"></input>
            </div>
            <div className="form-group mb-0">
              <input type="text" name="url" placeholder="https://google.com" className="form-control form-control-sm" required={true}></input>
            </div>
          </div>
          <div className="col-3 pl-0">
            <button type="submit" className="btn btn-block btn-primary btn__add">Add</button>
          </div>
        </div>
      </form>
    </styles.LinkFormStyle>
  )
}

/**
 * Export component
 */

module.exports = LinkForm
