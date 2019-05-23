'use strict'

/**
 * Dependencies
 */

const React = require('react')
const Dialog = require('@material-ui/core/Dialog')
const DialogTitle = require('@material-ui/core/DialogTitle')

/**
 * Define component
 */

function SimpleDialog(props) {
  function handleClose() {
    props.onClose(props.selectedValue)
  }

  function handleListItemClick(value) {
    props.onClose(value)
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title">
      <DialogTitle id="simple-dialog-title">Simple Dialog</DialogTitle>
    </Dialog>
  )
}

/**
 * Export component
 */

module.exports = SimpleDialog
