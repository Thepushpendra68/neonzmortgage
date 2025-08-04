'use client';

import { useState } from "react";

const Financial = ({setStep, monthly_income, setMonthlyIncome, mortage_need}) => {

    const [error, setError] = useState({field: null, message: null});

    const onNext = () => {
        if(!monthly_income){
            setError({field: 'b', message: 'This field is mendatory'});
            return
        }

        if(parseInt(parseNumber(monthly_income)) <  10000){
            setError({field: 'b', message: 'Minimum Salary Required 10000 AED'});
            return
        }

        setStep(5)
    }

    const back = () => {
        if(mortage_need !== 'New Purchase'){
          setStep(2)
        }else{
          setStep(3)
        }
    }

    const parseNumber = (num) => parseFloat(String(num).replace(/,/g, "")) || 0;

    
    const formatNumber = (num) => {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };
    
    return (
        <div className="form-journey">
            <div className="residency-wrapper">
         <div className="input-row residencey">
            <label className="text"><strong>What’s your monthly income?</strong></label>
            {/* <div className="row g-3">
                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${monthly_income === "10,000 - 20,000 AED" ? "active" : ""}`}
                onClick={() => setMonthlyIncome("10,000 - 20,000 AED")}
              >10,000 - 20,000 AED</button>
                </div>
                
                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${monthly_income === "20,000 - 30,000 AED" ? "active" : ""}`}
                onClick={() => setMonthlyIncome("20,000 - 30,000 AED")}
              >20,000 - 30,000 AED</button>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${monthly_income === "30,000+ AED" ? "active" : ""}`}
                onClick={() => setMonthlyIncome("30,000+ AED")}
              >30,000+ AED</button>
                </div>
                
            </div> */}

            <div className="row g-3">
               <div className="col-sm-12 col-md-6 col-lg-6">
<div className="input-row">
              <div className="input-row-symbol">
                <input
                  type="text"
                  value={monthly_income || 0}
                  onChange={(e) => setMonthlyIncome(formatNumber(parseNumber(e.target.value)))}
                />
                <span className="secondary-heading">AED</span>
              </div>
            </div>
               </div>
            </div>

            {error.field == 'b' && <span className="error-text text-sm">{error.message}</span>}
        
          </div>

          

          
         </div>

            <div className="journet-nav">
            <button className="btn btn-primary btn-rounded journey-back" style={{minWidth: '80px'}} onClick={back}>
                                    
                                    
                                    <span className="text text-light">Back</span>
                                    
                                                                       </button>
                                     
                                      <button className="btn btn-primary btn-rounded journy" style={{minWidth: '80px'}} onClick={onNext}>
                                    
                                    <span className="text text-light text-center">Next</span>
                                    
                                    
                                                                       </button>
                               </div>
        </div>
    )
}

export default Financial;