import React from 'react';
import { NavLink, NavLinkProps, Switch, RouteComponentProps } from 'react-router-dom';
import './app.sass';
export interface AppProps extends RouteComponentProps {}

export interface AppState {
    leftSize?: number;
    resizing: boolean;
}

class App extends React.Component<AppProps, AppState> {
    leftColRef: React.Ref<HTMLElement>;
    constructor(props: AppProps) {
        super(props);
        this.state = { resizing: false };
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
        console.log(window.location.hash);
        return <NavLink {...props} to={{ pathname: props.to.toString(), hash: this.props.location.hash }} />;
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
                    <Switch></Switch>
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
                    <Switch></Switch>
                </main>
            </div>
        );
    }
}

export default App;
