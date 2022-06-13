import React, {Dispatch, FC, useState, SetStateAction} from 'react';
import {Box, Button, Card, Image, Text} from "@mantine/core";
import {Icon} from "../../Icon";
import {ImgType} from "../../../types/ImgType";

interface GalleryItemProps {
    img: ImgType
    setLikedPhotos: Dispatch<SetStateAction<ImgType[]>>
}

export const GalleryItem: FC<GalleryItemProps> = ({img, setLikedPhotos}) => {
    const [isLiked, setIsLiked] = useState<boolean>(img.isLiked)

    const toggleLike = () => {
        setIsLiked(!isLiked)
        img.isLiked = !isLiked
        if (!isLiked) {
            setLikedPhotos(prevState => [...prevState, img])
        } else {
            setLikedPhotos(prevState => [...prevState.filter(photo => photo !== img)])
        }
    }

    return (
        <Card
            shadow="sm"
            p="lg"
            m={20}
        >
            <Card.Section>
                <Image src={img.download_url} width={300} height={160} alt={img.author} />
            </Card.Section>
            <Text weight={500} size="lg">
                {img.author}
            </Text>
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center'
            }}
            >
                <Button component='a' href={img.url} target='_blank' variant="light" color="blue" fullWidth mt={14} mr={10}>
                    Watch on Unsplash
                </Button>
                <Box mt={15} sx={{
                    cursor: 'pointer'
                }}
                     onClick={toggleLike}
                >
                    <Icon name={"LikeIcon"} color={isLiked ? undefined : '#F1F1F1'} />
                </Box>
            </Box>
        </Card>
    );
};