import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import ProfileSelection from '../pages/ProfileSelection';
import ProfilesAndMore from '../pages/ProfilesAndMore';
import Layout from '../containers/Layout';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route exact path="/more" element={ <ProfilesAndMore /> } />
                    <Route exact path="/more" element={ <ProfilesAndMore /> } />
                    <Route exact path="/select-profile" element={ <ProfileSelection /> } />
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;