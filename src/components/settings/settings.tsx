import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { setPreferences } from '../../utils';

export interface SettingsProps extends RouteComponentProps {}

export interface SettingsState {}

class Settings extends React.Component<SettingsProps, SettingsState> {
    constructor(props: SettingsProps) {
        super(props);
        this.state = {};
        this.handleClearPreferences = this.handleClearPreferences.bind(this);
    }
    handleClearPreferences() {
        setPreferences({});
        window.location.reload();
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClearPreferences}>Clear preferences</button>
                <button className="shining" onClick={this.handleClearPreferences}>Clear preferences</button>
            </div>
        );
    }
}

export default Settings;
