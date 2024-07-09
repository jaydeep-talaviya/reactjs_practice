import React from 'react'

function CommonLayer({children}) {
  return (
    <div className='border px-2 border-2  text-start'>
        {children}
    </div>
  )
}

export default CommonLayer