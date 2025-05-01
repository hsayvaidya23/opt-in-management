
import { RadioGroup } from "@/components/ui/radio-group";

interface MessageTypeSelectProps {
  messageType: string;
  setMessageType: (messageType: string) => void;
}

export const MessageTypeSelect = ({ messageType, setMessageType }: MessageTypeSelectProps) => {
  return (
    <div className="mb-6">
      <RadioGroup className="flex flex-col space-y-3" defaultValue="regular">
        <div className="flex items-center space-x-2">
          <input 
            type="radio" 
            id="template" 
            name="message-type" 
            value="template"
            className="h-4 w-4 rounded-full border-2 border-primary text-primary" 
            checked={messageType === "template"}
            onChange={() => setMessageType("template")}
          />
          <label htmlFor="template" className="text-base">Pre-approved template message</label>
        </div>
        <div className="flex items-center space-x-2">
          <input 
            type="radio" 
            id="regular" 
            name="message-type" 
            value="regular"
            className="h-4 w-4 rounded-full border-2 border-primary text-primary" 
            checked={messageType === "regular"}
            onChange={() => setMessageType("regular")}
          />
          <label htmlFor="regular" className="text-base">Regular message</label>
        </div>
      </RadioGroup>
    </div>
  );
};