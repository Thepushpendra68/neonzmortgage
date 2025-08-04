'use client';

import { useState, useRef, useEffect } from "react";

const FinancialDetail = ({
  mortage_need,
  setStep,
  outstanding_loan_amount,
  setOutstandingLoanAmount,
  monthly_installment_amount,
  setMonthlyInstallement,
  remaining_tenure,
  setRemainingTenure,
  property_finding_status,
  setPropertyFindingStatus,
  looking_for_move,
  setLookingForMove
}) => {


  const [error, setError] = useState({field: null, message: null});

  const didMount = useRef(false);

  const onNext = () => {

    setError({field: null, message: null});


    if(mortage_need === 'Mortgage Refinance'){
      if(!outstanding_loan_amount){
        setError({field: 'loanamount', message: "This field is required"})
        return;
      }
      if(!monthly_installment_amount){
        setError({field: 'emi', message: "This field is required"})
        return;
      }
      if(!remaining_tenure){
        setError({field: 'tenure', message: "This field is required"})
        return;
      }
    }

    if(mortage_need === 'New Purchase'){
      if(!property_finding_status){
        setError({field: 'search', message: "This field is mendatory"})
        return;
      }
      if(!looking_for_move){
        setError({field: 'move', message: "This field is mendatory"})
        return;
      }
    }

    if(mortage_need === 'New Purchase'){
      setStep(3)
    }else{
      setStep(4)
    }

    


  }

  useEffect(() => {

    if(mortage_need === 'New Purchase'){

       if(didMount.current){
        if(property_finding_status && looking_for_move){
          setStep(3)
        }
        }else{
          didMount.current = true;
        }

    }
  
       
       
      }, [property_finding_status, looking_for_move])

         const parseNumber = (num) => parseFloat(String(num).replace(/,/g, "")) || 0;

    
    const formatNumber = (num) => {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };
  

    if(mortage_need == 'Mortgage Refinance'){
       return (
           <div className="form-journey">
                <div className="residency-wrapper">
         <div className="input-row residencey">
            <label className="text"><strong>Outstanding Loan Amount </strong></label>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  
                    <input
                     value={outstanding_loan_amount || 0}

                  onChange={(e) => {setOutstandingLoanAmount(formatNumber(parseNumber(e.target.value)))}}
                  type="text"
                      />
                    {error.field == 'loanamount' && <span className="error-text text-sm">{error.message}</span>}
               
                </div>
               
            </div>
        
          </div>

          <div className="input-row residencey">
            <label className="text"><strong>Monthly Installment Amount</strong></label>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <input value={monthly_installment_amount || 0} onChange={(e) => setMonthlyInstallement(formatNumber(parseNumber(e.target.value)))} type="text" />
                  {error.field == 'emi' && <span className="error-text text-sm">{error.message}</span>}
                </div>
               
            </div>
        
          </div>

          <div className="input-row residencey">
            <label className="text"><strong>Remaining Tenure</strong></label>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                 <select
 
  onChange={(e) => setRemainingTenure(Number(e.target.value))}
>
  <option value="">Select an option</option>
  {Array.from({ length: 25 }, (_, i) => i + 1).map((num) => (
    <option key={num} value={num}>
      {num}
    </option>
  ))}
</select>
                </div>
            

                
            </div>
            {error.field == 'tenure' && <span className="error-text text-sm">{error.message}</span>}
        
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
            <label className="text"><strong>Have you found a property already?</strong></label>
            <div className="row g-3">
                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${property_finding_status === "Browsing the market" ? "active" : ""}`}
                onClick={() => setPropertyFindingStatus("Browsing the market")}
              >Browsing the market</button>
               
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${property_finding_status === "Started Looking Around" ? "active" : ""}`}
                onClick={() => setPropertyFindingStatus("Started Looking Around")}
              >Started Looking Around</button>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${property_finding_status === "Found my Dream Home" ? "active" : ""}`}
                onClick={() => setPropertyFindingStatus("Found my Dream Home")}
              >Found my Dream Home</button>
                </div>
               
            </div>
            {error.field == 'search' && <span className="error-text text-sm">{error.message}</span>}
        
          </div>

          <div className="input-row residencey">
            <label className="text"><strong>Are you looking for a ready-to-move property?</strong></label>
            <div className="row g-3">
                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${looking_for_move === "Yes, Ready to Move" ? "active" : ""}`}
                onClick={() => setLookingForMove("Yes, Ready to Move")}
              >Yes, Ready to Move</button>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${looking_for_move === "Under Construction" ? "active" : ""}`}
                onClick={() => setLookingForMove("Under Construction")}
              >Under Construction</button>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${looking_for_move === "Under Construction Resale" ? "active" : ""}`}
                onClick={() => setLookingForMove("Under Construction Resale")}
              >Under Construction Resale</button>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${looking_for_move === "Plot Purchase" ? "active" : ""}`}
                onClick={() => setLookingForMove("Plot Purchase")}
              >Plot Purchase</button>
                </div>
                
            </div>
            {error.field == 'move' && <span className="error-text text-sm">{error.message}</span>}
        
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

export default FinancialDetail;