import * as React from 'react';
import './tree.sass';

export interface TreeNodeProps {
    name: string;
}

export interface TreeNodeState {
    active: boolean;
}

export class TreeNode extends React.Component<TreeNodeProps, TreeNodeState> {
    constructor(props: TreeNodeProps) {
        super(props);
        this.state = { active: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ active: !this.state.active });
    }

    render() {
        return (
            <li>
                <span onClick={this.handleClick} className={'caret' + (this.state.active ? ' down' : '')}>
                    {this.props.name}
                </span>
                <ul className={'nested' + (this.state.active ? ' active' : '')}>{this.props.children}</ul>
            </li>
        );
    }
}

export interface TreeProps {
    name: string;
}

export interface TreeState {}

export class Tree extends React.Component<TreeProps, TreeState> {
    constructor(props: TreeProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ul className='tree'>
                <TreeNode name={this.props.name}>{this.props.children}</TreeNode>
            </ul>
        );
    }
}
