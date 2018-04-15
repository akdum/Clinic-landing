import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Title } from '../title/Title';
import { IServicesBlocksProps } from './IServicesBlocksProps';
import { Services } from '../services/Services'

export class ServicesBlocks extends React.Component<IServicesBlocksProps, null> {
    render() {
        return(        
        <div className='container'>
            <Title value={this.props.title} />
            {this.props.blocks.map((block) =><div> <Title value={block.title} subTitle={true} /><Services isBlock={false} services={[block.services.slice(0,4),block.services.slice(4)]}/></div>)}
        </div>
        )
    }
}