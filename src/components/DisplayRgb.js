import React from 'react';
import { copyToClipboard } from './Toaster';

export const DisplayRgb = props => {

    const handleCopyRgb = () => {
        navigator.clipboard.writeText(`rgb(${props.red},${props.green},${props.blue})`);
        copyToClipboard();
    }

    return props.isPrev === true ?
        (
            <div className="card mt-3 mr-4" style={{ width: '18rem' }}>
                <div className="card-header text-center card-title-props" style={{ color: `rgb(${props.red},${props.green},${props.blue})` }}>
                    <span>rgb({props.red},{props.green},{props.blue})</span>
                    <button onClick={handleCopyRgb} className="copy-button mt-2">Copy this rgb</button>
                </div>
                <div className="card-body">
                    <p className="text-center card-text-props">Color preview:</p>
                    <div style={{ width: 50, height: 50, backgroundColor: `rgb(${props.red},${props.green},${props.blue})`, margin: 'auto', border: '3px solid gray' }}>
                    </div>
                </div>
            </div >
        ) :
        (
            <div className="card mt-3" style={{ width: '18rem', margin: 'auto' }}>
                <div className="card-header text-center card-title-props" style={{ color: `rgb(${props.red},${props.green},${props.blue})` }}>
                    <span>rgb({props.red},{props.green},{props.blue})</span>
                    <button onClick={handleCopyRgb} className="copy-button mt-2">Copy this rgb</button>
                </div>
                <div className="card-body">
                    <p className="text-center card-text-props">Color preview:</p>
                    <div style={{ width: 50, height: 50, backgroundColor: `rgb(${props.red},${props.green},${props.blue})`, margin: 'auto', border: '3px solid gray' }}>
                    </div>
                </div>
            </div >
        )
}
