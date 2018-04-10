import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { IDoctorsProps } from './IDoctorsProps';
import { Title } from '../title/Title';
import { Doctor } from '../doctor/Doctor';

export class Doctors extends React.Component<IDoctorsProps, null> {
    render() {
        return(
            <div className="doctors">
                <div className="container">
                    <Title value={this.props.title} />                
                    {this.props.doctorsRows.map((row)=><div className="row">
                        {row.map((doctor) =><div className="col-md-3"><Doctor {...doctor} key={doctor.photoName} /></div>)}
                    </div>)}
                    {this.props.showSeeAll && <div className="who-we-are__next d-flex justify-content-center">
                        <a href={window.location.origin + '/pages/' + this.props.pageName} className="btn btn-primary btn-lg bg-btn btn-border color-white w-100">Больше врачей</a>
                    </div>}
                </div>
            </div>
        )
    }
}