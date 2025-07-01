import { Link } from 'react-router-dom';
import our_brand from '../../assets/images/our_brand.jpg';
import CountryDropdown from '../countrydropdown'; // Note the capitalization for consistency
import { FiUser } from "react-icons/fi";
import Button from '@mui/material/Button';

import { GiShoppingCart } from "react-icons/gi";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { useContext } from 'react';
import { MyContext } from '../../App';


const Header = () => {


    const context =useContext(MyContext);


    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-grey">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center"><b>Opportunities to Mitigate </b>Delays and Enhance Operations</p>
                    </div>
                </div>

                <header className="header">
                    <div className="container ">
                        <div className="row">
                            <div className="logowrapper d-flex align-items-center col-sm-1">
                                <Link to={'/'}>
                                    <img src={our_brand} alt='logo' />
                                </Link>
                            </div>
                            <div className='col-sm-10 d-flex align-items-center part2'>

{
    context.countryList.length!==0 &&<CountryDropdown /> 
}



                                {/* Integrated the countryDropdown component */}
                              <SearchBox/>

                                <div className='part3 d-flex align-items-center ml-auto'>
                                    <Button className='circle mr-3'>
                                        <FiUser />
                                    </Button>

                                    <div className='ml-auto cartTab d-flex align-items-center'>
                                        <span className='price'>$3.29</span>

                                        <div className=' position-relative ml-2'>

                     <Button className='circle'><GiShoppingCart /></Button>

<span className='count d-flex align-items-center justify-content-center'>1</span>

                                        </div>


                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                </header>


                

               <Navigation/>
            </div>
        </>
    );
};

export default Header;