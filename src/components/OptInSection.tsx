import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Shield } from "lucide-react";
import { KeywordTag } from "./KeywordTag";
import { useState } from "react";
import { ConfigDialog } from './ConfigDialog';

export const OptInSection = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <div className="mb-8">
      <div className="flex gap-2 mb-4 items-center" >
        <div className="rounded-full p-3 flex items-center justify-center">
          <img 
            src="/icon.png"
            alt="Shield" 
            className="object-fill w-full h-full rounded-full"
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-blue-500">Opt-in</h3>
          <p className="text-sm text-gray-600">A text that explains what opt-in is</p>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side: Opt-in Response */}
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 w-full lg:flex-1">
          <div className="flex justify-between mb-2">
            <div>
              <h4 className="font-medium">Opt-in Response</h4>
              <p className="text-sm text-gray-500">Setup a response message for opt-in user keywords</p>
            </div>
            <Switch 
              checked={isEnabled}
              onCheckedChange={setIsEnabled}
              className="data-[state=checked]:bg-blue-500"
            />
          </div>
          
          <div className="mt-4 mb-10">
            <Button 
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600"
              onClick={() => setShowComponent(true)}
            >
              <img 
                src="/edit.png"
                alt="Edit" 
                className="w-5 h-5"
              />
              Configure
            </Button>
            {showComponent && <ConfigDialog isOpen={showComponent} onClose={() => setShowComponent(false)} />}
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-4 m-4 mt-4 relative">
            <div className="absolute -top-3 -left-3 z-10">
              <img 
                src="/whatsapp.png"
                alt="WhatsApp" 
                className="w-11 h-11"
              />
            </div>
            <div className="flex items-start gap-2">
              <p className="text-base">
                Hi! Thanks for connecting. Someone from our team will get in touch soon.
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Side: Opt-in Keywords */}
        <div className="w-full lg:flex-1">
          <div className="flex justify-between mb-2">
            <div>
              <h4 className="font-medium">Opt-in Keywords</h4>
              <p className="text-sm text-gray-500">The user will have to type exactly one of these messages on which they should be automatically opted-in</p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-1 text-gray-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input type="text" placeholder="# Add keyword" className="bg-transparent border-none outline-none w-full" />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <KeywordTag text="Keyword" />
            <KeywordTag text="Keyword" />
            <KeywordTag text="Keyword" />
            <KeywordTag text="Keyword" />
            <KeywordTag text="Keyword" />
            <KeywordTag text="Keyword" />
            <KeywordTag text="Keyword" />
          </div>
        </div>
      </div>
    </div>
  );
};


