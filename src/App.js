import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { GithubCorner } from './components/GithubCorner';
import { Spinner } from './components/Spinner'
import { DisplayRgb } from './components/DisplayRgb';
import { PrevSearches } from './components/PrevSearches';
import { invalidHexCode, checkPoundSign, notValidHexCode } from './components/Toaster';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      loading: false,
      displayRgb: false,
      color: {
        r: 0,
        g: 0,
        b: 0,
      },
      searchList: sessionStorage.getItem("prevSearches") == null ? [] : JSON.parse(sessionStorage.getItem("prevSearches")),
    }

    this.hexToRgb = this.hexToRgb.bind(this);
    this.handleHex = this.handleHex.bind(this);
  }

  handleHex = event => {
    this.setState({ value: event.target.value });
  }

  hexToRgb = () => {
    if (this.state.value.trim() === '') {
      invalidHexCode();
      this.setState({
        value: "",
      });
      return;
    } else {
      let { value } = this.state;

      if (value.startsWith('#')) {
        checkPoundSign();
        return;
      }

      let red = parseInt(value.slice(0, 2), 16);
      let green = parseInt(value.slice(2, 4), 16);
      let blue = parseInt(value.slice(4, 6), 16);

      if (Number.isNaN(red) || Number.isNaN(green) || Number.isNaN(blue)) {
        notValidHexCode(this.state.value);
        return;
      }

      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({
          loading: false,
          displayRgb: true,
          color: {
            r: red,
            g: green,
            b: blue,
          }
        });
        this.setSessionStorage();
      }, 1500);
    }
  }

  setSessionStorage = () => {
    this.setState({
      searchList: this.state.searchList.concat(this.state.color)
    });

    sessionStorage.setItem("prevSearches", JSON.stringify(this.state.searchList));
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.hexToRgb();
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <ToastContainer position={toast.POSITION.TOP_RIGHT} />
        <div className="row">
          <div className="col-12">
            <div className="title-props text-center">
              <h1>Hex-to-RGB</h1>
            </div>
            <div className="col-md-4 mx-auto mt-3">
              <label className="text-props">Hex Code</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-hashtag"></i>
                  </span>
                </div>
                <input type="text" className="form-control" placeholder="e.g 282C34" maxLength="7" onChange={this.handleHex} onKeyPress={this.handleKeyPress} required />
                <div className="input-group-append">
                  <span onClick={this.hexToRgb} className="input-group-text" id="search"><i className="fas fa-search"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Spinner loading={this.state.loading} />
        <GithubCorner />
        {this.state.displayRgb ? <DisplayRgb isPrev={false} red={this.state.color.r} green={this.state.color.g} blue={this.state.color.b} /> : null}
        <hr className="line-props" />
        <PrevSearches searchList={this.state.searchList} />
      </div>
    )
  }
}



export default App;