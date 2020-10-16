import React from 'react';
import './stats.css';

function statsSection() {
    let PricesItems = [
        {
            title: "Price",
            dollar: "$0.0456",
            BTC: "0.O2345 BTC"
        },
        {
            title: "Volume",
            dollar: "$345.45",
            BTC: "0.O2345 BTC"
        },
        {
            title: "Marketcap",
            dollar: "$345.45",
            BTC: "0.O2345 BTC"
        }
    ]

  return (
        <section id="statsSection">
            <div className="prices-container">
                {PricesItems.map((item,id) =>{
                    return (
                    <div key={id}>
                        <h2>{item.title}</h2>
                        <p className="prices-dollar">{item.dollar}</p>
                        <p className="prices-BTC">{item.BTC}</p>
                    </div>
                    )
                })}
                
            </div>
            
            
        </section>
  );
}

export default statsSection;