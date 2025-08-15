'use client';


import { useState, useRef, useEffect } from "react";

const Resident = ({residency_status, setStep, hold_uaepassport, setHoldPassport, resident_of_uae, setResidentOfuae}) => {

  const [error, setError] = useState({field: null, message: null});

  const didMount = useRef(false);

    useEffect(() => {

       if(didMount.current){
        if(resident_of_uae){
          setStep(7)
        }
        }else{
          didMount.current = true;
        }

       
       
    }, [resident_of_uae])

  const onNext = () => {
    setError({field: null, message: null});

    if(!resident_of_uae){
      setError({field:'res',message:'This field is mandatory.'})
    }

    setStep(7);
  }
    return (
        <div className="form-journey">
            <div className="residency-wrapper">
         {/* {residency_status === 'UAE Resident' ? (<div className="input-row residencey">
            <label className="text"><strong>Do you hold a UAE passport?</strong></label>
            <div className="row g-3">
            <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${hold_uaepassport === "Yes" ? "active" : ""}`}
                onClick={() => setHoldPassport("Yes")}
              >Yes</button>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${hold_uaepassport === "No" ? "active" : ""}`}
                onClick={() => setHoldPassport("No")}
              >No</button>
                </div>
              
                
            </div>
            {error.field == 'pas' && <span className="error-text text-sm">{error.message}</span>}
        
          </div>) : null} */}

          <div className="input-row residencey">
            <label className="text"><strong>Are you a resident of the UAE?</strong></label>
            <div className="row g-3">
            <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${resident_of_uae === "Yes" ? "active" : ""}`}
                onClick={() => setResidentOfuae("Yes")}
              >Yes, I am an Expat living in UAE</button>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${resident_of_uae === "No" ? "active" : ""}`}
                onClick={() => setResidentOfuae("No")}
              >No, I am not living in UAE</button>
                </div>
                
                
            </div>
            {error.field == 'res' && <span className="error-text text-sm">{error.message}</span>}
        
          </div>

         
         </div>

            <div className="journet-nav">
            <button className="btn btn-primary btn-rounded journey-back" style={{minWidth: '80px'}} onClick={() => setStep(5)}>
                                    
                                 
                                    <span className="text text-light">Back</span>
                                    
                                                                       </button>
                                     
                                      <button className="btn btn-primary btn-rounded journy" style={{minWidth: '80px'}} onClick={onNext}>
                                    
                                    <span className="text text-light text-center">Next</span>
                                
                                    
                                                                       </button>
                               </div>
        </div>
    )
}

export default Resident;