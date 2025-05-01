
import { Input } from "@/components/ui/input";

export const TemplateMessageForm = () => {
  return (
    <>
      {/* Template Name Field */}
      <div className="mb-6">
        <label htmlFor="template-name" className="block text-sm font-medium text-gray-700 mb-1">
          Template Name <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select 
            id="template-name" 
            className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 appearance-none pr-10 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled selected>Select</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M7 7l3 3 3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-6">
        <h3 className="text-base font-medium mb-4">Values</h3>
        <div className="space-y-4">
          {[1, 2].map((index) => (
            <div key={index} className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Variable Name <span className="text-red-500">*</span>
                </label>
                <Input 
                  type="text" 
                  value={index.toString()} 
                  className="w-full border-gray-300"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Value <span className="text-red-500">*</span>
                </label>
                <Input 
                  type="text" 
                  value={index === 1 ? "Mohit" : "Zara"} 
                  className="w-full border-gray-300" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};