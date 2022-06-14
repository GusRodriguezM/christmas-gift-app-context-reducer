import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { LoginScreen } from '../components/auth/LoginScreen';
import { PrivateRoute } from './PrivateRoute';
import { GiftScreen } from '../components/gifts/GiftScreen';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                } />

                <Route path='/*' element={
                    <PrivateRoute>
                        <GiftScreen />
                    </PrivateRoute>
                } />

            </Routes>
        </>
    )
}