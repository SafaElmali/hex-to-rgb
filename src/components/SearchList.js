import React from 'react';
import { DisplayRgb } from './DisplayRgb';

const SearchList = ({ searchList }) => (
    <>
        <div>
            <p className="title-props" style={{ textAlign: 'center', fontSize: 22 }}>Your previous searches will be displayed in here <span role="img" aria-label="emoji">👇</span></p>
        </div>
        <div className="prev-card-props">
            {searchList.length > 0 ? searchList.map((value, index) => (
                <DisplayRgb color={value} key={index} />
            )) : null
            }
        </div>
    </>
)

export default SearchList;