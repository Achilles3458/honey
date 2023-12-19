import { createSlice } from '@reduxjs/toolkit';
// import resultsApi from "../../apis/resultsApi";

export const newScan = createSlice({
  name: 'newScan',
  initialState: {
    uploadScan: {},
    resultScan: {},
    success: '',
    error: 'This is the Admin getOne Error',
  },
  reducers: {
    actionSetScan: (state, action) => {
      state.uploadScan = action.payload;
    },
    actionSetResult: (state, action) => {
      state.resultScan = action.payload;
    },
    setErrors: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
});

export default newScan.reducer;

export const { actionSetScan, actionSetResult, setErrors, setSuccess } =
  newScan.actions;

// export const readNewScan = (data) => (dispatch) => {
//   const changeData = {
//     projectName: data.project,
//     softwareType: data.softwareType,
//     result: data.log,
//     createDate: new Date(),
//     currnetListValue: data.currnetListValue,
//     chatgptFlag: data.chatgptFlag,
//   };
//   let temp = [].concat(changeData);
//   dispatch(actionSetScan(temp));

//   resultsApi
//     .checkChatGPT()
//     .then((res) => {
//       if (res.data.result === true || !data.chatgptFlag)
//         resultsApi
//           .resultApi(data)
//           .then((res) => {
//             if (res.status === 200) {
//               dispatch(actionSetScan(res.data.scanLog));
//               dispatch(actionSetResult(res.data.result));
//               dispatch(setSuccess('File upload success'));
//             }
//           })
//           .catch((error) => {
//             dispatch(setErrors(error));
//           });
//       else if (res.data.result === false && data.chatgptFlag)
//         dispatch(setErrors("OpenAI Key don't exist."));
//     })
//     .catch((error) => {
//       dispatch(setErrors(error));
//     });
// };

// export const readHistory = (data) => (dispatch) => {
//   resultsApi
//     .readHistory(data)
//     .then((res) => {
//       if (res.data.scanLog.length === 0 || res.data.result.length === 0) {
//         dispatch(actionSetScan([]));
//         dispatch(actionSetResult([]));
//       } else {
//         dispatch(actionSetScan(res.data.scanLog));
//         dispatch(actionSetResult(res.data.result));
//       }
//     })
//     .catch((error) => {
//       dispatch(setErrors(error));
//     });
// };

// export const readOneHistory = (id) => (dispatch) => {
//   resultsApi
//     .readOneHistory(id)
//     .then((res) => {
//       dispatch(actionSetScan(res.data.scanLog));
//       dispatch(actionSetResult(res.data.result));
//     })
//     .catch((error) => {
//       dispatch(setErrors(error));
//     });
// };

export const clear = () => (dispatch) => {
  dispatch(setErrors(''));
  dispatch(setSuccess(''));
};

export const allClear = () => (dispatch) => {
  dispatch(setErrors(''));
  dispatch(setSuccess(''));
  dispatch(actionSetResult([]));
  dispatch(actionSetScan([]));
};
