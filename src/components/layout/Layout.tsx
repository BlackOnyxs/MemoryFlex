import { Route, Routes } from 'react-router-dom';
import { NavBar, SideBar } from '../ui'
import { Box } from '@mui/material'
import { AccountPage, MainPage } from '../../pages';

export const Layout = () => {
  return (
    <Box sx={{ flexFlow: 1 }}>

    <NavBar />
    <SideBar />

    <Box 
      sx={{ padding: '10px 20px'}}
    >
        <Routes>
          <>
            <Route path='/' element={ <MainPage />}/>
            <Route path='/account' element={ <AccountPage />}/>
          </>
        </Routes>
    </Box>
    </Box>
  )
}
