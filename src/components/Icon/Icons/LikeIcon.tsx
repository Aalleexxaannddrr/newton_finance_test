import React from 'react';
import {IconsType} from "../IconsType";

export const LikeIcon = ({color = '#D75A4A'}: IconsType) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_215_37)">
                <path d="M11.928 4.86047C12.8966 2.56463 15.1094 0.960471 17.6832 0.960471C21.1502 0.960471 23.6472
                3.92639 23.9611 7.46111C23.9611 7.46111 24.1306 8.33855 23.7576 9.91823C23.2498 12.0696 22.056 13.981
                20.4466 15.4397L11.928 23.04L3.55296 15.4392C1.94352 13.981 0.749761 12.0691 0.241921 9.91775C-0.131039
                8.33807 0.038401 7.46063 0.038401 7.46063C0.352321 3.92591 2.84928 0.959991 6.31632 0.959991C8.89056
                0.959991 10.9594 2.56463 11.928 4.86047Z" fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_215_37">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>

    );
};