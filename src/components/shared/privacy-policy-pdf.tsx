"use client";

import { useCallback } from "react";

const DownloadButton = () => {
  const handleDownload = useCallback(() => {
    try {
      const link = document.createElement('a');
      link.href = '/pdfs/Privacy Notice for Allegiance Locksmith LLC.pdf';
      link.download = 'Privacy Notice for Allegiance Locksmith LLC.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log('Privacy Notice PDF downloaded');
    } catch (error) {
      console.error('Error triggering PDF download:', error);
      alert('Failed to download the PDF. Please try again later.');
    }
  }, []);

  return (
    <div className="pb-6 flex items-center justify-between">
      <button
        onClick={handleDownload}
        className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
      >
        Download PDF
      </button>
    </div>
  );
};

export default DownloadButton;