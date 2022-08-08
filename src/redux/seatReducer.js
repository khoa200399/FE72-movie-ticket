import jsonSeatList from '../json/danhSachGhe.json'


const initialState = {
    seatSelected: [],
    seatList: jsonSeatList
    
};

const reducer =  ( state = initialState, action) => {
 switch(action.type) {
    case 'SELECT_SEAT':
        let selectedSeat = action.payload;
        selectedSeat = selectedSeat.filter(item => item.cloneSeat.daDat === true)
        const cloneSelectSeat = JSON.parse(JSON.stringify(state));
        cloneSelectSeat.seatSelected = selectedSeat;
        
        selectedSeat.forEach(item => {
            const foundRow = cloneSelectSeat.seatList.find(seat => seat.hang === item.row);
            const foundSeat = foundRow.danhSachGhe.find(seat => seat.soGhe === item.cloneSeat.soGhe );
            foundSeat.daDat = item.cloneSeat.daDat;
        });
        return cloneSelectSeat;
    case 'CANCEL_SEAT':
        const cloneCancelSeat = JSON.parse(JSON.stringify(state));
        const cancelSeat = action.payload;
        console.log('cancel',cancelSeat)
        console.log('list',cloneCancelSeat);

        const foundSeatIndex = cloneCancelSeat.seatSelected.findIndex(item => item.cloneSeat.soGhe === cancelSeat.cloneSeat.soGhe);
        cloneCancelSeat.seatSelected.splice(foundSeatIndex,1);

        const foundRowCancel = cloneCancelSeat.seatList.find(item => item.hang === cancelSeat.row);
        const foundSeatCancel = foundRowCancel?.danhSachGhe.find(seat => seat.soGhe === cancelSeat.cloneSeat.soGhe);
        foundSeatCancel.daDat = false;

        return cloneCancelSeat;
    default:
        return state;
 }
}

export default reducer;