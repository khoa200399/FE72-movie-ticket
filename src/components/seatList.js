import { React, useState } from 'react';
import './BaiTapBookingTicket.css'
import { connect } from 'react-redux'


function SeatList(props) {
    const [selectingSeat, setSelectingSeat] = useState([]);
    const seatList = props.seatList;
    // console.log(seatList);

    const handleChange = (seat, e) => {
        const foundRow = seatList.find(row => row.hang === e.target.value)
        const foundSeat = foundRow.danhSachGhe.find(item => item.soGhe === seat.soGhe);
        if (foundSeat.daDat === true) return;

        const cloneSelectingSeat = JSON.parse(JSON.stringify(selectingSeat));
        const foundSelSeat = cloneSelectingSeat.find(item => {
            return item.cloneSeat.soGhe === seat.soGhe
        });

        if (foundSelSeat) {
            foundSelSeat.cloneSeat.daDat = e.target.checked;
            setSelectingSeat(cloneSelectingSeat)
        } else {
            const cloneSeat = JSON.parse(JSON.stringify(seat));
            cloneSeat.daDat = e.target.checked;
            setSelectingSeat([...cloneSelectingSeat, { cloneSeat, row: e.target.value }])
        }

    }

    const handleClick = () => {
        props.onConfirm(selectingSeat);
    }

    return (
        <div className='seatList' style={{width:'70%'}}>
            <h1 className='tit-1'>Danh sách ghế</h1>
            <table>
                <tbody>
                    <tr>
                        <th className='rowNumber'></th>
                        <th className='rowNumber'>1</th>
                        <th className='rowNumber'>2</th>
                        <th className='rowNumber'>3</th>
                        <th className='rowNumber'>4</th>
                        <th className='rowNumber'>5</th>
                        <th className='rowNumber'>6</th>
                        <th className='rowNumber'>7</th>
                        <th className='rowNumber'>8</th>
                        <th className='rowNumber'>9</th>
                        <th className='rowNumber'>10</th>
                        <th className='rowNumber'>11</th>
                        <th className='rowNumber'>12</th>
                    </tr>
                    {seatList.map(seatRow => {
                        return (
                            <tr key={seatRow.hang}>
                                <th className='rowNumber'>{seatRow.hang}</th>
                                {seatRow.danhSachGhe.map(seat => {
                                    if(seat.daDat === true) {
                                        return <td key={seat.soGhe}>
                                            <input className='ghe gheDuocChon' disabled={seat.daDat} onChange={(e) => handleChange(seat, e)} value={seatRow.hang} defaultChecked={seat.daDat} type='checkbox' />
                                        </td>
                                    }
                                    else {
                                        return <td key={seat.soGhe}>
                                            <input className='ghe' onChange={(e) => handleChange(seat, e)} value={seatRow.hang} type='checkbox' />
                                        </td>
                                    }
                                  
                                })}
                            </tr>

                        )
                    })}
                </tbody>
            </table>
            <button className='btn btn-success' onClick={handleClick}>Xác nhận đặt</button>
        </div>
    );
}

export default connect()(SeatList);