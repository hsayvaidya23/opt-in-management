// import { Button } from "@/components/ui/button";
// import { Switch } from "@/components/ui/switch";
// import { OptInSection } from "@/components/OptInSection";
// import { OptOutSection } from "@/components/OptOutSection";
// import { KeywordTag } from "@/components/KeywordTag";
// import { Shield } from "lucide-react";

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="border-b border-gray-200 bg-white p-4">
//         <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
//           <h1 className="text-xl font-medium">Opt-In Management</h1>
//           <div className="flex gap-2">
//             <button className="px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50">Cancel</button>
//             <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">Save</button>
//           </div>
//         </div>
//       </header>
      
//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto p-4 sm:p-6">
//         <div className="relative mb-6">
//           <h2 className="text-2xl font-bold text-blue-500">Opt-In Management</h2>
//           <div className="absolute right-0 -top-1 flex items-center gap-3">
//             <div className="w-[45px] sm:w-[50px] h-auto">
//               <img 
//                 src="/cloud.png" 
//                 alt="Cloud" 
//                 className="object-contain w-full h-full opacity-80" 
//               />
//             </div>
//             <div className="w-[85px] sm:w-[90px] h-auto">
//               <img 
//                 src="/public/Isolation_Mode.png" 
//                 alt="Isolation Mode" 
//                 className="object-contain w-full h-full" 
//               />
//             </div>
//           </div>
//         </div>
        
//         <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
//           <OptInSection />
//           <OptOutSection />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;

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
          
          <div className="absolute right-20 -top-7 flex items-start space-x-[-20px]">
            <img
              src="/public/isolate.png"
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

