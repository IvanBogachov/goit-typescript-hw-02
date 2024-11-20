export interface PhotoUrls {
  regular: string;
  small: string;
}
export interface Photo {
  id: string;
  alt_description: string;
  urls: PhotoUrls;
}
export interface FetchGalleryPhotosResponse {
  total: number;
  total_pages: number;
  results: Photo[];
}
export interface SearchBarProps {
  onSubmit: (query: string) => void;
}
export interface initialValuesProps {
  query: string;
}
export interface ImageCardProps {
  alt_description: string;
  urls: PhotoUrls;
  updateModalStateData: (url: string, alt: string) => void;
  openModal: () => void;
}
export interface ImageGalleryProps {
  gallery: Photo[];
  openModal: () => void;
  updateModalStateData: (url: string, alt: string) => void;
}
export interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
}
export interface LoadMoreBtnProps {
  handleLoadMore: () => void;
  isActive: boolean;
}
