'use client';
import { useState } from "react";

export default function Faqs () {

      const [faqState, setFaqState] = useState(1);

    return (
        <div className="faqs">
                        <div className={`faq-item ${faqState == 1 ? 'active-faq' : ''}`} onClick={() => setFaqState(1)}>
                            <div className="faq-header">
                                <p className="text"><strong>1. How do I get a mortgage in Dubai as an expat?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                                <p className="text-sm">To get a mortgage in Dubai as an expat, you typically need to be employed or self-employed with a stable income. Most banks require a valid UAE residence visa, a minimum monthly income, and a clean credit history. Neon Mortgage can help guide you through the full process.</p>
                                
                            </div>
                        </div>

                        <div className={`faq-item ${faqState == 2 ? 'active-faq' : ''}`} onClick={() => setFaqState(2)}>
                            <div className="faq-header">
                                <p className="text"><strong>2. What is the minimum down payment for a mortgage in Dubai?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                               <p className="text-sm">For UAE Nationals, the minimum down payment of 15% is required of the Property Value. For the residents of UAE, the minimum down payment is 20% of the property value for properties under AED 5 million. For non-residents, it’s typically 25%. This can vary by bank and mortgage type.</p>
                            </div>
                        </div>

                        <div className={`faq-item ${faqState == 3 ? 'active-faq' : ''}`} onClick={() => setFaqState(3)}>
                            <div className="faq-header">
                                <p className="text"><strong>3. Can non-residents get a mortgage in the UAE?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                                <p className="text-sm">Yes, non-residents can apply for a mortgage in the UAE. However, the available loan-to-value (LTV) ratio is lower (usually 75%), and fewer banks offer mortgages to non-residents. We help non-resident investors find the best deals.</p>
                            </div>
                        </div>

                        <div className={`faq-item ${faqState == 4 ? 'active-faq' : ''}`} onClick={() => setFaqState(4)}>
                            <div className="faq-header">
                                <p className="text"><strong>4. What is the current mortgage interest rate in Dubai?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                                <p className="text-sm">Mortgage interest rates in Dubai typically range between 3.5% to 5.5%, depending on the bank, loan type (fixed or variable), and applicant profile. Use our mortgage calculator to get an estimate based on today’s rates.</p>
                            </div>
                        </div>

                        <div className={`faq-item ${faqState == 5 ? 'active-faq' : ''}`} onClick={() => setFaqState(5)}>
                            <div className="faq-header">
                                <p className="text"><strong>5. What documents are required to apply for a mortgage in Dubai?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                                <p className="text">
                                Securing a mortgage in Dubai? Whether you receive a monthly paycheck or run your own business, having the right paperwork ready will make the process smoother. Here&apos;s exactly what you&apos;ll need:
                                </p>
                                <p className="text"><b>For Employees:</b></p>
                                <ul className="line-list">
                                    <li className="text">Valid passport, visa and Emirates ID</li>
                                    <li className="text">Latest salary certificate.</li>
                                    <li className="text">6 months of personal bank statements reflecting salary credits.</li>
                                    <li className="text">Recent payslips (last 6 months)</li>
                                </ul>
                                <p className="text"><strong>Business Owners Should Also Prepare:</strong></p>
                                <ul className="line-list">
                                    <li className="text">Company valid trade license copy</li>
                                    <li className="text">Memorandum of Association (including all ammendments if any)</li>
                                    <li className="text">6-12 months of company bank account statements</li>
                                    <li className="text">Audited financial records (where available)</li>
                                    <li className="text">VAT certificate and return documents (if registered)</li>
                                </ul>
                                <p className="text"><strong>Smart Tip:</strong> Getting pre-approved gives you bargaining power when making offers and shows sellers you&apos;re a serious buyer.</p>
                                <p className="text"><strong>Next Steps:</strong></p>
                                <ul className="line-list">
                                    <li className="text">Gather all required documents</li>
                                    <li className="text">Check for any recent requirement changes</li>
                                    <li className="text">Consider speaking with a mortgage advisor</li>
                                </ul>
                                <p className="text">Having trouble locating any documents? Most banks can guide you through alternatives if you&apos;re missing certain paperwork.</p>
                            </div>
                        </div>

                        <div className={`faq-item ${faqState == 6 ? 'active-faq' : ''}`} onClick={() => setFaqState(6)}>
                            <div className="faq-header">
                                <p className="text"><strong>6. What is the maximum mortgage tenure in the UAE?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                                <p className="text-sm">The maximum mortgage tenure in the UAE is 25 years, and the loan must be fully repaid before the borrower reaches 65 years of age (salaried) or 70 years (self-employed).</p>
                            </div>
                        </div>

                        <div className={`faq-item ${faqState == 7 ? 'active-faq' : ''}`} onClick={() => setFaqState(7)}>
                            <div className="faq-header">
                                <p className="text"><strong>7. Can I get a mortgage in Dubai for an off-plan property?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                                <p className="text-sm">Yes, many banks in the UAE offer mortgages for off-plan properties, but they usually require a higher down payment and only apply once a certain percentage of the project is completed.</p>
                            </div>
                        </div>

                        <div className={`faq-item ${faqState == 8 ? 'active-faq' : ''}`} onClick={() => setFaqState(8)}>
                            <div className="faq-header">
                                <p className="text"><strong>8. What are the types of mortgage interest rates in Dubai?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                                <p className="text">&quot;You can choose between: <br/>
<strong>Fixed rate mortgages:</strong> Stable monthly payments for a fixed term.<br/>
<strong>Variable / floating rate mortgages:</strong> Rates change based on EIBOR and market conditions.&quot;</p>
                            </div>
                        </div>

                        <div className={`faq-item ${faqState == 9 ? 'active-faq' : ''}`} onClick={() => setFaqState(9)}>
                            <div className="faq-header">
                                <p className="text"><strong>9. Can we refinance our Mortgage in Dubai?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                                <p className="text-sm">Absolutely. Refinancing lets you switch to a lender offering a lower rate or better terms. Neon Mortgage can help you compare refinancing options to save on interest and secure a longer tenure to reduce your monthly payments.</p>
                            </div>
                        </div>

                        <div className={`faq-item ${faqState == 10 ? 'active-faq' : ''}`} onClick={() => setFaqState(10)}>
                            <div className="faq-header">
                                <p className="text"><strong>10. How much can I borrow for a mortgage in Dubai?</strong></p>
                                <div className="faq-icon">
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4439 0.438315L12.5039 1.49932L6.72694 7.27832C6.63437 7.37147 6.52429 7.4454 6.40304 7.49585C6.28179 7.54629 6.15176 7.57227 6.02044 7.57227C5.88911 7.57227 5.75908 7.54629 5.63783 7.49585C5.51658 7.4454 5.4065 7.37147 5.31394 7.27832L-0.466064 1.49932L0.593936 0.439315L6.01894 5.86332L11.4439 0.438315Z" fill="black"/>
</svg>
</div>
                            </div>
                            <div className="faw-content">
                                <p className="text-sm">Your borrowing limit depends on your income, existing liabilities, credit score, and the value of the property. Typically, banks allow monthly repayments not to exceed 50% of your income.</p>
                            </div>
                        </div>
                    </div>
    )
}