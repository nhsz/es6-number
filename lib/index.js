/*
  Check if a value is a number, including every 'number' type
*/
'use strict'

module.exports = (value) => {
  return typeof value === 'number' && !Number.isNaN(value)
}
