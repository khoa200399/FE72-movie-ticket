import React from 'react';
import SeatList from './seatList';
import SeatSelect from './seatSelect';
import {connect} from 'react-redux'
import isEmpty from 'lodash.isempty';



function Home(props) {
    const seatListStore = props.seatListStore;
    // const selectedSeat = props.selectedSeat;

    const handleConfirm = (slSeat) => {
        if(isEmpty(slSeat)) return;
        const action = {
            type: 'SELECT_SEAT',
            payload: slSeat
        }
        props.dispatch(action)
    }
    const handleDelete = (seat) => {
        const action = {
            type: 'CANCEL_SEAT',
            payload: seat
        }
        props.dispatch(action);
    }
    
    return (
        <div className='container'>
            <SeatList onConfirm={handleConfirm} seatList ={seatListStore}/>
            <SeatSelect onDelete={handleDelete} selectedSeat={props}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      seatListStore: state.selecteSeat.seatList,
      selectedSeat: state.selecteSeat.seatSelected  
    }
}

export default connect(mapStateToProps)(Home);