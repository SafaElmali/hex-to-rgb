import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { PulseLoader } from 'react-spinners';
class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      loading: false,
      displayRgb: false,
      r: 0,
      g: 0,
      b: 0
    }

    this.hexToRgb = this.hexToRgb.bind(this);
    this.handleHex = this.handleHex.bind(this);
  }

  invalidHexCode = () => toast.warn('Please enter a valid hex code!', { autoClose: 3500 });

  handleHex = event => {
    this.setState({ value: event.target.value });
  }

  hexToRgb = () => {
    if (this.state.value.trim() === '') {
      this.invalidHexCode();
      this.setState({
        value: ""
      });
      return;
    } else {

      let { value } = this.state;
      let red = parseInt(value.slice(0, 2), 16);
      let green = parseInt(value.slice(2, 4), 16);
      let blue = parseInt(value.slice(4, 6), 16);

      this.setState({ loading: true });

      setTimeout(() => {
        this.setState({
          loading: false,
          displayRgb: true,
          r: red,
          g: green,
          b: blue
        })
      }, 1500);
    }
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
                <input type="text" className="form-control" placeholder="e.g 282C34" onChange={this.handleHex} onKeyPress={this.handleKeyPress} required />
                <div className="input-group-append">
                  <span onClick={this.hexToRgb} className="input-group-text" id="search"><i className="fas fa-search"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Spinner loading={this.state.loading} />
        <GithubCorner />
        {this.state.displayRgb ? <DisplayRgb red={this.state.r} green={this.state.g} blue={this.state.b} /> : null}
      </div>
    )
  }
}

const Spinner = (props) => {
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

const DisplayRgb = (props) => {
  return (
    <div className="card mt-3" style={{ width: '18rem', margin: 'auto' }}>
      <div className="card-header text-center card-title-props" style={{ color: `rgb(${props.red},${props.green},${props.blue})` }}>
        rgb({props.red},{props.green},{props.blue})
    </div>
      <div className="card-body">
        <div style={{ width: 50, height: 50, backgroundColor: `rgb(${props.red},${props.green},${props.blue})`, margin: 'auto', border: '3px solid gray' }}>
        </div>
      </div>
    </div >
  )
}

const GithubCorner = () => {
  return (
    <div>
      <a href="https://github.com/SafaElmali/hexToRgb" target="_blank" class="github-corner" aria-label="View source on GitHub">
        <svg width="80" height="80" viewBox="0 0 250 250" style={{ fill: '#FC6C6C', color: '#fff', position: 'absolute', top: 0, border: 0, right: 0, }} aria-hidden="true">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z">
          </path>
          <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{ transformOrigin: '130px 106px' }} class="octo-arm">
          </path>
          <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body">
          </path>
        </svg>
      </a>
    </div >
  )

}

export default App;