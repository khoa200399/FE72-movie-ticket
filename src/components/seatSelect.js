import React from 'react';
import './BaiTapBookingTicket.css'

function SeatSelect(props) {
    //find selected seat in Seat List 
    const seatList = props.selectedSeat.seatListStore;
    const foundSelSeat = []
    seatList.forEach(row => {
        row.danhSachGhe.forEach(item => {
            if(item.daDat === true) {
                foundSelSeat.push({row: row.hang,cloneSeat:item })
            }
        })
    })
    //===============================
    var sum = 0;
    foundSelSeat.forEach(item => {
        sum += item.cloneSeat.gia
    })    
    return (
        <div style={{width:'30%'}}>
            <h1 className='tit-1'>Ghế đã chọn</h1>
            <table className='tb-seat'>
                <thead>
                    <tr>
                        <th className='thSeat' style={{ width: '20%' }}>STT</th>
                        <th className='thSeat' style={{ width: '20%' }}>Mã ghế</th>
                        <th className='thSeat' style={{ width: '20%' }}>Giá tiền</th>
                        <th className='thSeat' style={{ width: '20%' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {foundSelSeat.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td className='tdSeat'>{i + 1}</td>
                                <td className='tdSeat'>{item.cloneSeat.soGhe}</td>
                                <td className='tdSeat'>{item.cloneSeat.gia}</td>
                                <td className='tdSeat'>
                                    <button onClick={() => props.onDelete(item)} className='btn btn-danger'>Huỷ</button>
                                </td>
                            </tr>
                        )
                    })}
                    <tr>
                        <th>Thành tiền</th>
                        <th></th>
                        <th style={{textAlign: 'center'}}>
                           {sum}
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SeatSelect;