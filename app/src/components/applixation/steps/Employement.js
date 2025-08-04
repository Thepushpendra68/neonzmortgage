'use client';

import { useState, useRef, useEffect } from "react";

const Employment = ({setStep, employement_status, setEmployement, application_type, setApplicationType}) => {

    const [error, setError] = useState({field: null, message: null});

    const didMount = useRef(false);

    useEffect(() => {

       if(didMount.current){
        if(employement_status && application_type){
          setStep(9)
        }
        }else{
          didMount.current = true;
        }

       
       
    }, [employement_status, application_type])

    const onNext = () => {
        setError({field: null, message: null});

        if(!employement_status){
            setError({field: 'es', message: "This field is required"})
            return
        }
        if(!application_type){
            setError({field: 'at', message: "This field is required"})
            return
        }

        setStep(9)
    }
    return (
        <div className="form-journey">
            

            <div className="residency-wrapper">
         <div className="input-row residencey">
            <label className="text"><strong>What’s your employment status?</strong></label>
            <div className="row g-3">
                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${employement_status === "Salaried" ? "active" : ""}`}
                onClick={() => setEmployement("Salaried")}
              >Salaried</button>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${employement_status === "Self-Employed" ? "active" : ""}`}
                onClick={() => setEmployement("Self-Employed")}
              >Self-Employed</button>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${employement_status === "Other Source" ? "active" : ""}`}
                onClick={() => setEmployement("Other Source")}
              >Other Source</button>
                </div>
                
            </div>
            {error.field == 'es' && <span className="error-text text-sm">{error.message}</span>}
        
          </div>

          <div className="input-row residencey">
            <label className="text"><strong>Would you be applying for a single or a joint application ?</strong></label>
            <div className="row g-3">
                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${application_type === "Single" ? "active" : ""}`}
                onClick={() => setApplicationType("Single")}
              >Single</button>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${application_type === "Joint" ? "active" : ""}`}
                onClick={() => setApplicationType("Joint")}
              >Joint</button>
                    
               
                </div>
                
            </div>
            {error.field == 'at' && <span className="error-text text-sm">{error.message}</span>}
        
          </div>

          

          
         </div>


            <div className="journet-nav">
            <button className="btn btn-primary btn-rounded journey-back" style={{minWidth: '80px'}} onClick={() => setStep(7)}>
                                    
                                  
                                    <span className="text text-light">Back</span>
                                    
                                                                       </button>
                                      
                                      <button className="btn btn-primary btn-rounded journy" style={{minWidth: '80px'}} onClick={onNext}>
                                    
                                    <span className="text text-light text-center">Next</span>
                                    
                                    
                                                                       </button>
                               </div>
        </div>
    )
}

export default Employment;