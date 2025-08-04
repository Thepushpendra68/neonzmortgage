'use client';
import { useState } from "react";

const Budget = ({setStep, max_amount_willing_to_spend, setMAxSpend}) => {

  const [error, setError] = useState({field: null, message: null});

  const onNext = () => {
    setError({field: null, message: null});

    if(!max_amount_willing_to_spend){
      setError({field: 'b', message: "This field is mendatory"});
      return
    }

    if(parseInt(max_amount_willing_to_spend.split(',').join('')) < 400000){
      setError({field: 'b', message: "Propery value can not be less tha 400,000"});
      return
    }

    setStep(4)
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
            <label className="text"><strong>Mention the maximum amount you are willing to spend on the property</strong></label>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                       
<div className="input-row">
              <div className="input-row-symbol">
                <input
                  type="text"
                  value={max_amount_willing_to_spend || 0}
                  onChange={(e) => setMAxSpend(formatNumber(parseNumber(e.target.value)))}
                />
                <span className="secondary-heading">AED</span>
              </div>
            </div>
              
                  {/* <input value={max_amount_willing_to_spend ? new Intl.NumberFormat().format(max_amount_willing_to_spend.replace(/,/g, '')) : ''} onChange={(e) => setMAxSpend(e.target.value)} inputMode="numeric" pattern="[0-9]*" /> */}
                  {error.field == 'b' && <span className="error-text text-sm">{error.message}</span>}
                </div>
                
            </div>
        
          </div>

          
         </div>

            <div className="journet-nav">
            <button className="btn btn-primary btn-rounded journey-back" style={{minWidth: '80px'}} onClick={() => setStep(2)}>
                                    <span className="text text-light">Back</span>
                                    
                                                                       </button>
                                      <button className="btn btn-primary btn-rounded journy" style={{minWidth: '80px'}} onClick={onNext}>
                                    
                                    <span className="text text-light text-center">Next</span>
                              
                                    
                                                                       </button>
                               </div>
        </div>
    )
}

export default Budget;