export default function StepCard({ title, description, isSelected, onClick, className = "" }) {
  const baseClasses = "w-full p-6 rounded-lg cursor-pointer landing-transition border-2 min-h-[120px] flex flex-col justify-center landing-card";
  
  const selectedClasses = isSelected 
    ? "bg-black border-black text-white" 
    : "bg-white border-gray-200 text-black hover:border-black";
  
  return (
    <div 
      className={`${baseClasses} ${selectedClasses} ${className}`}
      onClick={onClick}
      tabIndex={0}
      role="button"
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      <div className="text-center">
        <h3 className={`font-semibold text-lg mb-2 ${isSelected ? 'text-white' : 'text-black'}`}>
          {title}
        </h3>
        {description && (
          <p className={`text-sm ${isSelected ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}