export default function ProgressBar({ currentStep, totalSteps, branch }) {
  // Calculate total steps based on branch if not explicitly provided
  const getBranchSteps = (branchType) => {
    switch(branchType) {
      case 'new-purchase':
        return 8; // Purchase flow: 8 total steps
      case 'refinance':
        return 7; // Refinance flow: 7 total steps
      case 'investment':
        return 9; // Investment flow: 9 total steps
      default:
        return 3; // Fallback for legacy flows
    }
  };

  const steps = totalSteps || getBranchSteps(branch);

  return (
    <div className="progress-container">
      <div className="progress-segments">
        {Array.from({ length: steps }, (_, index) => (
          <div
            key={index}
            className={`progress-segment ${
              index < currentStep ? 'active' : 'inactive'
            }`}
          />
        ))}
      </div>
    </div>
  );
}