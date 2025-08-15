'use client';

export default function JourneyHeader() {
    return (
        <section id="journey-header" style={{backgroundColor: '#fff', padding: '15px 0', borderBottom: '1px solid #e0e0e0'}}>
            <div className="container">
                <div className="d-flex justify-content-start align-items-center">
                    <img 
                        src="/assets/images/logo.png" 
                        alt="Neon Mortgage" 
                        className="logo"
                        style={{
                            height: '50px',
                            cursor: 'default'
                        }}
                    />
                </div>
            </div>
        </section>
    );
}