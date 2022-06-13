import React, {FC} from 'react';
import * as ICONS from './Icons'

type IconProps = {
    name: keyof typeof ICONS
    color?: string
}

export const Icon: FC<IconProps> = ({name, color}) => {
    const Icon = ICONS[name]

    return <Icon color={color} />
};