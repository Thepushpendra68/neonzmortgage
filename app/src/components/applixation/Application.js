


'use client';

import Budget from "./steps/Budget";
import Employment from "./steps/Employement";
import Financial from "./steps/Financial";
import FinancialDetail from "./steps/FinancialDetail";
import More from "./steps/MoreDetail";
import MortageNeed from "./steps/MortageNeed";
import PersonalDetail from "./steps/PersonalDetail";
import PropertyDetail from "./steps/PropertyDetail";
import Resident from "./steps/Resident";
import UnderstardFinance from "./steps/Understand";

import { useState, useEffect } from "react";
import { createApplication, updateApplication } from "@/http";
import { useRouter } from "next/navigation";


const StepMap = {
    1: <MortageNeed />,
    // 2: <PropertyDetail />,
    2: <FinancialDetail />,
    3: <Budget />,
    4: <Financial />,
    5: <PersonalDetail />,
    6: <Resident />,
    7: <More />,
    8: <Employment />,
    9: <UnderstardFinance />
}


export default function Application () {

    const router = useRouter();

    const [step, setStep] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    //mortgage need
    const [looking_for, setLookingFor] = useState('');
    const [residency_status, setResedencyStatus] = useState('')

    //property details
    const [mortgage_bank, setMortgageBank] = useState('');
    const [property_value, setPropertyValue] = useState('');
    const [property_purchasing_type, setPropertyPurchasingType] = useState('');
    const [applicationId, setApplicationId] = useState('')



    //financial detail
    const [outstanding_loan_amount, setOutstandingLoanAmount] = useState('');
    const [monthly_installment_amount, setMonthlyInstallement] = useState('');
    const [remaining_tenure, setRemainingTenure] = useState('')
    const [property_finding_status, setPropertyFindingStatus] = useState('');
    const [looking_for_move, setLookingForMove] = useState('');

    //budget
    const [max_amount_willing_to_spend, setMAxSpend] = useState('');


    //financial
    const [monthly_income, setMonthlyIncome] = useState('0');

    //personal detail
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    //resident
    const [hold_uaepassport, setHoldPassport] = useState('');
    const [resident_of_uae, setResidentOfuae] = useState('');

    //more detail
    const [dob, setDob] = useState('');
    const [passport_country, setPassportCountry] = useState('')

    //employement
    const [employement_status, setEmployement] = useState('');
    const [application_type, setApplicationType] = useState('')

    //understand finance
    const [have_credit_card, setHaveCard] = useState('');
    const [credit_limit, setCreditLimit] = useState('');
    const [other_loan, setOtherLoan] = useState('');
    const [monthly_repayment, setMonthlyRepayment] = useState('');

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState({field: null, message: null});

    //const navigate = useNavigate();

    const onSubmit = async () => {
        try {
            const {data} = await createApplication({
                looking_for,
                residency_status,
                mortgage_bank,
                property_value,
                property_purchasing_type,
                outstanding_loan_amount,
                monthly_installment_amount,
                remaining_tenure,
                property_finding_status,
                looking_for_move,
                max_amount_willing_to_spend,
                monthly_income,
                name, email, phone,
                hold_uaepassport,
                resident_of_uae,
                dob,
                passport_country,
                employement_status,
                application_type,
                have_credit_card,
                credit_limit,
                other_loan,
                monthly_repayment
            })

            setApplicationId(data._id)
        } catch (error) {
           setError({field: 'a', message: 'Something went wrong'})
        }finally{
            setSubmitting(false)
        }
    }

    useEffect(() => {
    const quizElement = document.getElementById('journey');
    if (quizElement) {
        quizElement.scrollIntoView({ behavior: 'smooth' });
    }
}, [step]);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const onUpdate = async () => {
        try {
            const {data} = await updateApplication(applicationId, {
                looking_for,
                residency_status,
                mortgage_bank,
                property_value,
                property_purchasing_type,
                outstanding_loan_amount,
                monthly_installment_amount,
                remaining_tenure,
                property_finding_status,
                looking_for_move,
                max_amount_willing_to_spend,
                monthly_income,
                name, email, phone,
                hold_uaepassport,
                resident_of_uae,
                dob,
                passport_country,
                employement_status,
                application_type,
                have_credit_card,
                credit_limit,
                other_loan,
                monthly_repayment
            })

            setLookingFor('');
            setResedencyStatus('');
            setMortgageBank('');
            setPropertyValue('');
            setPropertyPurchasingType('');
            setOutstandingLoanAmount('');
            setMonthlyInstallement('');
            setRemainingTenure('');
            setPropertyFindingStatus('');
            setLookingForMove('');
            setMAxSpend('')
            setMonthlyIncome('');
            setName('');
            setEmail('');
            setPhone('');
            setHoldPassport('');
            setResidentOfuae('');
            setDob('');
            setPassportCountry('');
            setEmployement('');
            setApplicationType('');
            setHaveCard('');
            setCreditLimit('');
            setOtherLoan('');
            setMonthlyInstallement('');
            
           router.push(`/application/${data._id}`)
        } catch (error) {
           setError({field: 'a', message: 'Something went wrong'}) 
        }finally{
            setSubmitting(false)
        }
    }


    return (
          <section id="journey">
                <div className="container">
                    <div className="journey-intro">
                        <h2 className="primary-heading text-center">Mortgage Eligibility Assessment</h2>
                        <h5 className="text text-center">Tell us a bit about yourself, and we’ll find the best mortgage solution for you</h5>
                    </div>

                    <div className="row" id="quiz">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="journey-left">
                                 <div className="journer-tracker">
                                    {/* Progress Bar */}
                                    <div className="progress-container" style={{marginBottom: isMobile ? '20px' : '30px'}}>
                                        <div className="progress-bar-wrapper" style={{
                                            width: '100%',
                                            backgroundColor: '#e0e0e0',
                                            borderRadius: '10px',
                                            height: isMobile ? '6px' : '10px',
                                            overflow: 'hidden'
                                        }}>
                                            <div className="progress-bar" style={{
                                                width: `${Math.round((step / 9) * 100)}%`,
                                                height: '100%',
                                                backgroundColor: '#000000',
                                                borderRadius: '10px',
                                                transition: 'width 0.3s ease'
                                            }}></div>
                                        </div>
                                        <div className="progress-text" style={{
                                            textAlign: 'center',
                                            marginTop: isMobile ? '8px' : '10px',
                                            fontSize: isMobile ? '14px' : '18px',
                                            fontWeight: 'bold',
                                            color: '#000000'
                                        }}>
                                            {Math.round((step / 9) * 100)}% Complete
                                        </div>
                                    </div>

                                    {/* Current Step Display */}
                                    <div className="current-step-display">
                                        <style jsx>{`
                                            .no-vertical-line::after {
                                                display: none !important;
                                            }
                                        `}</style>
                                        <div className="journey-tracker-item" style={{
                                            opacity: '1', 
                                            paddingLeft: '0px',
                                            display: 'flex',
                                            alignItems: isMobile ? 'center' : 'flex-start',
                                            gap: isMobile ? '10px' : '15px',
                                            marginBottom: isMobile ? '0px' : '10px'
                                        }}>
                                            <div className="tracket-number no-vertical-line" style={{
                                                backgroundColor: '#000000',
                                                color: 'white',
                                                borderRadius: '50%',
                                                width: isMobile ? '30px' : '40px',
                                                height: isMobile ? '30px' : '40px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginBottom: '0px',
                                                flexShrink: 0,
                                                position: 'relative'
                                            }}>
                                               <p className="text" style={{margin: '0', fontSize: isMobile ? '12px' : '14px'}}><strong>{step.toString().padStart(2, '0')}</strong></p>
                                            </div>
                                            <div className="text journey-title" style={{
                                                fontSize: isMobile ? '14px' : '16px', 
                                                fontWeight: '600',
                                                display: isMobile ? 'none' : 'block'
                                            }}>
                                                {step === 1 && "Your Mortgage Needs"}
                                                {step === 2 && "Financial Information"}
                                                {step === 3 && "Approximate Budget?"}
                                                {step === 4 && "Financial Information"}
                                                {step === 5 && "Provide Some more information"}
                                                {step === 6 && "Resident Type"}
                                                {step === 7 && "Just a few more details"}
                                                {step === 8 && "Employment Status"}
                                                {step === 9 && "Lets understand your finances"}
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-8">
                            <div className="journey-right">

                                {submitting ? (<div className="submitting">
                                <div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
                                </div>) : null}

                                <div className="step-form">
                                    {step == 1 && <MortageNeed setStep={setStep} looking_for={looking_for} setLookingFor={setLookingFor} setResedencyStatus={setResedencyStatus} residency_status={residency_status} />}
                                    {/* {step == 2 && <PropertyDetail setStep={setStep} mortage_need={looking_for} mortgage_bank={mortgage_bank} setMortgageBank={setMortgageBank} property_value={property_value} setPropertyValue={setPropertyValue} property_purchasing_type={property_purchasing_type} setPropertyPurchasingType={setPropertyPurchasingType} />} */}
                                    {step == 2 && <FinancialDetail mortage_need={looking_for} setStep={setStep} 
                                    outstanding_loan_amount={outstanding_loan_amount}
                                    setOutstandingLoanAmount={setOutstandingLoanAmount}
                                    monthly_installment_amount={monthly_installment_amount}
                                    setMonthlyInstallement={setMonthlyInstallement}
                                    remaining_tenure={remaining_tenure}
                                    setRemainingTenure={setRemainingTenure}
                                    property_finding_status={property_finding_status}
                                    setPropertyFindingStatus={setPropertyFindingStatus}
                                    looking_for_move={looking_for_move}
                                    setLookingForMove={setLookingForMove}
                                     />}


                                    {step == 3 && <Budget setStep={setStep} max_amount_willing_to_spend={max_amount_willing_to_spend} setMAxSpend={setMAxSpend} />}


                                    {step == 4 && <Financial setStep={setStep} monthly_income={monthly_income} setMonthlyIncome={setMonthlyIncome} mortage_need={looking_for} />}
                                    {step == 5 && <PersonalDetail onSubmit={onSubmit} name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} setStep={setStep} />}
                                    {step == 6 && <Resident residency_status={residency_status} setStep={setStep} hold_uaepassport={hold_uaepassport} setHoldPassport={setHoldPassport} resident_of_uae={resident_of_uae} setResidentOfuae={setResidentOfuae} />}
                                    {step == 7 && <More dob={dob} setDob={setDob} passport_country={passport_country} setPassportCountry={setPassportCountry} setStep={setStep} hold_uaepassport={hold_uaepassport} />}
                                    {step == 8 && <Employment setStep={setStep} employement_status={employement_status} setEmployement={setEmployement} application_type={application_type} setApplicationType={setApplicationType} />}
                                    {step == 9 && <UnderstardFinance onUpdate={onUpdate} setStep={setStep} have_credit_card={have_credit_card} setHaveCard={setHaveCard} credit_limit={credit_limit} setCreditLimit={setCreditLimit} other_loan={other_loan} setOtherLoan={setOtherLoan} monthly_repayment={monthly_repayment} setMonthlyRepayment={setMonthlyRepayment} />}
                                </div>

                                {error.field == 'a' && <span className="error-text text-sm">{error.message}</span>}

                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
} 