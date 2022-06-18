import React, { Component } from "react";
import "./baitapXiNgau.css";
import XiNgau from "./xiNgau";
import ThongTinTroChoi from "./ThongTinTroChoi";
import { connect } from "react-redux";
class BaiTapXiNgau extends Component {
  render() {
    return (
      <>
        <div className="game">
          <div className="title-game text-center mt-5 display-1">
            Game Đổ Xí Ngầu
          </div>
          <div className="row text-center">
            <div className="col-5">
              <button
                className="btnGame"
                onClick={() => {
                  this.props.datCuoc(true);
                }}
              >
                Tài
              </button>
            </div>
            <div className="col-2">
              <XiNgau />
            </div>
            <div className="col-5">
              <button
                className="btnGame"
                onClick={() => {
                  this.props.datCuoc(false);
                }}
              >
                Xỉu
              </button>
            </div>
          </div>
          <div className="text-center thongTinTroChoi">
            <ThongTinTroChoi />
            <button
              className="btn btn-success p-3 display-3 mt-5"
              onClick={() => {
                this.props.playGame();
              }}
            >
              Play Game
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      let action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      dispatch(action);
    },
    playGame: () => {
      dispatch({ type: "PLAY_GAME" });
    },
  };
};
export default connect(null, mapDispatchToProps)(BaiTapXiNgau);
