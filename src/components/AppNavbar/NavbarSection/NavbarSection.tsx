import React, {FC} from 'react';
import {Box, Navbar, Text} from "@mantine/core";

type NavbarSectionProps = {
    children?: string
    icon: JSX.Element
    onClick?: () => void
    isActive?: boolean
}

export const NavbarSection: FC<NavbarSectionProps> = ({children, icon, onClick, isActive}) => {
    return (
        <Navbar.Section onClick={onClick}>
            <Box p='xs' sx={{
                display: 'flex',
                borderRadius: 5,
                cursor: "pointer",
                backgroundColor: isActive ? '#f8f8f8' : 'transparent',
                '&:hover': {
                    backgroundColor: '#F1f1f1'
                }
            }}>
                {icon}
                <Text ml={15} size='md' sx={{userSelect: 'none'}}>
                    {children}
                </Text>
            </Box>
        </Navbar.Section>
    );
};