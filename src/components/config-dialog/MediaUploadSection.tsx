
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MediaUploadSectionProps {
  contentType: string;
}

export const MediaUploadSection = ({ contentType }: MediaUploadSectionProps) => {
  return (
    <div className="mb-6">
      <h3 className="text-base font-medium mb-1">Upload Media File</h3>
      <p className="text-sm text-gray-500 mb-1">
        Supported file type : {contentType === "document" ? ".pdf, .docx, .xlsx" : ".png or .jpeg"}
      </p>
      <p className="text-sm text-gray-500 mb-3">Maximum file size : 5 MB</p>
      
      <Button className="w-full mb-4 bg-blue-500 hover:bg-blue-600 text-white gap-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M7 15v2h10v-2" />
          <path d="m12 4 5 6H7l5-6Z" />
        </svg>
        Upload From Media Library
      </Button>
      
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px bg-gray-300 flex-1"></div>
        <span className="text-sm text-gray-500">or</span>
        <div className="h-px bg-gray-300 flex-1"></div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="media-url" className="block text-sm font-medium text-gray-700 mb-1">
          Media URL
        </label>
        <Input 
          id="media-url" 
          type="text" 
          placeholder="https://unsplash.com/photos/people-sitting-at-the-table-" 
          className="w-full border-gray-300" 
        />
      </div>
      
      <Button variant="outline" className="text-blue-500 border-blue-500 text-sm px-3 py-1.5 h-auto">
        Add Variable
      </Button>
    </div>
  );
};