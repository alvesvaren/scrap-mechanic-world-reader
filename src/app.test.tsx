import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';
import { BrowserRouter, Route } from 'react-router-dom';

test('renders learn react link', () => {
    render(
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    );
});
