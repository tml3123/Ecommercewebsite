import React, { useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa6';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { MdClose } from "react-icons/md";
import Slide from '@mui/material/Slide';
import { createContext} from "react";
import { MyContext } from '../../App';

import { IoSearch } from "react-icons/io5";
import { useState } from 'react';
const CountryDropdown = () => {

    const [isOpenModal,setisOpenModal]=useState(false);

    const [seletedTab,setseletedTab]=useState(null)

    const context =useContext(MyContext);

const selectCountry =(index)=>{
    setseletedTab(index);
    setisOpenModal(false)
}

    
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

    return (
        <>
            <Button className='countryDrop' onClick={()=>setisOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>USA</span>
                </div>
                <span className='ml-auto '><FaAngleDown/></span>

            </Button>
        <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)} className ='locationModal'>
     
     <h4>Choose your Delivery Location</h4>
     <p>Enter your address and we will specify the offer for your area.</p>
     <Button className='close_' onClick={()=>setisOpenModal(false)}><MdClose /></Button>

           <div className='headerSearch w-100'>
                                    <input type='text' placeholder='Search your area...' />
                                    <Button>
                                        <IoSearch />
                                    </Button>

                                </div>


                                <ul className='countryList mt-3'>
                                    
                                    {
                                        MyContext.countryList?.length!==0 && context.countryList?.map((item,index)=>{
                                            return(
                                                 <li key={index}><Button onClick={()=>selectCountry(index)}
                                                 className={`${seletedTab===index ?'active':''}`}
                                                 >{item.country}</Button></li>
                                            )
                                        })
                                    }
                                    
                                    
     
                                    
                                     </ul>
    </Dialog>
        </>
    );
};

export default CountryDropdown;



