import React from 'react';
import { PulseLoader } from 'react-spinners';

export const Spinner = props => {
    return (
        <div className="row mt-4">
            <div className="col-12 text-center">
                <div className='sweet-loading'>
                    <PulseLoader
                        sizeUnit={"px"}
                        size={20}
                        color={'#35D7B7'}
                        loading={props.loading}
                    />
                </div>
            </div>
        </div>
    )
}
