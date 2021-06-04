import * as React from 'react';

export interface BodiesProps {}

export interface BodiesState {}

class Bodies extends React.Component<BodiesProps, BodiesState> {
    constructor(props: BodiesProps) {
        super(props);
        this.state = {};
    }
    render() {
        return <div></div>;
    }
}

export default Bodies;
