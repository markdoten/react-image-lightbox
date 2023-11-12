import * as React from 'react';

export interface ILightBoxProps {
  animationDisabled?: boolean;
  animationDuration?: number;
  animationOnKeyInput?: boolean;
  clickOutsideToClose?: boolean;
  closeLabel?: string;
  customRender?(): React.ReactNode | null;
  discourageDownloads?: boolean;
  enableZoom?: boolean;
  imageCaption?: React.ReactNode | string;
  imageCrossOrigin?: string;
  imageLoadErrorMessage?: React.ReactNode;
  imagePadding?: number;
  imageTitle?: React.ReactNode | string;
  keyRepeatKeyupBonus?: number;
  keyRepeatLimit?: number;
  mainSrc: string;
  mainSrcThumbnail?: string;
  nextLabel?: string;
  nextSrc?: string;
  nextSrcThumbnail?: string;
  onAfterOpen?(): void;
  onCloseRequest(): void;
  onImageLoad?(): void;
  onImageLoadError?(): void;
  onMoveNextRequest?(): void;
  onMovePrevRequest?(): void;
  prevLabel?: string;
  prevSrc?: string;
  prevSrcThumbnail?: string;
  reactModalProps?: any;
  reactModalStyle?: any;
  toolbarButtons?: React.ReactNode[];
  wrapperClassName?: string;
  zoomInLabel?: string;
  zoomOutLabel?: string;
}

export default class Lightbox extends React.Component<ILightBoxProps, never> { }
