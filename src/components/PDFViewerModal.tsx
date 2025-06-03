import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, X } from 'lucide-react';

interface PDFViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PDFViewerModal = ({ isOpen, onClose }: PDFViewerModalProps) => {
  const handleDownload = () => {
    const pdfUrl = '/Feel Education Demo PDF.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Feel Education Demo PDF.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] h-[90vh] p-0">
        <div className="absolute top-4 right-4 z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDownload}
            className="bg-white/80 hover:bg-white"
          >
            <Download className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="bg-white/80 hover:bg-white ml-2"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <iframe
          src="/Feel Education Demo PDF.pdf"
          className="w-full h-full"
          title="Company Profile PDF"
        />
      </DialogContent>
    </Dialog>
  );
};

export default PDFViewerModal; 