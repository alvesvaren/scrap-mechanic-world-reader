import React from 'react';
import { BrowserRouter, NavLink, NavLinkProps, Switch } from 'react-router-dom';
import './app.sass';
export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {};
    }
    HashNavLink(props: React.PropsWithoutRef<NavLinkProps>){
        return <NavLink isActive={() => window.location.hash === props.to} {...props} />;
    }
    render() {
        return (
            <BrowserRouter>
                <div id='app'>
                    <aside id='left-col'>
                        <nav>
                            <ul className='tabbed'>
                                <li>
                                    <this.HashNavLink to='#file'>File</this.HashNavLink>
                                </li>
                                <li>
                                    <this.HashNavLink to='#hierarchy'>Hierarchy</this.HashNavLink>
                                </li>
                                <li>
                                    <this.HashNavLink to='#settings'>Settings</this.HashNavLink>
                                </li>
                            </ul>
                        </nav>
                        <Switch></Switch>
                    </aside>
                    <main id='right-col'>
                        <nav>
                            <ul className='tabbed'>
                                <li className="selected">
                                    <NavLink to='/bodies'>Bodies</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/world'>World</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/3d'>3d</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/map'>Map</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
