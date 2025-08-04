'use client';
import { useState } from "react";

export default function Hometab () {

    const [tabState, setTabState] = useState(1);


    return(
        <div>
         <div className="about-content" style={{marginBottom: '15px'}}>
                        <div className="ta" style={{display: 'flex', alignItems: 'center', gap:'8px'}}>
                                <h5 className="text" onClick={() => setTabState(1)} style={{cursor: 'pointer', fontSize: '16px', border: '1px solid black', padding: '4px 8px', borderRadius: '14px', color: tabState === 1 ? 'white' : 'black', background: tabState === 1 ? 'black' : 'transparent'}}>UAE Resident</h5>
                                <h5 className="text" onClick={() => setTabState(2)} style={{cursor: 'pointer', fontSize: '16px', border: '1px solid black', padding: '4px 8px', borderRadius: '14px', color: tabState === 2 ? 'white' : 'black', background: tabState === 2 ? 'black' : 'transparent'}}>UAE National</h5>
                                <h5 className="text" onClick={() => setTabState(3)} style={{cursor: 'pointer', fontSize: '16px', border: '1px solid black', padding: '4px 8px', borderRadius: '14px', color: tabState === 3 ? 'white' : 'black', background: tabState === 3 ? 'black' : 'transparent'}}>Non-Resident of the UAE</h5>
                        </div>
                        </div>
                        <p className="text" style={{display: tabState == 1 ? 'block' : 'none'}}>Discover the best mortgage options in the UAE tailored for residents, with low mortgage rates and flexible repayment plans to make your dream home a reality.</p>
                        <p className="text" style={{display: tabState == 2 ? 'block' : 'none'}}>As a UAE national, unlock exclusive mortgage offers in the UAE with the best interest rates, high loan-to-value ratios, and personalized solutions for your homeownership.</p>
                        <p className="text" style={{display: tabState == 3 ? 'block' : 'none'}}>Explore mortgage opportunities in the UAE for non-residents, designed to help you invest in Dubai&apos;s thriving real estate market, even from abroad.</p>

        </div>
    )
}