

export default function Popup ({setShowPopup}) {
    return (
         <div className="popup" onClick={() => setShowPopup(false)}>
            <div className="popup-content">
               <img src="/assets/images/checked.png" style={{width: '50px', height: '50px'}} alt="" />
               <h2 className="secondary-heading" style={{fontSize: '25px'}}><strong>Thank you for reaching out to us!</strong></h2>
               <p className="text text-center">We appreciate your interest in Neon Mortgage. One of our representatives will get back to you shortly.</p>
            </div>
        </div>
    )
}