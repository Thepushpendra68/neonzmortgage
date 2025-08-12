import './landing.css';

export default function LandingLayout({ children }) {
  return (
    <div className="landing-wrapper">
      {children}
    </div>
  );
}