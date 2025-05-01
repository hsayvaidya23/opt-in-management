
import { Text as TextIcon, Image, Video, FileText } from "lucide-react";

interface ContentTypeSelectProps {
  contentType: string;
  setContentType: (contentType: string) => void;
}

export const ContentTypeSelect = ({ contentType, setContentType }: ContentTypeSelectProps) => {
  const contentTypes = [
    { id: "text", label: "Text", Icon: TextIcon },
    { id: "image", label: "Image", Icon: Image },
    { id: "video", label: "Video", Icon: Video },
    { id: "document", label: "Document", Icon: FileText }
  ];
  
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-3">Type</label>
      <div className="flex space-x-6">
        {contentTypes.map(item => (
          <div key={item.id} className="flex items-center space-x-2">
            <input 
              type="radio" 
              id={item.id} 
              name="content-type" 
              value={item.id} 
              checked={contentType === item.id}
              onChange={() => setContentType(item.id)}
              className="h-4 w-4 rounded-full border-2 border-primary text-primary" 
            />
            <label htmlFor={item.id} className="text-base">{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};