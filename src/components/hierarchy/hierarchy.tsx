import * as React from 'react';
import { Tree, TreeNode } from '../common/tree/tree';

export interface HierarchyProps {}

export interface HierarchyState {}

class Hierarchy extends React.Component<HierarchyProps, HierarchyState> {
    constructor(props: HierarchyProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Tree name="root">
                <TreeNode name='creation1'>
                    <TreeNode name="state">
                        <li>id: hejsan</li>
                    </TreeNode>
                    <TreeNode name="part1">
                        <li>type: block</li>
                        <li>color: #111aaa</li>
                    </TreeNode>
                </TreeNode>
                <TreeNode name='creation2'>
                    <TreeNode name="state">
                        <li>id: hejsan</li>
                    </TreeNode>
                    <TreeNode name="part1">
                        <li>type: block</li>
                        <li>color: #111aaa</li>
                    </TreeNode>
                </TreeNode>
            </Tree>
        );
    }
}

export default Hierarchy;
