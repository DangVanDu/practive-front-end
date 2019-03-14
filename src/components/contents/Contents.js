import React, { Component } from 'react';
export default class Contents extends Component{
    render(){
        return (
          <>
            <section id="section">
              <div class="container">
                <div class="section-1">
                  <div class="row">
                    <div class="col-sm-8 col-md-8 col-lg-8">
                      <div class="section-1__slider">
                          <div class="section-1__slider__content">
                            <h1>Máy khoan đa năng</h1>
                            <h2>Dewalt</h2>
                            <ul>
                                <li><span class="icon-checkmark"></span>Thiết kế nhỏ ngọn, phù hợp, đa mục đích</li>
                                <li><span class="icon-checkmark"></span>Mạnh mẽ, bền bĩ và hiệu suất lớn hơn</li>
                                <li><span class="icon-checkmark"></span>Khoan cắt với độ chính xác tuyệt đối</li>
                            </ul>
                            <div class="button"><a href="#">Đặt hàng</a></div>
                          </div>
                          <div class="section-1__slider__images">
                            <img src={require("../../images/perforator-gray.png")} alt="perforator" />
                          </div>
                      </div>
                      <div class="section-1__bt-slider"><a href="#"></a><a href="#"></a><a href="#"></a></div>
                    </div>
                    <div class="col-sm-4 col-md-4 col-lg-4">
                      <div class="section-1__list">
                        <div class="row">
                          <div class="col-sm-12 col-md-12 col-lg-12">
                              <div class="section-1__list__1">
                                <span class="icon-plane"></span>
                                <div class="section-1__list__1__content">
                                    <h1>MIỄN PHÍ VẬN CHUYỂN</h1>
                                    <p>Chúng tôi vận chuyển miễn phí với các đơn hàng trị giá trên 1000.000 Đ.</p>
                                </div>
                              </div>
                          </div>
                          <div class="col-sm-12 col-md-12 col-lg-12">
                              <div class="section-1__list__1">
                                <span class="icon-location"></span>
                                <div class="section-1__list__1__content">
                                    <h1>CHÍNH SÁCH ĐỔI TRẢ</h1>
                                    <p>Nếu phát hiện lỗi của nhà sản xuất, chúng tôi sẽ đổi mới sản phẩm trong 7 ngày đầu tiên.</p>
                                </div>
                              </div>
                          </div>
                          <div class="col-sm-12 col-md-12 col-lg-12">
                              <div class="section-1__list__1">
                                <span class="icon-gift"></span>
                                <div class="section-1__list__1__content">
                                    <h1>KHUYẾN MẠI HÀNG TUẦN</h1>
                                    <p>Chúng tôi cam kết bán hàng chính hãng 100% với tất cả các loại sản phẩm.</p>
                                </div>
                              </div>
                          </div>
                          <div class="col-sm-12 col-md-12 col-lg-12">
                              <div class="section-1__list__1">
                                <span class="icon-like"></span>
                                <div class="section-1__list__1__content">
                                    <h1>CAM KẾT HÀNG CHÍNH HÃNG</h1>
                                    <p>Chúng tôi cam kết bán hàng chính hãng 100% với tất cả các loại sản phẩm.</p>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </section>
          </> 
        );
    }
} 