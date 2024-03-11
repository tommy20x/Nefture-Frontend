import { SVGProps } from 'react';

export default function Table({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.5 6H16.5M1.5 11H16.5M9 1V16M5.5 1H12.5C13.9001 1 14.6002 1 15.135 1.27248C15.6054 1.51217 15.9878 1.89462 16.2275 2.36502C16.5 2.8998 16.5 3.59987 16.5 5V12C16.5 13.4001 16.5 14.1002 16.2275 14.635C15.9878 15.1054 15.6054 15.4878 15.135 15.7275C14.6002 16 13.9001 16 12.5 16H5.5C4.09987 16 3.3998 16 2.86502 15.7275C2.39462 15.4878 2.01217 15.1054 1.77248 14.635C1.5 14.1002 1.5 13.4001 1.5 12V5C1.5 3.59987 1.5 2.8998 1.77248 2.36502C2.01217 1.89462 2.39462 1.51217 2.86502 1.27248C3.3998 1 4.09987 1 5.5 1Z"
        stroke="#827E91"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}