import React, { Component } from "react";

class Indonesia extends Component {
  constructor() {
    super();

    this.state = {
      provinsi: [],
      kabupaten: []
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "http://dev.farizdotid.com/api/daerahindonesia/provinsi"
      );
      const data = await response.json();
      // console.log(data.semuaprovinsi);
      this.setState({
        provinsi: data.semuaprovinsi
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = async event => {
    try {
      const response = await fetch(
        `http://dev.farizdotid.com/api/daerahindonesia/provinsi/${
          event.target.value
        }/kabupaten`
      );
      const data = await response.json();
      this.setState({
        kabupaten: data.daftar_kecamatan
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    // console.log(this.state.provinsi);
    return (
      <div>
        <select onChange={this.handleChange}>
          <option disabled selected>
            Pilih Provinsi
          </option>

          {this.state.provinsi.map((item, index) => (
            <option key={index} value={item.id}>
              {item.nama}
            </option>
          ))}
        </select>

        <select name="" id="">
          <option disabled selected>
            Pilih Kabupaten
          </option>
          {this.state.kabupaten.map((item, index) => (
            <option key={item.id} value={index}>
              {item.nama}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Indonesia;
