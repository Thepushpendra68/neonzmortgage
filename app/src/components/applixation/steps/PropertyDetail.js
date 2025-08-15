

'use client';

import { useState } from "react";

const PropertyDetail = ({mortage_need, setStep, mortgage_bank, setMortgageBank, property_value, setPropertyValue, property_purchasing_type, setPropertyPurchasingType}) => {

  const [error, setError] = useState({field: null, message: null});
  const [bank, setBank] = useState([
    "Abu Dhabi Commercial Bank",
    "Abu Dhabi Islamic Bank",
    "Ajman Bank",
    "Al Hilal Bank",
    "Arab Bank for Investment and Foreign Trade",
    "Bank of Baroda",
    "Bank of Sharjah",
    "Commercial Bank International",
    "Commercial Bank of Dubai",
    "Dubai Islamic Bank",
    "Emirates Islamic Bank",
    "Emirates NBD",
    "First Abu Dhabi Bank",
    "HSBC Bank Middle East",
    "Invest Bank",
    "Mashreq Bank",
    "National Bank of Fujairah",
    "RAKBANK",
    "Sharjah Islamic Bank",
    "Standard Chartered Bank UAE",
    "United Arab Bank"
  ])

  const onNext = () => {
    setError({field: null, message: null})

    if(mortage_need === 'Mortgage Refinance' && !mortgage_bank){
      setError({field: 'bank', message: 'This field is mendatory'});
      return
    }
    if(mortage_need === 'New Purchase' && !property_purchasing_type){
      setError({field: 'type', message: 'This field is mendatory'});
      return
    }

    if(mortage_need === 'Mortgage Refinance' && !property_value){
      setError({field: 'value', message: 'This field is mendatory'})
      return;
    }

    setStep(3)
  }

     if(mortage_need == 'Mortgage Refinance'){
        return (
            <div className="form-journey">
                <div className="residency-wrapper">
         <div className="input-row residencey">
            <label className="text"><strong>Which bank is your mortgage with?</strong></label>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <select onChange={(e) => setMortgageBank(e.target.value)}>
                    <option value="">Select a option</option>
                    {bank.map((b, i) => <option key={`${b}-${i}`} value={b} selected={mortgage_bank === b ? true : false}>{b}</option>)}
                </select>
                {error.field == 'bank' && <span className="error-text text-sm">{error.message}</span>}
                </div>
                
            </div>
        
          </div>

          <div className="input-row residencey">
            <label className="text"><strong>Property Value</strong></label>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <input
                  value={property_value ? new Intl.NumberFormat().format(property_value) : ''}
                  onChange={(e) => {
                    // Remove all commas before converting to number
                    const rawValue = e.target.value.replace(/,/g, '');
                    if (!isNaN(rawValue)) {
                      setPropertyValue(rawValue);
                    }
                  }}
                  inputMode="numeric"
                  pattern="[0-9]*"
                   />
                </div>
                {error.field == 'value' && <span className="error-text text-sm">{error.message}</span>}
                
            </div>
        
          </div>
         </div>

                <div className="journet-nav">
                <button className="btn btn-primary btn-rounded journey-back" style={{minWidth: '80px'}} onClick={() => setStep(1)}>
                               
                                    <span className="text text-light">Back</span>
                                    
                                                                       </button>
                                     
                                      <button className="btn btn-primary btn-rounded journy" style={{minWidth: '80px'}} onClick={onNext}>
                                    
                                    <span className="text text-light text-center">Next</span>
                                  
                                    
                                                                       </button>
                               </div> 
            </div>

            
        )
     }

     if(mortage_need == 'New Purchase'){
        return (
            <div className="form-journey">
               

               <div className="residency-wrapper">
         <div className="input-row residencey">
            <label className="text"><strong>What type of property are you interested in?</strong></label>

            <div className="row g-3">
                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${property_purchasing_type === "Appartment" ? "active" : ""}`}
                onClick={() => setPropertyPurchasingType("Appartment")}
              >Appartment</button>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${property_purchasing_type === "Villa" ? "active" : ""}`}
                onClick={() => setPropertyPurchasingType("Villa")}
              >Villa</button>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${property_purchasing_type === "Not Decided Yet" ? "active" : ""}`}
                onClick={() => setPropertyPurchasingType("Not Decided Yet")}
              >Not Decided Yet</button>
                </div>
                
            </div>
            {error.field == 'type' && <span className="error-text text-sm">{error.message}</span>}
        
          </div>

        
         </div>


                <div className="journet-nav">
                <button className="btn btn-primary btn-rounded journey-back" style={{minWidth: '80px'}} onClick={() => setStep(1)}>
                                    
                              
                                    <span className="text text-light">Back</span>
                                    
                                                                       </button>
                                      
                                      <button className="btn btn-primary btn-rounded journy" style={{minWidth: '80px'}} onClick={onNext}>
                                    
                                    <span className="text text-light text-center">Next</span>
                                  
                                    
                                                                       </button>
                               </div> 
            </div>
        )
     }
}

export default PropertyDetail;