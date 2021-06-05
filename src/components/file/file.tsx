import * as React from 'react';

export interface FileProps {}

export interface FileState {}

class File extends React.Component<FileProps, FileState> {
    constructor(props: FileProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <div className="drop-area">Drop world database file here</div>
                <div className="drop-area">Drop blueprint file here</div>
            </>
        );
    }
}

export default File;
