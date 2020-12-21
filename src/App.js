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
        red: 0,
        green: 0,
        blue: 0,
      },
      searchList: []
    }
  }

  componentWillMount() {
    this.setState({
      searchList: sessionStorage.getItem("prevSearches") == null ? [] : JSON.parse(sessionStorage.getItem("prevSearches")),
    })
  }

  handleHex = event => this.setState({ value: event.target.value });

  convertHexToRgb = () => {
    const { value } = this.state;

    if (value.trim() === '') {
      this.setState({
        value: "",
      });
      return invalidHexCode();
    } else {
      if (value.startsWith('#')) return checkPoundSign();
      
      const digits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
      const flag = 0;
      
      for(let i=0; i<6; i++)
      {
        let dig = value.charAt(i)
        for(let j=0;j<16;j++)
        {
          if(dig==digits[j])
            flag = 1;
        }
      }
      
      if(flag==0) return notValidHexCode(value);

      let red = parseInt(value.slice(0, 2), 16);
      let green = parseInt(value.slice(2, 4), 16);
      let blue = parseInt(value.slice(4, 6), 16);

      if (Number.isNaN(red) || Number.isNaN(green) || Number.isNaN(blue)) return notValidHexCode(value);

      this.setState({
        loading: true,

      });

      setTimeout(() => {
        this.setState({
          loading: false,
          displayRgb: true,
          color: {
            red,
            green,
            blue,
          }
        });
        this.setSessionStorage();
      }, 1500);
    }
  }

  setSessionStorage = () => {
    const { searchList, color } = this.state;

    this.setState({
      searchList: searchList.concat(color)
    }, () => {
      const { searchList } = this.state;
      sessionStorage.setItem("prevSearches", JSON.stringify(searchList))
    })
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') this.convertHexToRgb();
  }

  render() {
    const { color, searchList, loading, displayRgb } = this.state;

    return (
      <div>
        <ToastContainer position={toast.POSITION.TOP_RIGHT} />
        <div className="row">
          <div className="col-12" style={{ padding: "30px 30px 0px 30px" }}>
            <div className="title-props text-center">
              <h1>Hex-to-RGB</h1>
            </div>
            <div className="col-md-4 mx-auto mt-3">
              <label className="text-props">Hex Code</label>
              <div style={{ position: 'relative' }}>
                <i class="fas fa-hashtag icon-props"></i>
                <input type="text" className="form-control input-props" placeholder="e.g 282C34" maxLength="6" onChange={this.handleHex} onKeyPress={this.handleKeyPress} required />
                <i class="fas fa-search search-icon-props" onClick={this.convertHexToRgb} style={{ cursor: 'pointer' }} id="search"></i>
                {/* <span onClick={this.convertHexToRgb} style={{ cursor: 'pointer' }} className="input-group-text" id="search"><i className="fas fa-search"></i></span> */}
              </div>
              <div className="input-group-append">
              </div>
            </div>
          </div>
        </div>
        <Spinner loading={loading} />
        <GithubCorner />
        {displayRgb ? <DisplayRgb color={color} /> : null}
        <hr />
        <div>
          <PrevSearches searchList={searchList} />
        </div>
      </div>
    )
  }
}

export default App;
