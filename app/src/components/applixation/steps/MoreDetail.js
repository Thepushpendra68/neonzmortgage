'use client';

import { useState } from "react";
import Select from 'react-select';
import { getNames } from 'country-list';

const options = getNames().map(country => ({
  label: country,
  value: country,
}));

const More = ({setStep, dob, setDob, passport_country, setPassportCountry, hold_uaepassport}) => {

  const [error, setError] = useState({field: null, message: null});

  const onNext = () => {
    setError({field: null, message: null});

    if(!dob){
      setError({field: 'dob', message: "This field is required"});
      return
    }
    
    setStep(8)
  }


    return (
        <div className="form-journey">
           
           <div className="residency-wrapper">
         <div className="input-row residencey">
            <label className="text"><strong>DOB</strong></label>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  
                    <input value={dob} onChange={(e) => setDob(e.target.value)} type="date" />
                    {error.field == 'dob' && <span className="error-text text-sm">{error.message}</span>}
               
                </div>
               
            </div>
        
          </div>

          {hold_uaepassport === "No" ? (<div className="input-row residencey">
            <label className="text"><strong>What passport do you hold?</strong></label>
            <div className="row g-3">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  {/* <select name="" id="" onChange={(e) => setPassportCountry(e.target.value)}>
                    <option value="">Select a option</option>
                    <option selected={passport_country === "country1" ? true : false} value="country1">country1</option>
                    <option selected={passport_country === 'countru2' ? true : false} value="countru2">countru2</option>
                  </select> */}
                  <Select
      options={options}
      value={options.find(option => option.value === passport_country)}
      onChange={option => setPassportCountry(option.value)}
      placeholder="Select a country"
      isSearchable
    />
                </div>
                
            </div>
            {error.field == 'con' && <span className="error-text text-sm">{error.message}</span>}
        
          </div>) : null}

          
         </div>


            <div className="journet-nav">
            <button className="btn btn-primary btn-rounded journey-back" style={{minWidth: '80px'}} onClick={() => setStep(6)}>
                                    
                                    
                                    <span className="text text-light">Back</span>
                                    
                                                                       </button>
                                     
                                      <button className="btn btn-primary btn-rounded journy" style={{minWidth: '80px'}} onClick={onNext}>
                                    
                                    <span className="text text-light text-center">Next</span>
                                   
                                    
                                                                       </button>
                               </div>
        </div>
    )
}

export default More;