import { ThemedComponentProps } from "@ui-kitten/components";

type IPhotoCapture = ThemedComponentProps<{}> & {
  onPhotoTaken: (uri: string) => void;
}

export type { IPhotoCapture };
