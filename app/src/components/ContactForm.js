
'use client';
import Popup from "./Popup";
import dynamic from "next/dynamic";
import 'intl-tel-input/build/css/intlTelInput.css'
const IntlTelInput = dynamic(() => import('intl-tel-input/reactWithUtils'), {
  ssr: false,
});

import { useState } from "react";
import { validateEmail } from "@/utils/validator";
import { createContact } from "@/http";

export default function ContactForm () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState('')

    const [submitting, setSubmitting] = useState(false)

    const [isValidMobile, setIsValidMobile] = useState(true);


    const [invalid, setInvalid] = useState({field: null, message: ''});
    const [showPopup, setShowPopup] = useState(false)

    const setIsValid = (v) => {

        setIsValidMobile(v)

    }

    const handleSubmit = async () => {
        setSuccess('')
        if(!name){
            setInvalid({field: 'name', message: "Name is required"});
            return
        }
        if(!email){
            setInvalid({field: 'email', message: "Email is required"})
            return
        }
        if(!validateEmail(email)){
            setInvalid({field: 'email', message: "Invalid email"})
            return
        }

        if (!isValidMobile) {
            setInvalid({ field: "phone", message: "Invalid mobile number." });
            return
        }

        setInvalid({field: null, message: ''})
        setSuccess('')
        setSubmitting(true)

        try {
            const {data} = await createContact({name,  email, mobile, message});
            setSuccess("Form submitted")
            setName('');
            setEmail('');
            setMobile('');
            setMessage('');
            setShowPopup(true)
        } catch (error) {
            setInvalid({field: 'form', message: "Unable to send message"})
        }finally{
            setSubmitting(false)
        }
    }


    return (
       <div className="contact-left">
        {showPopup && <Popup setShowPopup={setShowPopup} />}
                            <h2 className="primary-heading">We&apos;re here to help</h2>
                            <div className="form">
                                <div className="field-group">
                                  <label className="text">Name</label>
                                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your full name" />
                                  {invalid.field == 'name' && <span className="error-text text-sm">{invalid.message}</span>}
                                </div>
                                <div className="field-group">
                                  <label className="text">Email</label>
                                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
                                  {invalid.field == 'email' && <span className="error-text text-sm">{invalid.message}</span>}
                                </div>
                                <div className="field-group">
                                  <label className="text">Phone</label>
                                  
<IntlTelInput
    value={mobile}
    onChangeNumber={(n) => setMobile(n)}
    onChangeValidity={setIsValid}
    initOptions={{
        initialCountry: "ae",
    }}
/>
{invalid.field == 'phone' && <span className="error-text text-sm">{invalid.message}</span>}
                                </div>
                                <div className="field-group">
                                  <label className="text">Message</label><br/>
                                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} id=""></textarea>
                                </div>
                                {invalid.field == 'form' && <span className="error-text text-sm">{invalid.message}</span>}
                                {success && <span className="success-text text-sm">{success}</span>}
                                <button onClick={handleSubmit} className="btn btn-primary btn-center btn-rounded">
                    <span className="text text-light">{submitting ? "Submitting.." : "Submit"}</span>
                    {submitting ? <span class="spinner-border spinner-border-sm ml-4" style={{marginLeft: '8px'}} role="status" aria-hidden="true"></span> : (<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M13.3536 6.35353L8.35359 11.3535C8.25971 11.4474 8.13237 11.5002 7.99959 11.5002C7.86682 11.5002 7.73948 11.4474 7.64559 11.3535C7.55171 11.2596 7.49896 11.1323 7.49896 10.9995C7.49896 10.8668 7.55171 10.7394 7.64559 10.6455L11.7926 6.49953L0.999595 6.49953C0.866986 6.49953 0.739809 6.44686 0.646041 6.35309C0.552273 6.25932 0.499595 6.13214 0.499595 5.99953C0.499595 5.86692 0.552273 5.73975 0.646041 5.64598C0.739809 5.55221 0.866986 5.49953 0.999595 5.49953L11.7926 5.49953L7.64559 1.35353C7.55171 1.25965 7.49896 1.13231 7.49896 0.999533C7.49896 0.866757 7.55171 0.73942 7.64559 0.645533C7.73948 0.551646 7.86682 0.498901 7.99959 0.498901C8.13237 0.498901 8.25971 0.551646 8.35359 0.645533L13.3536 5.64553C13.4002 5.69198 13.4371 5.74715 13.4623 5.8079C13.4875 5.86865 13.5005 5.93377 13.5005 5.99953C13.5005 6.0653 13.4875 6.13042 13.4623 6.19117C13.4371 6.25191 13.4002 6.30709 13.3536 6.35353Z" fill="white"/>
                    </svg>)}
                </button>
                
                            </div>
                        </div>
    )
}