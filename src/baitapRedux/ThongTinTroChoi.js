import React, { Component } from "react";
import { connect } from "react-redux/es/exports";
class ThongTinTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-3">
          BẠN CHỌN:<span className="text-danger">{this.props.taiXiu?'TÀI':'XỈU'}</span>
        </div>
        <div className="display-3">
          BÀN THẮNG:<span className="text-success">{this.props.banThang}</span>
        </div>
        <div className="display-3">
          TỔNG SỐ BÀN CHƠI:<span className="text-primary">{this.props.tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taiXiu: state.BaiTapGameXucXacReducer.taiXiu,
    banThang: state.BaiTapGameXucXacReducer.banThang,
    tongSoBanChoi: state.BaiTapGameXucXacReducer.tongSoBanChoi,
  };
};

export default connect(mapStateToProps,null)(ThongTinTroChoi);
