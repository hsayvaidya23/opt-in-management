import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

import { MessageTypeSelect } from "./config-dialog/MessageTypeSelect"; 
import { TemplateMessageForm } from "./config-dialog/TemplateMessageForm"; 
import { ContentTypeSelect } from "./config-dialog/ContentTypeSelect"; 
import { MediaUploadSection } from "./config-dialog/MediaUploadSection"; 
import { MessageBodyInput } from "./config-dialog/MessageBodyInput"; 
import { WhatsAppPreview } from "./config-dialog/WhatsAppPreview"; 

interface ConfigDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfigDialog = ({ isOpen, onClose }: ConfigDialogProps) => {
  const [messageType, setMessageType] = useState("regular");
  const [contentType, setContentType] = useState("text");
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden rounded-xl w-[95%] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="p-4 sm:p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg sm:text-xl font-medium text-blue-500">CONFIGURE WELCOME MESSAGE</DialogTitle>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              {/* <X className="h-5 w-5" /> */}
            </button>
          </div>
        </DialogHeader>

        <div className="border-t border-gray-200 mt-4" />
        
        <div className="p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
          {/* Left side: Form */}
          <div className="w-full lg:flex-1">
            <MessageTypeSelect messageType={messageType} setMessageType={setMessageType} />
            
            {messageType === "template" ? (
              <TemplateMessageForm />
            ) : (
              <>
                <ContentTypeSelect contentType={contentType} setContentType={setContentType} />
                
                {(contentType === "image" || contentType === "video" || contentType === "document") && (
                  <MediaUploadSection contentType={contentType} />
                )}

                <MessageBodyInput contentType={contentType} />
              </>
            )}
          </div>

          {/* Right side: Preview */}
          <div className="w-full lg:w-[350px] lg:flex-shrink-0">
            <WhatsAppPreview contentType={contentType} />
          </div>
        </div>
        
        <DialogFooter className="p-4 border-t border-gray-200">
          <Button variant="outline" className="rounded-md mr-2" onClick={onClose}>
            Cancel
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600 rounded-md">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};