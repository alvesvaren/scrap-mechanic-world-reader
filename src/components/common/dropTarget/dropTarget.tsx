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

    async handleDrop(event: React.DragEvent<HTMLDivElement>) {
        event.stopPropagation();
        event.preventDefault();

        if (event.dataTransfer.files.length > 0) {
            this.setState({ currentlyOver: false, processing: true });
        } else {
            this.setState({ currentlyOver: false });
        }

        Array.from(event.dataTransfer.files).forEach(async file => {
            var reader = new FileReader();
            reader.addEventListener('progress', e => {
                var percentage = ((e.loaded || 0) / (e.total || 1)) * 100;
                this.setPercentage(percentage);
                console.log(percentage);
            });
            reader.addEventListener('load', e => {
                console.log('done!');
                this.setState({ percentage: 100 });
                setTimeout(() => {
                    this.setState({ processing: false });
                    setTimeout(() => {
                        this.setState({ percentage: 0 });
                    }, 2000);
                }, 1000);
            });
            reader.readAsBinaryString(file);
        });
    }

    handleDragOver(event: React.DragEvent<HTMLDivElement>) {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
        this.setState({ currentlyOver: true });
    }

    handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        this.setState({ currentlyOver: false });
    }

    setPercentage(num: number) {
        this.setState({ percentage: num });
    }

    componentDidUpdate() {
        this.areaRef.current?.style.setProperty('--percentage', this.state.percentage + '%');
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
