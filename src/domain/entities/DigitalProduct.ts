export interface DigitalProduct {
  id: string;
  mentorId: string;
  title: string;
  description: string;
  price: number;
  downloads: number;
  rating: number;

  fileKey: string; // R2 or S3 object key
  fileType: "PDF" | "CSV";

  createdAt: Date;
}
