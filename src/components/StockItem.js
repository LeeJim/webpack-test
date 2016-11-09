import React from 'react'

class StockItem extends React.Component {
  render(){
    return (
      <tr>
        {
          this.props.val.map( (value) => {
            return (<th key={value}>{value}</th>)
          })
        }
      </tr>
    )
  }
}

module.exports = StockItem
