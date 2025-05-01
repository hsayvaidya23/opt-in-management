

import { Button } from "@/components/ui/button";
import { OptInSection } from "@/components/OptInSection";
import { OptOutSection } from "@/components/OptOutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white p-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-xl font-medium">Opt-In Management</h1>
          <div className="flex gap-2">
          <button className="px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50">Cancel</button>
          <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">Save</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <div className="relative mt-12 mb-6">
          <h2 className="text-2xl font-bold text-blue-500">Opt-In Management</h2>

          {/* Images positioned on top right */}
          
          <div className="absolute right-20 -top-7 hidden sm:flex items-start space-x-[-20px]">
            <img
              src="/isolate.png"
              alt="Speech Bubble Background"
              className="w-[120px] sm:w-[150px] object-fill z-10"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
          <OptInSection />
          <OptOutSection />
        </div>
      </div>
    </div>
  );
};

export default Index;

