export const LiveActiveIcon = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="rgba(254, 44, 85, 1.0)"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M6.5 17.5714C6.5 14.7292 8.86029 12.5 11.6782 12.5H27.8621C30.6799 12.5 33.0402 14.7292 33.0402 17.5714V18.6843L36.745 15.9435C37.6399 15.2815 38.8324 15.1731 39.8318 15.6537C40.8365 16.1369 41.5 17.1486 41.5 18.2857V29.7143C41.5 30.8514 40.8365 31.8631 39.8318 32.3463C38.8324 32.8269 37.6399 32.7185 36.745 32.0565L33.0402 29.3158V30.4286C33.0402 33.2708 30.6799 35.5 27.8621 35.5H11.6782C8.86029 35.5 6.5 33.2708 6.5 30.4286V17.5714Z"></path>
        <path
            d="M23.25 23.134C23.9167 23.5189 23.9167 24.4811 23.25 24.866L17.25 28.3301C16.5833 28.715 15.75 28.2339 15.75 27.4641L15.75 20.5359C15.75 19.7661 16.5833 19.285 17.25 19.6699L23.25 23.134Z"
            fill="white"
        ></path>
    </svg>
);
export const LoadingIcon = ({ width = '1.8rem', height = '1.8rem', className, color, stroke = '#555' }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M16 8.00023L18.3642 5.63609M5.63631 18.364L8.00026 16M17.6566 12H21M3 12H6.34315M12 6.34342L12 3M12 21L12 17.6569M8.00023 8.00023L5.63609 5.63609M18.364 18.364L16 16"
            stroke={stroke}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);
export const CrossCircleIcon = ({ width = '1.6rem', height = '1.6rem', className, color, stroke = '#555' }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke={stroke}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);
export const SearchIcon = ({ width = '2.1rem', height = '2.1rem', className, color = '#374957', stroke = '#555' }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clip-path="url(#clip0_3_122916)">
            <path
                d="M23.5612 21.4454L18.9161 16.7983C22.3918 12.1535 21.4441 5.57052 16.7993 2.0948C12.1546 -1.38092 5.57156 -0.433205 2.09584 4.21157C-1.37988 8.85634 -0.432167 15.4393 4.21261 18.9151C7.94367 21.7071 13.0682 21.7071 16.7993 18.9151L21.4464 23.5622C22.0304 24.1462 22.9773 24.1462 23.5612 23.5622C24.1452 22.9782 24.1452 22.0314 23.5612 21.4474L23.5612 21.4454ZM10.5447 18.0181C6.41664 18.0181 3.07023 14.6717 3.07023 10.5437C3.07023 6.4156 6.41664 3.06919 10.5447 3.06919C14.6727 3.06919 18.0192 6.4156 18.0192 10.5437C18.0148 14.6698 14.6709 18.0137 10.5447 18.0181Z"
                fill={color}
            />
        </g>
        <defs>
            <clipPath id="clip0_3_122916">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
export const UserIcon = ({ width = '2.1rem', height = '2.1rem', className, color = '#374957', stroke = '#555' }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M23 9L19.8001 12.1999L18 10.4M8 15H16C18.2091 15 20 16.7909 20 19V21H4V19C4 16.7909 5.79086 15 8 15ZM16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
            stroke={stroke}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);
export const CrossIcon = ({ width = '2.1rem', height = '2.1rem', className, color = '#374957', stroke = '#555' }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M19 5L5 19M5.00001 5L19 19"
            stroke={stroke}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);
