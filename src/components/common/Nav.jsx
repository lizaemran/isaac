import React from "react";
import {BsFillBasket2Fill} from 'react-icons/bs';
import {AiOutlineMenu} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';

const Nav = () => {
  return (
    <div style={styles.navContainer}>
    <div style={styles.nav} className='justify-content-between p-3'>
      <div>
      <BsFillBasket2Fill style={styles.icon} />
      <AiOutlineMenu className="mx-4" style={styles.icon} />
      </div>
      <div>
      <BiSearch className="mx-4" style={styles.icon} />
      <img src="/11.png" alt="image" style={styles.avatar}/>
      </div>
    </div>
    </div>
  )
}

const styles = {
  nav:{
    backgroundColor: '#283848',
    display: "flex",
    flexWrap: "wrap",
  },
  navContainer:{
    position: "sticky",
    top: "0px"
  },
  avatar:{
    borderRadius: "50%",
    width: "30px",
    height: "30px"
  },
  icon: { 
    color: "white", 
    fontSize: "1.5em" 
}
}

export default Nav;