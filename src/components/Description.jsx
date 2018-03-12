import React from 'react';
import gb01 from '../imgs/gb01.jpg'
import gb02 from '../imgs/gb02.jpg'
import styled from 'styled-components'

const DescriptionStyle = styled.div`
    overflow: auto;
    img {
        float: left;
    }
`
const DescriptionStyle2 = styled.div`
    overflow: auto;
    img {
        float: right;
    }
`

const Description = () => {
    return (
        <div>
            <h2>North Atlanta's Premier Fighting Game Tournament</h2>
            <div>
                <DescriptionStyle>
                    <p><img src={gb01} alt="gbrawl1" className="img-fluid" width={600} height={337.5} />Congratulations, you played yourself. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? To succeed you must believe. When you believe, you will succeed. How’s business? Boomin. Don’t ever play yourself.</p>
                </DescriptionStyle>
            </div>
            <div>
                <DescriptionStyle2>
                    <p><img src={gb02} alt="gbrawl2" className="img-fluid" width={600} height={337.5} />Congratulations, you played yourself. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. Put it this way, it took me twenty five years to get these plants, twenty five years of blood sweat and tears, and I’m never giving up, I’m just getting started. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? To succeed you must believe. When you believe, you will succeed. How’s business? Boomin. Don’t ever play yourself.</p>
                </DescriptionStyle2>
            </div>
        </div>
    );
};

export default Description;