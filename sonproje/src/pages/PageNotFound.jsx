import React from 'react'
import {Link} from 'react-router-dom'

function PageNotFOUND() {
  return (
    <>
    <h1>404- EROR</h1>
    <Link to="/" className='btn btn-info'>Ana Sayfaya Gitmek İçin Tıklayın</Link>
    </>
  )
}

export default PageNotFOUND