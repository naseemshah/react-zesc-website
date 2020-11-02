import React, {useState} from 'react';
import './tokenomics.css';
import underlineIcon from "./underline.svg";
import chartLogo from './chart-logo.svg'
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-deferred';
import rectPat from './rect-pat.svg'
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";



function TokenomicsSection() {
    //Icons
    //update data here
    let data = [
        {
            title: "Token Sale",
            value: 25,
        },
        {
            title: "Marketing",
            value: 10
        },
        {
            title: "Development",
            value: 15
        },
        {
            title: "Staking",
            value: 35
        },
        {
            title: "Team/Advisor",
            value: 10
        },
        {
            title: "Foundation Reserved",
            value: 5
        }       
    ]
    //Generated from data
    let dataValues = []
    let dataLables = []
    let colors = ['#00C689c9','#00C689c9','#2CE2AAc9','#46EBB8c9','#49FFC7c9','#79FFD6c9','#46EBB8'];
    let colorsHover = ['#00C689','#2CE2AA','#46EBB8','#49FFC7','#79FFD6','#46EBB8'];
    let [visited,setVisted] = useState(false);

    data.forEach(item =>{
        dataValues.push(item.value);
        dataLables.push(item.title);
    });

    let chartData = {
        labels: [...dataLables],
        options:{
            legend: {
                display: false,
            },
            plugins: {
                deferred: {
                    "xOffset": "20%", "delay": 500
                }
              }
        },
        datasets: [
            {
                data: [...dataValues],
                legend:{
                    display: false
                },
                
                borderWidth: 0,
                backgroundColor: [...colors],
                    hoverBackgroundColor: [...colorsHover]
            }
        ]
    }
    
    
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
      });

  return (
      <div ref={ref}>
          
          { inView && 
          <motion.section transition={{delay: 0.5, duration: 1}} initial={{opacity:0}} animate={{opacity: 1}} id="tokenomics-section">
            <div className="tokenomics-heading-container">
                <img
                className="rectPat3"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{ delay:1.2, duration: 1}}
                src={rectPat} alt="">
                </img>
                <div  className="lax" data-lax-preset="fadeIn">
                    <h1>Tokenomics</h1>
                    <img src={underlineIcon} alt=''></img>
                </div>
            </div>
            <div className="tokenomics-container">
                <div className="tokenomics-chart">
                    <Doughnut
                        className="lax"
                        data-lax-preset="spin"
                        data={chartData}
                        options={chartData.options}
                        // width={100}
                        height={200}
                    />
                    <div className="chart-logo"><img src={chartLogo} alt=""></img></div>
                    <div className="chart-total" >
                        <p>Total Supply 40,000</p>
                        <p>Max. Supply 40,000</p>                        
                    </div>
                </div>
                <div className="tokenomics-legends lax" >
                    <ul>
                    {
                        data.map((item,id)=>{
                            return (
                            <div key={id} style={{display: 'flex', alignContent: 'center'}}>
                                <div style={{width:10, height:10, backgroundColor: colors[id], margin: '10px'}}></div>
                                <li key={id}>
                                    {item.value + '% ' + item.title}
                                </li>
                            </div>
                            )
                        })
                    }
                    </ul>                
                </div>
            </div>
           
        </motion.section>
        }

      </div>
        
  );
}

export default TokenomicsSection;