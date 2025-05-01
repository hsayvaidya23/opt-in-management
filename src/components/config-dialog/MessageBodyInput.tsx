import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Bold, Italic, Underline, Smile } from "lucide-react";

interface MessageBodyInputProps {
  contentType: string;
}

export const MessageBodyInput = ({ contentType }: MessageBodyInputProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <label htmlFor="message-body" className="block text-sm font-medium text-gray-700">
          Message Body <span className="text-red-500">*</span>
        </label>
        <span className="text-xs text-gray-500">0/4096</span>
      </div>
      
      <div className="relative">
        <Textarea 
          id="message-body" 
          placeholder="Enter your message here" 
          className="w-full min-h-[120px] border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md p-3 pb-12"
        />
        
        {contentType === "text" && (
          <div className="absolute bottom-2 left-2 flex gap-2">
            <Button variant="ghost" size="sm" className="p-1.5 h-auto hover:bg-gray-100">
              <Bold className="w-4 h-4 text-gray-700" />
            </Button>
            <Button variant="ghost" size="sm" className="p-1.5 h-auto hover:bg-gray-100">
              <Italic className="w-4 h-4 text-gray-700" />
            </Button>
            <Button variant="ghost" size="sm" className="p-1.5 h-auto hover:bg-gray-100">
              <Underline className="w-4 h-4 text-gray-700" />
            </Button>
            <Button variant="ghost" size="sm" className="p-1.5 h-auto hover:bg-gray-100">
              <Smile className="w-4 h-4 text-gray-700" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};