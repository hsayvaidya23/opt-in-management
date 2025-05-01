interface WhatsAppPreviewProps {
  contentType: string;
}

export const WhatsAppPreview = ({ contentType }: WhatsAppPreviewProps) => {
  return (
    <div className="relative lg:sticky lg:top-6">
      {/* <h4 className="font-medium mb-4 hidden lg:block">Preview</h4> */}
      <div className="relative">
        <div className="relative mb-6">
          <div className="absolute -top-3 -left-3 z-10">
            <img
              src="/whatsapp.png"
              alt="WhatsApp"
              className="w-11 h-11"
            />
          </div>
          
          <div className="bg-gray-50 border rounded-lg p-4 mt-2">
            {contentType === "text" && (
              <div className="text-sm text-gray-800">
                Hi {'{{1}}'}, please find details in attached pdf as discussed over call and click on demo link to explore demo. id :demo password : 1289
                <br /><br />
                Thank You {'{{2}}'}
              </div>
            )}
            
            {contentType === "document" && (
              <>
                <div className="flex items-center justify-center bg-gray-100 p-4 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                </div>
                <div className="text-sm text-gray-800">
                  Hi {'{{1}}'}, please find details in attached pdf as discussed over call and click on demo link to explore demo. id :demo password : 1289
                  <br /><br />
                  Thank You {'{{2}}'}
                </div>
              </>
            )}
            
            {contentType === "image" && (
              <>
                <img 
                  src="/people_sitting.png" 
                  alt="Meeting" 
                  className="w-full h-32 object-cover object-center rounded-md mb-4"
                />
                <div className="text-sm text-gray-800">
                  Hi {'{{1}}'}, please find details in attached pdf as discussed over call and click on demo link to explore demo. id :demo password : 1289
                  <br /><br />
                  Thank You {'{{2}}'}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};