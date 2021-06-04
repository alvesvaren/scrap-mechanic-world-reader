import React from "react";
import "./app.css";
export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {};
    }
    render() {
        return <div>Hello world!</div>;
    }
}

export default App;
