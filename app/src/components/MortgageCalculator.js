'use client';
import React, { useState, useEffect } from "react";
import { getEibor } from "@/http";
import Link from "next/link";
// import "./calculator.css";
// import { NavLink } from "react-router-dom";

const MortgageCalculator = () => {

    const formatNumber = (num) => {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };
  const [propertyPrice, setPropertyPrice] = useState(formatNumber(1000000));
  const [downpaymentPercent, setDownpaymentPercent] = useState(20);
  const [downpayment, setDownpayment] = useState(0);
  const [durationYears, setDurationYears] = useState(25);
  const [durationMonths, setDurationMonths] = useState(0);
  const [interestRate, setInterestRate] = useState(3.75);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [mortgage, setMortgage] = useState(0);
  const [residency, setResidency] = useState('UAE Resident');

  const [three_month, setThreeMonth] = useState('');
  const [six_month, setSixMonth] = useState('');

  const [currency, setCurrency] = useState("AED");
  const [exchangeRates, setExchangeRates] = useState({ AED: 1 });



  const currencySymbols = {
    AED: "AED",
    USD: "$",
    CAD: "CA$",
    GBP: "£",
    EUR: "€",
    SAR: "﷼",
    INR: "₹",
    SGD: "S$",
    AUD: "A$",
    ZAR: "ZAR"
  };

  const handleResident = (resident) => {
    setResidency(resident);
    if (resident === 'UAE Resident') {
      setInterestRate(3.75);
      setDownpaymentPercent(20);
    } else if (resident === 'Non-UAE Resident') {
      setInterestRate(5.5);
      setDownpaymentPercent(25);
    } else if (resident === 'UAE National') {
      setInterestRate(3.75);
      setDownpaymentPercent(15);
    }
  };

  useEffect(() => {
    const fetchEibor = async () => {
      try {
        const { data } = await getEibor();
        setThreeMonth(data.three_month);
        setSixMonth(data.six_month);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchEibor();
  }, []);

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/AED")
      .then((res) => res.json())
      .then((data) => {
        setExchangeRates(data.rates);
      })
      .catch((err) => console.error("Currency fetch error:", err));
  }, []);

  useEffect(() => {
    calculateMortgage();
  }, [propertyPrice, downpaymentPercent, durationYears, durationMonths, interestRate]);



  const parseNumber = (num) => parseFloat(String(num).replace(/,/g, "")) || 0;

  const calculateMortgage = () => {
    const cleanPrice = parseNumber(propertyPrice);
    const dpAmount = (cleanPrice * downpaymentPercent) / 100;
    setDownpayment(dpAmount);
    const mortgageAmount = cleanPrice - dpAmount;
    setMortgage(mortgageAmount);

    const totalMonths = durationYears * 12 + durationMonths;
    if (totalMonths > 300) {
      alert("Maximum loan duration is 25 years");
      setDurationYears(25);
      setDurationMonths(0);
      return;
    }

    const monthlyInterest = interestRate / 1200;
    const monthlyPayment =
      (mortgageAmount *
        (monthlyInterest * Math.pow(1 + monthlyInterest, totalMonths))) /
      (Math.pow(1 + monthlyInterest, totalMonths) - 1);
    setMonthlyPayment(monthlyPayment || 0);
  };

  const convert = (amount) => {
    const rate = exchangeRates[currency] || 1;
    return amount * rate;
  };

  const myParseNumber = (value) => {
  // Allow only digits and one dot
  const cleaned = value.replace(/[^0-9.]/g, '');

  // Prevent multiple dots
  const parts = cleaned.split('.');
  const number = parts.length > 1 ? parts[0] + '.' + parts[1] : parts[0];

  // Remove leading zeros unless it's '0' or '0.xxx'
  return number.replace(/^0+(?!\.)/, '') || '0';
};

  return (
    <div className="calculator-container">
      <div className="row">
        <div className="col-lg-6 col-xl-4 mortage-col">
          <div className="form">
            <div className="input-row residencey">
              <label className="text">Residency Status</label>
              <div className="flex-col form-row-1">
                <select onChange={(e) => handleResident(e.target.value)}>
                  <option value="UAE Resident">UAE Resident</option>
                  <option value="Non-UAE Resident">Non Resident</option>
                  <option value="UAE National">UAE National</option>
                </select>
              </div>
            </div>

            <div className="input-row">
              <label className="text">Currency</label>
              <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                {Object.keys(currencySymbols).map((cur) => (
                  <option key={cur} value={cur}>{cur}</option>
                ))}
              </select>
            </div>

            <div className="input-row">
              <label className="text">Property Price</label>
              <div className="input-row-symbol">
                <input
                  type="text"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(formatNumber(parseNumber(e.target.value)))}
                />
                <span className="secondary-heading">AED</span>
              </div>
              {currencySymbols[currency] !== "AED" && <p className="text-sm" style={{marginTop: '8px'}}><strong>Property price in {currencySymbols[currency]}: {formatNumber(convert(parseNumber(propertyPrice)))}</strong></p>}
            </div>

            <div className="input-row">
              <label className="text">Downpayment <span>{downpaymentPercent}%</span></label>
              <div className="input-row-symbol">
                <input type="text" value={formatNumber(convert(downpayment))} readOnly />
                <span className="secondary-heading">{currencySymbols[currency]}</span>
              </div>
              <input
                type="range"
                min="15"
                max="80"
                value={downpaymentPercent}
                onChange={(e) => setDownpaymentPercent(Number(e.target.value))}
              />
            </div>

            <div className="input-row">
              <label className="text">Duration</label>
              <div className="form-row-2">
                <div className="input-row-symbol">
                  <input
                    type="text"
                    value={durationYears}
                    onChange={(e) => setDurationYears(parseNumber(e.target.value))}
                  />
                  <span className="text">Years</span>
                </div>
                <div className="input-row-symbol">
                  <input
                    type="text"
                    value={durationMonths}
                    onChange={(e) => setDurationMonths(parseNumber(e.target.value))}
                  />
                  <span className="text">Months</span>
                </div>
              </div>
            </div>

            <div className="input-row interest-row">
              <label className="text">Interest Rate</label>
              <div className="input-row-symbol">
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(myParseNumber(e.target.value))}
                />
                <span className="secondary-heading">%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-8 col-lg-6 form-right-col mortage-col">
          <div className="output">
            <div className="output-row">
              <p className="secondary-heading">Your monthly payable EMI will be</p>
              <h3 className="aed-heading">
                <u>{formatNumber(convert(monthlyPayment))}</u> <span>{currencySymbols[currency]}</span>
              </h3>
              <p className="text" style={{ margin: '20px 0' }}>
                Based on a loan of <strong>{currencySymbols[currency]} {formatNumber(convert(mortgage))}</strong> at <strong>{interestRate}%</strong> interest.
              </p>
              <p className="text-sm" style={{marginBottom:'8px'}}><strong>Disclaimer:</strong> Estimated EMI may vary. T&Cs apply.<br/>*Currency conversion rates are provided for informational purposes only</p>

              <Link href='/journey' className="apply-now-btn btn btn-rounded btn-primary btn-lg-txt">
                
                  <span className="text text-light">Get Amortization</span>
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.451987 1.57999L1.51299 0.519991L7.29199 6.29699C7.38514 6.38956 7.45907 6.49963 7.50952 6.62088C7.55997 6.74213 7.58594 6.87216 7.58594 7.00349C7.58594 7.13482 7.55997 7.26485 7.50952 7.3861C7.45907 7.50735 7.38514 7.61742 7.29199 7.70999L1.51299 13.49L0.452987 12.43L5.87699 7.00499L0.451987 1.57999Z" fill="white"/>
                  </svg>
                
              </Link>
            </div>

            <div className="financing">
              <p className="text"><strong>Exclusive Financing</strong></p>
              <div className="fiance-grid">
                {[{ rate: 3.89, label: '2 Years' }, { rate: 3.95, label: '3 Years' }, { rate: Math.round((parseFloat(three_month) + 0.55) * 100) / 100, label: 'Variable' }].map(({ rate, label }) => (
                  <div className="finance-col" key={rate}>
                    <div className="fin-row" style={{ cursor: 'pointer', background: interestRate === rate ? '#000' : '' }} onClick={() => setInterestRate(rate)}>
                      <div className="fin-col-left">
                        <p className="text" style={{ color: interestRate === rate ? '#fff' : '#000' }}>{rate}%</p>
                      </div>
                      <div className="fin-col-rihgt">
                        <p className="text" style={{ color: interestRate === rate ? '#fff' : '#000' }}>{label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text" style={{ marginTop: '30px' }}><strong>EIBOR Rates :</strong></p>
              <div className="fiance-grid">
                <div className="finance-col">
                  <div className="fin-row">
                    <div className="fin-col-left"><p className="text">3 Month</p></div>
                    <div className="fin-col-rihgt"><p className="text">{three_month} %</p></div>
                  </div>
                </div>
                <div className="finance-col">
                  <div className="fin-row">
                    <div className="fin-col-left"><p className="text">6 Month</p></div>
                    <div className="fin-col-rihgt"><p className="text">{six_month} %</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mortage-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
