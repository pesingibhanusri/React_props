import Menuitems from "../../utiles/menuitems/MenuItems"

const Header =()=>{
    return(
        <div className="header"><img className="logo"src="https://vismaifood.com/themes/pivisions/assets/images/logo.png"></img>
           <Menuitems></Menuitems>
           <h3 className="para">Site also available in:
           Telugu</h3>
        </div>
    )
}
export default Header