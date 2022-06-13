import React, {FC} from 'react';
import {Navbar} from "@mantine/core";
import {Icon} from "../Icon";
import {NavbarSection} from "./NavbarSection";

interface AppNavbarProps {
    activeTabNumber: number
    changeTab: (tabNumber: number) => void
}

export const AppNavbar: FC<AppNavbarProps> = ({activeTabNumber, changeTab}) => {
    return (
        <Navbar width={{ base: 300 }} p="lg">
            <NavbarSection icon={<Icon name={"AlbumIcon"} />} isActive={activeTabNumber === 0} onClick={() => changeTab(0)}>
                Вся галеррея
            </NavbarSection>
            <NavbarSection icon={<Icon name={"LikeIcon"} />} isActive={activeTabNumber === 1} onClick={() => changeTab(1)}>
                Избранное
            </NavbarSection>
        </Navbar>
    );
};