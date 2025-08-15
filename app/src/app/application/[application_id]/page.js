'use client';

import { getApplication } from "@/http";
import { useState, useEffect } from "react";
import dayjs from 'dayjs'

export default function Thankyou({params}) {

    const id = params.application_id;
    const [fetching, setFetching] = useState(true);
    const [application, setApplication] = useState({});

      const formatNumber = (num) => {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

    useEffect(() => {
        const fetchApplication = async () => {
           try {
            const {data} = await getApplication(id);
            setApplication(data)
            console.log(data)
           } catch (error) {
            console.log(error)
           }finally{
            setFetching(false)
           }
        }
        fetchApplication();
    }, [id])
    return (
        <div>
            <section id='about-us-hero' className="page-header">
            <div className="container">
                <div className="about-hero-wrapper">
                    <div className="about-page-content">
                        <h1 className='primary-heading'>Application Submitted</h1>
                    </div>
                </div>
            </div>
        </section>

        <section id="application-data">
            <div className="container">
                <div className="application-data-intro">
                    <h2 className="primary-heading text-center">Thank you for Reaching us!</h2>
                    <p className="text text-center">One of our Advisor will get back to you shortly</p>
                </div>
                <div className="application-detail">
                {fetching ? (<div className="submitting">
                                <div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
                                </div>) : null}
                    <h3 className="consultant-heading text-center" style={{marginBottom: '20px'}}>Application Details</h3>
                    {!fetching ? (<div className="application-detail-wrapper">
                        <div className="application-detail-item">
                            <p className="text"><strong>What are you looking for?</strong></p>
                            <p className="text">{application.looking_for}</p>
                        </div>
                        <div className="application-detail-item">
                            <p className="text"><strong>What is your residency status?</strong></p>
                            <p className="text">{application.residency_status}</p>
                        </div>
                      
                        {application.looking_for === 'Mortgage Refinance' ? (<div className="application-detail-item">
                            <p className="text"><strong>Outstanding Loan Amount </strong></p>
                            <p className="text">{application.outstanding_loan_amount}</p>
                        </div>) : null}
                        {application.looking_for === 'Mortgage Refinance' ? (<div className="application-detail-item">
                            <p className="text"><strong>Monthly Installment Amount </strong></p>
                            <p className="text">{application.monthly_installment_amount}</p>
                        </div>) : null}
                        {application.looking_for === 'Mortgage Refinance' ? (<div className="application-detail-item">
                            <p className="text"><strong>Remaining Tenure </strong></p>
                            <p className="text">{application.remaining_tenure}</p>
                        </div>) : null}
                        {application.looking_for === 'New Purchase' ? (<div className="application-detail-item">
                            <p className="text"><strong>Have you found a property already?</strong></p>
                            <p className="text">{application.property_finding_status}</p>
                        </div>) : null}
                        {application.looking_for === 'New Purchase' ? (<div className="application-detail-item">
                            <p className="text"><strong>Are you looking for a ready-to-move property?</strong></p>
                            <p className="text">{application.looking_for_move}</p>
                        </div>) : null}
                        {application.looking_for === 'New Purchase' ? (<div className="application-detail-item">
                            <p className="text"><strong>Mention the maximum amount you are willing to spend on the property</strong></p>
                            <p className="text">{application.max_amount_willing_to_spend}</p>
                        </div>) : null}
                        <div className="application-detail-item">
                            <p className="text"><strong>What&apos;s your monthly income?</strong></p>
                            <p className="text">{application.monthly_income}</p>
                        </div>
                        <div className="application-detail-item">
                            <p className="text"><strong>Name</strong></p>
                            <p className="text">{application.name}</p>
                        </div>
                        <div className="application-detail-item">
                            <p className="text"><strong>Email</strong></p>
                            <p className="text">{application.email}</p>
                        </div>
                        <div className="application-detail-item">
                            <p className="text"><strong>Phone</strong></p>
                            <p className="text">{application.phone}</p>
                        </div>
                        {/* <div className="application-detail-item">
                            <p className="text"><strong>Do you hold a UAE passport?</strong></p>
                            <p className="text">{application.hold_uaepassport}</p>
                        </div> */}
                        <div className="application-detail-item">
                            <p className="text"><strong>Are you a resident of the UAE?</strong></p>
                            <p className="text">{application.resident_of_uae}</p>
                        </div>
                        <div className="application-detail-item">
                            <p className="text"><strong>DOB</strong></p>
                            <p className="text">{dayjs(application.dob).format('D MMMM, YYYY')}</p>
                        </div>
                        {application.hold_uaepassport === 'No' ? (<div className="application-detail-item">
                            <p className="text"><strong>What passport do you hold?</strong></p>
                            <p className="text">{application.passport_country}</p>
                        </div>) : null}
                        <div className="application-detail-item">
                            <p className="text"><strong>What&apos;s your employment status?</strong></p>
                            <p className="text">{application.employement_status}</p>
                        </div>
                        <div className="application-detail-item">
                            <p className="text"><strong>Would you be applying for a single or a joint application ?</strong></p>
                            <p className="text">{application.application_type}</p>
                        </div>
                        <div className="application-detail-item">
                            <p className="text"><strong>Do you have any credit cards?</strong></p>
                            <p className="text">{application.have_credit_card}</p>
                        </div>
                        {application.have_credit_card === 'Yes' ? (<div className="application-detail-item">
                            <p className="text"><strong>what is the total credit limit of all the cards combined?</strong></p>
                            <p className="text">{application.credit_limit}</p>
                        </div>) : null}
                        <div className="application-detail-item">
                            <p className="text"><strong>Any other loans?</strong></p>
                            <p className="text">{application.other_loan}</p>
                        </div>
                        {application.other_loan === 'Yes' ? (<div className="application-detail-item">
                            <p className="text"><strong>what is the total monthly repayment of all the loans combined?</strong></p>
                            <p className="text">{application.monthly_repayment}</p>
                        </div>) : null}
                    </div>) : null}
                </div>
            </div>
        </section>
        </div>
    )
}

