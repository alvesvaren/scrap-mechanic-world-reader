import * as React from 'react';
import DropTarget from '../common/dropTarget/dropTarget';

export interface FileProps {}

export interface FileState {

}

class File extends React.Component<FileProps, FileState> {
    constructor(props: FileProps) {
        super(props);
        this.state = {};
    }

    handleDrop(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        console.log(event.dataTransfer.files);
    }

    handleDragOver(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
    }

    render() {
        return (
            <>
                <DropTarget droppingText="Release to upload world" text="Drop world database file here"></DropTarget>
                <DropTarget droppingText="Release to upload blueprint" text="Drop blueprint file here"></DropTarget>
            </>
        );
    }
}

export default File;
