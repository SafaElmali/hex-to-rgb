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

export default App;