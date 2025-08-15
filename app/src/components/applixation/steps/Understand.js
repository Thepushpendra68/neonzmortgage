'use client';

import { useState } from "react";


const UnderstardFinance = ({onUpdate, setStep, have_credit_card, setHaveCard, credit_limit, setCreditLimit, other_loan, setOtherLoan, monthly_repayment, setMonthlyRepayment}) => {

    const [error, setError] = useState({field: null, message: null});

    const onNext = async () => {
        setError({field: null, message: null})
        if(!have_credit_card){
            setError({field: 'cc', message: "This field is mendatory"});
            return
        }
        if(have_credit_card === "Yes" && !credit_limit){
            setError({field: 'cl', message: "This field is mendatory"});
            return
        }
        if(!other_loan){
            setError({field: 'ol', message: "This field is mendatory"});
            return
        }
        if(other_loan === 'Yes' && !monthly_repayment){
            setError({field: 'mp', message: "This field is mendatory"});
            return
        }

        await onUpdate();
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
            <label className="text"><strong>Do you have any credit cards?</strong></label>
            <div className="row g-3">
                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${have_credit_card === "Yes" ? "active" : ""}`}
                onClick={() => setHaveCard("Yes")}
              >Yes</button>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${have_credit_card === "No" ? "active" : ""}`}
                onClick={() => setHaveCard("No")}
              >No</button>
                </div>
                
            </div>
            {error.field == 'cc' && <span className="error-text text-sm">{error.message}</span>}
        
          </div>

          {have_credit_card === 'Yes' ? (<div className="input-row residencey">
            <label className="text"><strong>what is the total credit limit of all the cards combined?</strong></label>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <input value={credit_limit || 0} onChange={(e) => setCreditLimit(formatNumber(parseNumber(e.target.value)))} type="text" />
                  {error.field == 'cl' && <span className="error-text text-sm">{error.message}</span>}
                </div>
                
            </div>
        
          </div>): null}


          <div className="input-row residencey">
            <label className="text"><strong>Any other loans?</strong></label>
            <div className="row g-3">
                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${other_loan === "Yes" ? "active" : ""}`}
                onClick={() => setOtherLoan("Yes")}
              >Yes</button>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                <button
                className={`boxed-row text ${other_loan === "No" ? "active" : ""}`}
                onClick={() => setOtherLoan("No")}
              >No</button>
                </div>
                
            </div>
            {error.field == 'ol' && <span className="error-text text-sm">{error.message}</span>}
        
          </div>


          {other_loan === "Yes" ? (<div className="input-row residencey">
            <label className="text"><strong>what is the total monthly repayment of all the loans combined?</strong></label>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    

                    <input type="text" value={monthly_repayment || 0} onChange={(e) => setMonthlyRepayment(formatNumber(parseNumber(e.target.value)))} />
                    {error.field == 'mp' && <span className="error-text text-sm">{error.message}</span>}
               
                </div>
                
            </div>
        
          </div>) : null}

          

          
         </div>




            <div className="journet-nav">
            <button className="btn btn-primary btn-rounded journey-back" style={{minWidth: '80px'}} onClick={() => setStep(8)}>
                                    
                                
                                    <span className="text text-light">Back</span>
                                    
                                                                       </button>
                                  
                                      <button className="btn btn-primary btn-rounded journy" style={{minWidth: '80px'}} onClick={onNext}>
                                    
                                    <span className="text text-light text-center">Submit</span>
                                    
                                    
                                                                       </button>
                               </div>
        </div>
    )
}

export default UnderstardFinance;