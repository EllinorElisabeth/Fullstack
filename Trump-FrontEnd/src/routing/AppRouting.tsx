import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, AddThoughtPage, SearchPage, ImagePage } from '../pages';
import Navigationbar from '../components/Navigation/Navigationbar';
import { TrumpProvider } from '../context/TrumpContext';

const AppRouting = () => {
    return (
        <>
            <BrowserRouter>
                <TrumpProvider>
                    <Navigationbar />
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='add' element={<AddThoughtPage />} />
                        <Route path='search' element={<SearchPage />} />
                        <Route path='upload' element={<ImagePage />} />
                    </Routes>
                </TrumpProvider>
            </BrowserRouter>
        </>
    )
}

export default AppRouting;