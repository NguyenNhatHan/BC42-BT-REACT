import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function SeatItem() {

  const dispatch = useDispatch()

  const { seatList } = useSelector(state => state.seat)

  const handleClick = (hangghe, soGhe) => {
    dispatch({
      type: 'GHE_DANG_CHON',
      payload: {hangghe, soGhe}
    })
  }
  return (
    <div className='seatRow'>
          {seatList.map((item) => {
            return (
                <div key={item.hangghe} className="row">
                  <span className='hangGhe'>{item.hangghe}</span>
                    {item.danhSachGhe.map((seat) => {
                      return (
                        <Fragment key={seat.soGhe}>
                            <button className={
                                seat.daDat 
                                ? "seat occupied"
                                : seat.selected
                                ? "seat selected"
                                : "seat"
                                }
                                onClick={() => handleClick(item.hangghe, seat.soGhe)}
                                >
                            </button>
                        </Fragment>
                      )
                    })}
                  </div>
            )
          })}
    </div>

  )
}

export default SeatItem
