import React from 'react'

const Container = {
    height: '30px',
    backgroundColor: 'teal',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: '500',
}
const Announcement = () => {
  return (
    <div style={Container}>
        Super Deal! Free Shipping on Orders over $50
    </div>
  )
}

export default Announcement