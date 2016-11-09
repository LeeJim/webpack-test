import React, { PropTypes } from 'react'

const Todo = ({ onclick, completed, text}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)


Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed:
}
