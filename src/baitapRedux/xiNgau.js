import React, { Component } from "react";
import { connect } from "react-redux";
class XiNgau extends Component {
  renderXucXac = () => {
    //  lay props từ reducer về
    return this.props.mangXucXac?.map((xucXac, index) => {
      return (
        <img
          key={index}
          src={xucXac.hinhAnh}
          alt={xucXac.hinhAnh}
          className="xiNgau ml-2"
        />
      );
    });
  };
  render() {
    return <div>{this.renderXucXac()}</div>;
  }
}

// lấy state từ redux về làm props của component
const mapStateToProps = (state) => {
  return {
    mangXucXac: state.BaiTapGameXucXacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps, null)(XiNgau);
