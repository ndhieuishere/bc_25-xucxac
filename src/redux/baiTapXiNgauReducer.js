const stateDefault = {
  taiXiu: true, //True : tài(từ 3-11), false:xỉu(>12)
  mangXucXac: [
    { ma: 1, hinhAnh: "./img/1.png" },
    { ma: 2, hinhAnh: "./img/2.png" },
    { ma: 3, hinhAnh: "./img/3.png" },
  ],
  banThang: 0,
  tongSoBanChoi: 0,
};

const xucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC":
      state.taiXiu = action.taiXiu;
      return { ...state };

    case "PLAY_GAME": {
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        let xucXacNgauNhien = {
          ma: soNgauNhien,
          hinhAnh: `./img/${soNgauNhien}.png`,
        };
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacNgauNhien;
      state.tongSoBanChoi += 1;
      let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXac, index) => {
        return (tongDiem += xucXac.ma);
      }, 0);
      if (
        (tongSoDiem > 11 && state.taiXiu === true) ||
        (tongSoDiem <= 11 && state.taiXiu === false)
      ) {
        state.banThang += 1;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default xucXacReducer;
