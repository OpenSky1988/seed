import { ThemedComponentProps } from "@ui-kitten/components";

type IPhotoCapture = ThemedComponentProps<{}> & {
  imageUri?: string;
  onPhotoTaken: (uri: string) => void;
}

export type { IPhotoCapture };
