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
        // return (
        //     <ul className='tree'>
        //         <li>
        //             <span className='caret'>root</span>
        //             <ul className='nested'>
        //                 <li>
        //                     <span className='caret'>creation1</span>
        //                     <ul className='nested'>
        //                         <li>part1</li>
        //                         <li>part2</li>
        //                     </ul>
        //                 </li>
        //                 <li>
        //                     <span className='caret'>creation2</span>
        //                     <ul className='nested'>
        //                         <li>part1</li>
        //                         <li>part2</li>
        //                     </ul>
        //                 </li>
        //             </ul>

        //         </li>
        //     </ul>
        // );

        return (
            <Tree name="root">
                <TreeNode name='creation1'>
                    <TreeNode name="state">
                        <li>id: hejsan</li>
                    </TreeNode>
                </TreeNode>
            </Tree>
        );
    }
}

export default Hierarchy;
