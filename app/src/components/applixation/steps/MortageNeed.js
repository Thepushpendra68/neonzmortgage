'use client';

import { useState, useEffect, useRef } from "react"


const MortageNeed = ({setStep, looking_for, setLookingFor, residency_status, setResedencyStatus}) => {

   const [error, setError] = useState({field: null, message: null}) 

   const didMount = useRef(false);

   

    const onNext = () => {

      setError({field: null, message: null})

      if(!looking_for){
        setError({field: 'looking', message: 'Please select one option'});
        return
      }

      if(!residency_status){
        setError({field: 'status', message: 'Please select one option'});
        return
      }

      setStep(2)

    }

    useEffect(() => {

      if(didMount.current){
      if(looking_for && residency_status){
        setStep(2)
      }
      }else{
        didMount.current = true;
      }
     
    }, [looking_for, residency_status])

    return (
        <div className="form-journey">
           
         <div className="residency-wrapper">
         <div className="input-row residencey">
            <label className="text"><strong>What are you looking for?</strong></label>
            <div className="row g-3">
                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${looking_for === "New Purchase" ? "active" : ""}`}
                onClick={() => setLookingFor("New Purchase")}
              >New Purchase</button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${looking_for === "Mortgage Refinance" ? "active" : ""}`}
                onClick={() => setLookingFor("Mortgage Refinance")}
              >Mortgage Refinance</button>
                </div>
            </div>
            {error.field == 'looking' && <span className="error-text text-sm">{error.message}</span>}
        
          </div>

          <div className="input-row residencey">
            <label className="text"><strong>What is your residency status?</strong></label>
            <div className="row g-3">
                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${residency_status === "UAE Resident" ? "active" : ""}`}
                onClick={() => setResedencyStatus("UAE Resident")}
              >UAE Resident</button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${residency_status === "Non Resident" ? "active" : ""}`}
                onClick={() => setResedencyStatus("Non Resident")}
              >Non Resident</button>
                </div>
            </div>
            {error.field == 'status' && <span className="error-text text-sm">{error.message}</span>}
        
          </div>
         </div>

            <div className="journet-nav">
                                   {/* <button className="btn btn-primary btn-rounded journey-back" style={{minWidth: '80px'}}>
                                    

<span className="text text-light">Back</span>

                                   </button> */}
                                     
                                   <button className="btn btn-primary btn-rounded journy" style={{minWidth: '80px'}} onClick={onNext}>
                                    
<span className="text text-light text-center">Next</span>


                                   </button>
                               </div> 
        </div>
    )
}

export default MortageNeed