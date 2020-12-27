import React from "react"

import OnlineMenu from "../../components/OnlineMenu"
import Banner from "../../components/Banner"


function CathcartOnlineMenu(){
    return(
        <div>
          <Banner 
           directory="Cathcart Online Menu"
          />
          <OnlineMenu 
          storeMenu={"Menu Goes Here"}
          />
        </div>
    )
}

export default CathcartOnlineMenu;