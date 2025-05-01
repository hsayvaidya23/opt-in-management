
export const KeywordTag = ({ text }: { text: string }) => {
  return (
    <div className="inline-flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1 text-sm">
      {text}
      <button className="ml-1 text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};
