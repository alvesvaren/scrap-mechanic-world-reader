import * as React from 'react';
import './dropTarget.sass';

export interface DropTargetProps {
    text: string;
    droppingText?: string;
}

export interface DropTargetState {
    currentlyOver: boolean;
    processing: boolean;
    percentage: number;
}

class DropTarget extends React.Component<DropTargetProps, DropTargetState> {
    areaRef: React.RefObject<HTMLDivElement>;
    constructor(props: DropTargetProps) {
        super(props);
        this.areaRef = React.createRef();
        this.state = { currentlyOver: false, processing: false, percentage: 0 };
    }

    handleDrop(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        console.log(event.dataTransfer.files);
        this.setState({ currentlyOver: false, processing: true });
        setTimeout(() => {
            this.setPercentage(100);
        }, 100);
        setTimeout(() => {
            this.setState({processing: false})
            setTimeout(() => {
                this.setState({percentage: 0});
            }, 2000)
        }, 2000)
    }

    handleDragOver(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        this.setState({ currentlyOver: true });
    }

    handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        this.setState({ currentlyOver: false });
    }

    setPercentage(num: number) {
        this.setState({percentage: num});
    }

    componentDidUpdate() {
        this.areaRef.current?.style.setProperty("--percentage", this.state.percentage + "%");
    }

    render() {
        
        return (
            <div
                ref={this.areaRef}
                className={
                    'drop-area' +
                    (this.state.currentlyOver ? ' over' : '') +
                    (this.state.processing ? ' processing' : '')
                }
                onDragOver={this.handleDragOver.bind(this)}
                onDrop={this.handleDrop.bind(this)}
                onDragLeave={this.handleDragLeave.bind(this)}>
                {this.state.currentlyOver ? this.props.droppingText || this.props.text : this.props.text}
            </div>
        );
    }
}

export default DropTarget;
