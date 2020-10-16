import React from 'react';
import './coreFeatures.css';
import underlineIcon from "./underline.svg";


function CoreFeaturesSection() {
    //Icons
    let contents = [
        {
            title: 'An E-commerce project with a DeFi integration',
            icon: '/assets/img/cart.svg',
            desc: 'ZSEC protocol is a DeFi resolution that’s on purpose to present where so many other projects have crashed. It’s invented to be a project that is a connection between De fiand E-Commerce.'
        },
        {
            title: 'Staking',
            icon: '/assets/img/staking.svg',
            desc: 'ZSEC protocol is a decentralised finance (Defi) platform to present a resolution for Defi to entry e-commerce such as shopping staking.'
        },
        {
            title: 'Yield Farming',
            icon: '/assets/img/yield.svg',
            desc: 'ZSEC protocol is a DeFi resolution that’s on purpose to present where so many other projects have crashed. It’s invented to be a project that is a connection between De fiand E-Commerce.'
        },
        {
            title: 'Buy Back',
            icon: '/assets/img/buyBack.svg',
            desc: 'When the number of tokens in the shopping capital is burned. A farther quantity of tokens will be repurchased from the store. This method renewed over time and will significantly expand the value of ZSEC protocol.'
        }
    ]
   
  return (
        <section id="coreFeaturesSection">
            <div className="core-features-heading-container">
                <h1>Core Features</h1>
                <img src={underlineIcon} alt=''></img>
            </div>
            <div className="core-features-contents">
                {
                    contents.map((item,id)=>{
                        return (
                            <div className="feature-container" key={id}>
                                <img src={item.icon} alt={item.title}></img>
                                <p>{item.title}</p>
                                <p>{item.desc}</p>
                            </div>
                        )
                    })
                }                
            </div>

        </section>
  );
}

export default CoreFeaturesSection;