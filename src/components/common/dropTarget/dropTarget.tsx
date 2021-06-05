import * as React from 'react';
import './dropTarget.sass';

export interface DropTargetProps {
    text: string;
    droppingText?: string;
}

export interface DropTargetState {
    currentlyOver: boolean;
}

class DropTarget extends React.Component<DropTargetProps, DropTargetState> {
    constructor(props: DropTargetProps) {
        super(props);
        this.state = { currentlyOver: false };
    }

    handleDrop(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        console.log(event.dataTransfer.files);
        this.setState({ currentlyOver: false });
    }

    handleDragOver(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        this.setState({ currentlyOver: true });
    }

    handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        this.setState({ currentlyOver: false });
    }

    render() {
        return (
            <div
                className={'drop-area' + (this.state.currentlyOver ? ' over' : '')}
                onDragOver={this.handleDragOver.bind(this)}
                onDrop={this.handleDrop.bind(this)}
                onDragLeave={this.handleDragLeave.bind(this)}>
                {this.state.currentlyOver ? this.props.droppingText || this.props.text : this.props.text}
            </div>
        );
    }
}

export default DropTarget;
