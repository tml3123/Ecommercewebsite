import React from 'react'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

function SearchBox() {
  return (
   
           <div className='headerSearch ml-3 mr-3'>
                                    <input type='text' placeholder='Search for products' />
                                    <Button>
                                        <IoSearch />
                                    </Button>

                                </div>

  )
}

export default SearchBox