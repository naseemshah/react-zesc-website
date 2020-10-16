import React from 'react';
import './hero.css';
import heroImage from './hero-image.svg';




function Navbar() {

  return (
        <section>
            <img src={heroImage} alt="HeroImage"></img>
            <h1>ZSEC protocol is the world’s first E-commerce project
            combining yield farming,staking with deflationary
            components in a DEFI ecosystem.
            </h1>
            <p>Purchasing real world products, collectibles, game skins</p>
            <div>
                <button>Uniswap</button>
                <button>Community</button>
            </div>
        </section>
  );
}

export default Navbar;