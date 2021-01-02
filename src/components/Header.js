import React, { useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { convertHexToRgb } from '../util';
import { DisplayRgb } from './DisplayRgb';
import { GithubCorner } from './GithubCorner';

const Header = ({ setValue, value, setColor, setSearchList, color }) => {
    const input = useRef();

    useEffect(() => {
        input.current.focus();
    }, [])

    const handleKeyPress = event => event.key === 'Enter' ? handleConvert() : null;

    const handleConvert = () => {
        const response = convertHexToRgb(value);

        if (!response) {
            setValue("");
        } else {
            const { red, green, blue } = response;
            setColor({ red, green, blue });
            setSearchList(prevList => prevList.concat({ red, green, blue }));
        }
    }

    return (
        <>
            <ToastContainer position={toast.POSITION.TOP_RIGHT} />
            <GithubCorner />
            <div className="row">
                <div className="col-12" style={{ padding: "30px 30px 0px 30px" }}>
                    <div className="title-props text-center">
                        <h1>Hex-to-RGB</h1>
                    </div>
                    <div className="col-md-4 mx-auto mt-3">
                        <label className="text-props">Hex Code</label>
                        <div style={{ position: 'relative' }}>
                            <i className="fas fa-hashtag icon-props"></i>
                            <input ref={input} type="text" className="form-control input-props" placeholder="e.g 282C34" maxLength="6" onChange={({ target }) => setValue(target.value)} onKeyPress={handleKeyPress} required />
                            <i className="fas fa-search search-icon-props" onClick={convertHexToRgb} style={{ cursor: 'pointer' }} id="search"></i>
                        </div>
                        <div className="input-group-append">
                        </div>
                    </div>
                </div>
            </div>
            {color ? <DisplayRgb color={color} /> : null}
        </>
    )
}

export default Header;