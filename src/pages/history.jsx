import React from 'react'

function home_customer() {
  return (
    <>
    <div className='home-customer' style={{ display: 'flex',alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}  >
        <div className="row" style={{marginTop: '10px', marginBottom: '30px'}} >
            {/* Left Column */}
                <div className="w3-container w3-card w3-white w3-margin-bottom" style={{width: '250px'}}>
                    <div className='full-height' >
                        <img className='img-customer' src="/assets/img/customer.jpg" alt="" />
                        <div className="customer-name">hello world</div>
                        <div  className='order-history'><a href="http://"></a>Thông tin</div>
                        <div className="order-history"><a href=""></a> Lịch sử đơn hàng</div>
                    </div>
                </div>  
                {/* End Left Column */}
            {/* Right Column */}
                <div className="w3-white w3-text-grey w3-card-4"  style={{width: '900px' }} >
                    <div >
                        <div className="content">
                            <table style={{ width: '100%', borderCollapse: 'collapse' }} >
                                <tr>
                                    <th>STT</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Số lượng</th>
                                    <th>Giá</th>
                                    <th>Tổng</th>
                                    <th>Trạng thái</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Sách 1</td>
                                    <td>2</td>
                                    <td>25000 VND</td>
                                    <td>50000 VND</td>
                                    <td><div className='div-wait' >Chờ duyệt</div></td>
                                    <td><button className='button' type="button">Hủy</button></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Sách 1</td>
                                    <td>2</td>
                                    <td>25000 VND</td>
                                    <td>50000 VND</td>
                                    <td><div className='div-approved' >Đã duyệt</div></td>
                                    <td><button className='button' type="button">Hủy</button></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default home_customer