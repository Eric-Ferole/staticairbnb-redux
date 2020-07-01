// const flatsReducer = (state, action) => {
//   if (state === undefined) {
//     return [];
//   }
//   if (action.type === 'SET_FLATS') {
//     return action.payload;
//   } else {
//     return state;
//   }
// }

// export default flatsReducer;

export default function(state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case "SET_FLATS":
      return action.payload;
    default:
      return state;
  }
}
