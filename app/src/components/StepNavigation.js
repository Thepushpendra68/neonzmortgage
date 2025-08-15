import Link from "next/link";

export default function StepNavigation({ 
  nextHref, 
  backHref, 
  canProceed = true, 
  onNext, 
  onBack,
  nextText = "Next →",
  backText = "← Back"
}) {
  const NextButton = nextHref ? Link : 'button';
  const BackButton = backHref ? Link : 'button';
  
  const nextProps = nextHref ? { href: nextHref } : { onClick: onNext, disabled: !canProceed };
  const backProps = backHref ? { href: backHref } : { onClick: onBack };
  
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
      {(backHref || onBack) && (
        <BackButton 
          {...backProps}
          className="bg-white text-black border-2 border-black px-6 py-3 rounded-lg font-medium hover:bg-gray-50 landing-transition landing-button order-2 sm:order-1"
        >
          {backText}
        </BackButton>
      )}
      
      <NextButton 
        {...nextProps}
        className={`px-6 py-3 rounded-lg font-medium landing-transition landing-button order-1 sm:order-2 ${
          canProceed 
            ? 'bg-black text-white hover:bg-gray-800' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {nextText}
      </NextButton>
    </div>
  );
}