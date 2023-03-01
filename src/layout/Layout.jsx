import Nav from "../components/common/Nav";
import {VscHome} from "react-icons/vsc";
import {BsReceipt, BsFiles, BsShop, BsCreditCard} from "react-icons/bs";
import {MdOutlinePermContactCalendar} from "react-icons/md";
import {GoPackage} from "react-icons/go";
import {AiOutlinePercentage, AiOutlineBell} from "react-icons/ai";
import {TfiMedall, TfiMenuAlt} from "react-icons/tfi";
import {FiHeadphones} from "react-icons/fi";
import {HiOutlineUsers} from "react-icons/hi";
import "../layout/Layout.css";
import { Link } from "react-router-dom";
const Layout = ({children}) => {
  const dataNav = [
    { icon: <VscHome className='icon' style={styles.icon} />, link: '/' },
    { icon: <BsReceipt className='icon' style={styles.icon} />, link: '/' },
    { icon: <BsFiles className='icon' style={styles.icon} />, link: '/' },
    { icon: <MdOutlinePermContactCalendar className='icon' style={styles.icon} />, link: '/' },
    { icon: <BsShop className='icon' style={styles.icon} />, link: '/' },
    { icon: <GoPackage className='icon' style={styles.icon} />, link: '/' },
    { icon: <AiOutlinePercentage className='icon' style={styles.icon} />, link: '/' },
    { icon: <BsCreditCard className='icon' style={styles.icon} />, link: '/' },
    { icon: <AiOutlineBell className='icon' style={styles.icon} />, link: '/' },
    { icon: <TfiMedall className='icon' style={styles.icon} />, link: '/' },
    { icon: <FiHeadphones className='icon' style={styles.icon} />, link: '/' },
    { icon: <TfiMenuAlt className='icon' style={styles.icon} />, link: '/' },
    { icon: <HiOutlineUsers className='icon' style={styles.icon} />, link: '/' },
  ]
  return (
    <div classNameName="App" style={{backgroundColor: "#e5e5e5"}}> 
      <header classNameName="App-header">
        <Nav />
      </header>
      <div className="d-flex">
        <aside style={styles.sidebar}>
            {dataNav.map(d => <Link to={d.link}>{d.icon}</Link>)}
        </aside>
        <main className="px-3 py-2" style={{flex: 1}}>
            {children}
        </main>
    </div>
    </div>
  );
}

const styles = {
  sidebar:{
    width: "2rem",
    position: "sticky",
    backgroundColor: "#283848",
    padding: "2rem",
    display: "flex",
    flexDirection:"column",
    justifyContent: 'start',
    alignItems: 'center',
    boxShadow: "3px 0px 10px #00000029"
  },
  icon:{
    color: "white", 
    fontSize: "1.65em",
    marginBottom: "2rem"
  },
  receipt:{
    width: "30px",
    height: "30px",
    color: 'white'
  },
}

export default Layout;
