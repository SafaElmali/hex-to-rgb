import React from 'react';
import { DisplayRgb } from './DisplayRgb';

export const PrevSearches = ({ searchList }) => (
    <div>
        <div>
            <p className="title-props" style={{ textAlign: 'center', fontSize: 22 }}>Your previous searches will be displayed in here <span role="img" aria-label="emoji">👇</span></p>
        </div>
            <div className="prev-card-props">
                {
                    searchList.length > 0 ? searchList.map((value, index) => (
                        <DisplayRgb color={value} key={index} />
                    )) : <p style={{ textAlign: 'center', color: '#f8f9fa' }}>Currently, you don't have any previous search...</p>
                }
        </div>
    </div>
)
