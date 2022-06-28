import React from 'react'
import Search from './Search'
import Button from 'react-bootstrap/Button'

function Header({ setIsAdding ,handleSearchQuery}) {
    return (
        <header>
            <h1 className='mt-3 mb-3'>Kaptyn Management Software</h1>
            <>
  <Button variant="primary" size="lg"  onClick={() => setIsAdding(true)}>
  NEW BOOKING
  </Button>{' '}
  <Button variant="secondary" size="lg" onClick={() => handleSearchQuery("")} >
    show all bookings
  </Button>
</>
            <div>
            <Search handleSearchQuery={handleSearchQuery}/>
            </div>
        </header>
    )
}

export default Header