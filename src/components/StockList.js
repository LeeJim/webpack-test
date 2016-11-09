require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react'
import StockItem from './StockItem'

let list = [ ['a',1,2,3,4], ['b',1,2,3,4], ['c',1,2,3,4] ]

class StockList extends React.Component {
  render(){
    return (
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>名称</th>
              <th>合并溢价</th>
              <th>套利空间</th>
              <th>指数涨跌</th>
              <th>成交额</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map( (value) => {
              return <StockItem val={value} key={value}/>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

module.exports = StockList
