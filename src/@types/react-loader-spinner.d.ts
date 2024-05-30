declare module 'react-loader-spinner' {
  import React from 'react';

  export interface TailSpinProps {
    visible?: boolean;
    height?: string;
    width?: string;
    color?: string;
    ariaLabel?: string;
    radius?: string;
    wrapperStyle?: object;
    wrapperClass?: string;
  }

  export const TailSpin: React.FC<TailSpinProps>;
}
