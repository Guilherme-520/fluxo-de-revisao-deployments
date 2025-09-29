import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from "sonner";

export const exportAsImage = async (elementId: string) => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      toast.error("Elemento não encontrado para exportação");
      return;
    }

    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2,
      logging: false,
      useCORS: true
    });

    const link = document.createElement('a');
    link.download = 'fluxograma-beto.png';
    link.href = canvas.toDataURL();
    link.click();
    
    toast.success("Imagem exportada com sucesso!");
  } catch (error) {
    console.error('Erro ao exportar imagem:', error);
    toast.error("Erro ao exportar imagem");
  }
};

export const exportAsPDF = async (elementId: string) => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      toast.error("Elemento não encontrado para exportação");
      return;
    }

    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2,
      logging: false,
      useCORS: true
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('l', 'mm', 'a4'); // landscape
    
    const imgWidth = 297; // A4 landscape width in mm
    const pageHeight = 210; // A4 landscape height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save('fluxograma-beto.pdf');
    toast.success("PDF exportado com sucesso!");
  } catch (error) {
    console.error('Erro ao exportar PDF:', error);
    toast.error("Erro ao exportar PDF");
  }
};