import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './views/MainPage';
import SearchPage from './views/SearchPage';

class BooksApp extends React.Component {
    render() {
        return (
        <div className="app">
            <BrowserRouter>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/search" exact>
                    <SearchPage />
                </Route>
            </BrowserRouter>
        </div>
        )
    }
}

export default BooksApp
