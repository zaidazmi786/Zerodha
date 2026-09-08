import React from 'react'
import Hero from "./Hero"
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Univers';
import OpenAccount from "../OpenAccount";
function ProductPage() {
    return (  
       <>
       <Hero/>
       <LeftSection/>
       <RightSection/>
       <LeftSection/>
       <Universe/>
        <OpenAccount />
       </>
    );
}

export default ProductPage;