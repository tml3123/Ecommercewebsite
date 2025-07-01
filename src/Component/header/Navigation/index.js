import Button from '@mui/material/Button';
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import { GiAmpleDress } from "react-icons/gi";
import { RiWirelessChargingLine } from "react-icons/ri";
import { MdOutlineBakeryDining } from "react-icons/md";
import { GiMilkCarton } from "react-icons/gi";
import { CiMobile1 } from "react-icons/ci";
import { PiGitlabLogoFill } from "react-icons/pi";
import { IoIosContacts } from "react-icons/io";
const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-2 navpart1'>

            <Button className='allcatTab align-content-center'>
              <span className='icon1 mr-2'><IoMenu /></span>
              <span class="text" >ALL DIVISIONS</span>
              <span className='ml-2 icon2'><FaAngleDown /></span>
            </Button>

          </div>

          <div className='col-sm-10 navPart2 d-flex align-items-center'>

            <ul className='list list-inline w-100 ml-auto'>
              <li className='list-inline-item'><Link to="/"><Button><CiHome /> &nbsp;Home</Button></Link></li>
              <li className='list-inline-item'><Link to="/"><Button><GiAmpleDress />Fashion</Button></Link></li>
              <li className='list-inline-item'><Link to="/"><Button><RiWirelessChargingLine />Electronic</Button></Link></li>
              <li className='list-inline-item'><Link to="/"><Button><MdOutlineBakeryDining />Bakery</Button></Link></li>
              <li className='list-inline-item'><Link to="/"><Button><GiMilkCarton />Grocery</Button></Link></li>
              <li className='list-inline-item'><Link to="/"><Button><CiMobile1 />Gadgets</Button></Link></li>
              <li className='list-inline-item'><Link to="/"><Button><PiGitlabLogoFill />blog</Button></Link></li>
              <li className='list-inline-item'><Link to="/"><Button><IoIosContacts />Contact</Button></Link></li>
            </ul>

          </div>

        </div>

      </div>
    </nav>
  )
}
export default Navigation