'use client';

import dynamic from "next/dynamic";

const IntlTelInput = dynamic(() => import('intl-tel-input/reactWithUtils'), {
  ssr: false,
});

import { useState } from "react";
import { validateEmail } from "@/utils/validator";
import 'intl-tel-input/build/css/intlTelInput.css'

const PersonalDetail = ({
  onSubmit,
  setStep,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone
}) => {


    const [isValidMobile, setIsValidMobile] = useState(true);

    const [error, setError] = useState({field: null, message: null});
  
  
    const [invalid, setInvalid] = useState({field: null, message: ''});
  
    const setIsValid = (v) => {
  
      setIsValidMobile(v)
  
    }

    const handleSubmit = async () => {
           setError({field: null, message: null});

            if(!name){
                setError({field: 'name', message: "This field is required"});
                return
            }
            if(!email){
                setError({field: 'email', message: "This field is required"})
                return
            }
            if(!validateEmail(email)){
                setError({field: 'email', message: "Invalid email"})
                return
            }
    
            if (!isValidMobile) {
                setError({ field: "phone", message: "Invalid mobile number." });
                return
            }

            await onSubmit();
          setStep(6)
        }


    return (
        <div className="form-journey">
            <div className="residency-wrapper">
         <div className="input-row residencey">
            <label className="text"><strong>Your Name</strong></label>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
                    {error.field == 'name' && <span className="error-text text-sm">{error.message}</span>}
               
                </div>
                
            </div>
        
          </div>

          <div className="input-row residencey">
            <label className="text"><strong>Your Email</strong></label>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                  {error.field == 'email' && <span className="error-text text-sm">{error.message}</span>}
                </div>
                
            </div>
        
          </div>

          <div className="input-row residencey">
            <label className="text"><strong>Your Phone</strong></label>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                <IntlTelInput
    value={phone}
    onChangeNumber={(n) => setPhone(n)}
    onChangeValidity={setIsValid}
    initOptions={{
        initialCountry: "ae",
    }}
/>
{error.field == 'phone' && <span className="error-text text-sm">{error.message}</span>}
                </div>
                
            </div>
        
          </div>
         </div>

            <div className="journet-nav">
            <button className="btn btn-primary btn-rounded journey-back" style={{minWidth: '80px'}} onClick={() => setStep(4)}>
                                    
                        
                                    <span className="text text-light">Back</span>
                                    
                                                                       </button>
                                     
                                      <button className="btn btn-primary btn-rounded journy" style={{minWidth: '80px'}} onClick={handleSubmit}>
                                    
                                    <span className="text text-light text-center">Next</span>
                                
                                    
                                                                       </button>
                               </div>
        </div>
    )
}

export default PersonalDetail;