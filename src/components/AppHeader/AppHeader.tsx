import React from 'react';
import {Box, Header, Text} from "@mantine/core";
import {Icon} from "../Icon";

export const AppHeader = () => {
    return (
        <Header height={60} p="sm">
            <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Icon name={"MainIcon"} />
                <Text ml={20} size='lg' weight='bold' sx={{userSelect: 'none'}}>
                    Photo Gallery
                </Text>
            </Box>
        </Header>
    );
};