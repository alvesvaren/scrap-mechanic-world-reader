import * as React from 'react';

export interface FileProps {}

export interface FileState {}

class File extends React.Component<FileProps, FileState> {
    constructor(props: FileProps) {
        super(props);
        this.state = {};
    }
    render() {
        return <div>Hello world</div>;
    }
}

export default File;
