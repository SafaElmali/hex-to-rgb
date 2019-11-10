import React from 'react';
import { DisplayRgb } from './DisplayRgb';

export const PrevSearches = (props) =>
    (
        <div className="card">
            <div className="card-header text-center card-text-props">
                Your searches will be displayed in here <span role="img" aria-label="emoji">👇</span>
            </div>
            <div className="card-body prev-card-props">
                {props.searchList.length > 0 ? props.searchList.map((value, index) =>
                    <DisplayRgb isPrev={true} red={value.r} green={value.g} blue={value.b} key={index} />
                ) : <span className="card-text-props">Currently, you don't have any previous search.</span>
                }
            </div>
        </div>
    )
