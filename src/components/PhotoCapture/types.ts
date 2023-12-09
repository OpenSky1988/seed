interface IPhotoCapture {
  onPhotoTaken: (uri: string) => void;
}

export type { IPhotoCapture };
