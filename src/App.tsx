import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {ImgType} from "./types/ImgType";
import {AppShell, Box, Pagination} from "@mantine/core";
import {AppHeader, AppNavbar, Gallery} from "./components";

function App() {
    const [data, setData] = useState<ImgType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [activePage, setPage] = useState<number>(1)
    const [activeTab, setActiveTab] = useState<number>(0)
    const [imgList, setImgList] = useState<ImgType[]>([])
    const [likedPhotos, setLikedPhotos] = useState<ImgType[]>([])

    const getData = useCallback(async () => {
        try {
          setLoading(true)
          const response = await fetch('https://picsum.photos/v2/list?limit=100');
          const data = await response.json()
          setData(data)
          console.log(data)
        } catch (err) {
          console.error(err)
        }
    }, [])

    useEffect(() => {
        getData().then(() => setLoading(false))
    }, [getData])

    const changeTab = (tabNumber: number) => {
        setPage(1)
        setActiveTab(tabNumber)
    }

    useEffect(() => {
        setImgList(activeTab === 0 ? data : likedPhotos)
    }, [likedPhotos, data, activeTab])

    if (loading) return <div>Loading...</div>

    return (
      <AppShell
          fixed
          padding="md"
          navbar={<AppNavbar activeTabNumber={activeTab} changeTab={changeTab} />}
          header={<AppHeader />}
      >
          <Gallery imgList={imgList.slice((activePage - 1) * 12, ((activePage - 1) * 12) + 12)} setLikedPhotos={setLikedPhotos} />
          <Box sx={{
              display: "flex",
              justifyContent: "center"
          }}>
              {Math.ceil(imgList.length / 12) > 1 && (
                <Pagination
                    total={Math.ceil(imgList.length / 12)}
                    page={activePage}
                    onChange={setPage}
                />
              )}
          </Box>
      </AppShell>
    );
}

export default App;
