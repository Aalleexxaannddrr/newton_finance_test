import React, {Dispatch, FC, SetStateAction} from 'react';
import {Box} from "@mantine/core";
import {ImgType} from "../../types/ImgType";
import {GalleryItem} from "./GalleryItem";

type GalleryProps = {
    imgList: ImgType[]
    setLikedPhotos: Dispatch<SetStateAction<ImgType[]>>
}

export const Gallery: FC<GalleryProps> = ({imgList, setLikedPhotos}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: "wrap",
            justifyContent: 'space-around'
        }}>
            {imgList.map(img => (
                <GalleryItem key={img.id} img={img} setLikedPhotos={setLikedPhotos} />
            ))}
        </Box>
    );
};