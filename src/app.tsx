import React from 'react';
import { NavLink, NavLinkProps, Switch, RouteComponentProps, Route, RouteProps, Redirect } from 'react-router-dom';
import './app.sass';
import File from './components/file/file';
import Hierarchy from './components/hierarchy/hierarchy';
import Settings from './components/settings/settings';
import { getPreference, setPreference } from './utils';
export interface AppProps extends RouteComponentProps {}

// export interface HashRouteProps extends RouteProps {
//     path:
// }

export interface AppState {
    leftSize?: number;
    resizing: boolean;
}

class App extends React.Component<AppProps, AppState> {
    leftColRef: React.Ref<HTMLElement>;
    constructor(props: AppProps) {
        super(props);
        this.state = { resizing: false, leftSize: getPreference('leftSize') };
        this.leftColRef = React.createRef();
        this.handleDragging = this.handleDragging.bind(this);
        this.HashPreservingNavLink = this.HashPreservingNavLink.bind(this);
        this.HashNavLink = this.HashNavLink.bind(this);
    }

    HashNavLink(props: React.PropsWithoutRef<NavLinkProps>) {
        return <NavLink isActive={() => window.location.hash === props.to} {...props} />;
    }

    HashPreservingNavLink(props: React.PropsWithoutRef<NavLinkProps>) {
        if (typeof props.to === 'object') {
            throw new TypeError('Objects as to attribute is currently not supported');
        }
        return <NavLink {...props} to={{ pathname: props.to.toString(), hash: this.props.location.hash }} />;
    }

    HashRoute(routeProps: RouteProps) {
        let newRouteProps = { ...routeProps };
        delete newRouteProps.path;
        delete newRouteProps.component;
        return (
            <Route
                {...newRouteProps}
                render={(props: RouteComponentProps) => {
                    console.log('Rendering!');
                    if (props.location.hash === routeProps.path && routeProps.component) {
                        return <routeProps.component {...props} />;
                    }
                    return <></>;
                }}
            />
        );
    }

    handleDragging(e: React.MouseEvent<HTMLDivElement>) {
        if (this.state.resizing) {
            this.setState({ leftSize: e.clientX });
            document.documentElement.style.cursor = 'ew-resize';
        } else {
            document.documentElement.style.cursor = 'unset';
        }
    }

    componentDidUpdate() {
        setPreference('leftSize', this.state.leftSize);
    }

    render() {
        return (
            <div
                id='app'
                onMouseMove={this.handleDragging}
                onMouseUp={() => {
                    if (this.state.resizing) this.setState({ resizing: false });
                }}>
                <aside ref={this.leftColRef} style={{ width: this.state.leftSize }} id='left-col'>
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
                    <div id='left-content'>
                        <this.HashRoute path='#file' component={File} />
                        <this.HashRoute path='#settings' component={Settings} />
                        <this.HashRoute path='#hierarchy' component={Hierarchy} />
                    </div>
                </aside>
                <div className='resize-vertical-divider' onMouseDown={() => this.setState({ resizing: true })} />
                <main id='right-col'>
                    <nav>
                        <ul className='tabbed'>
                            <li className='selected'>
                                <this.HashPreservingNavLink to='/bodies'>Bodies</this.HashPreservingNavLink>
                            </li>
                            <li>
                                <this.HashPreservingNavLink to='/world'>World</this.HashPreservingNavLink>
                            </li>
                            <li>
                                <this.HashPreservingNavLink to='/3d'>3d</this.HashPreservingNavLink>
                            </li>
                            <li>
                                <this.HashPreservingNavLink to='/map'>Map</this.HashPreservingNavLink>
                            </li>
                        </ul>
                    </nav>
                    <Route exact path='/'>
                        <Redirect to='/bodies#file' />
                    </Route>
                    <Switch></Switch>
                </main>
            </div>
        );
    }
}

export default App;
