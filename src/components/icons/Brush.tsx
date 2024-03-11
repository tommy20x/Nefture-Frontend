import { SVGProps } from 'react';

export default function Brush({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.33462 7.48127L7.85314 9.99979M4.6512 13.983C3.73998 14.8943 2.0013 14.6665 0.667969 14.6665C1.35137 13.3331 0.440145 11.5944 1.35137 10.6832C2.26259 9.77198 3.73998 9.77198 4.6512 10.6832C5.56242 11.5944 5.56242 13.0718 4.6512 13.983ZM7.28237 10.6162L13.3738 4.03748C13.9103 3.45804 13.893 2.55818 13.3346 1.99979C12.7762 1.44139 11.8764 1.42409 11.2969 1.96062L4.71819 8.05202C4.37824 8.36679 4.20826 8.52418 4.10912 8.69204C3.8714 9.09455 3.86183 9.59215 4.08391 10.0035C4.17652 10.175 4.34033 10.3388 4.66793 10.6665C4.99554 10.9941 5.15935 11.1579 5.33089 11.2505C5.74224 11.4726 6.23984 11.463 6.64235 11.2253C6.81021 11.1261 6.9676 10.9562 7.28237 10.6162Z"
        stroke="#6F6C7C"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}