import React from 'react'
import { title, users, product } from './data/list'

function Service() {

  return (
    <div>

      {product.map((item, index) => (
        <div key={index}>
          {item}
        </div>
      ))}


      <div className='result'>
      {users.map((user) => (
        <div className='content' key={user.id}>
          {user.name}
          {user.age}
          {user.city}
        </div>
      ))}
     </div>


			<h3>{title}</h3>
    </div>
  )
}

export default Service
