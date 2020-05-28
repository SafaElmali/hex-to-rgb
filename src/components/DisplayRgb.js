import React from 'react';
import { copyToClipboard } from './Toaster';

export const DisplayRgb = ({ color }) => {
    const handleCopyRgb = () => {
        navigator.clipboard.writeText(`rgb(${color.red},${color.green},${color.blue})`);
        copyToClipboard();
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="card mt-3 mb-3" style={{ width: '18rem', borderRadius: '25px', filter: 'drop-shadow(2px 4px 4px black)' }}>
                <div className="card-header text-center card-title-props" style={{ color: `rgb(${color.red},${color.green},${color.blue})` }}>
                    <span>rgb({color.red},{color.green},{color.blue})</span>
                    <button onClick={handleCopyRgb} className="copy-button mt-2">Copy this rgb</button>
                </div>
                <div className="card-body">
                    <p className="text-center card-text-props">Color preview:</p>
                    <div style={{ width: 50, height: 50, backgroundColor: `rgb(${color.red},${color.green},${color.blue})`, margin: 'auto', border: '3px solid gray' }}>
                    </div>
                </div>
            </div>
        </div>
    )
}
