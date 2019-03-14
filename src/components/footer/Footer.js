import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-lg-3">
                <div className="footer__title">
                  <img src={require("../../images/list-yellow.png")} alt="list" />
                  <h2>VỀ CHÚNG TÔI</h2>
                </div>
                <p>Công ty Cổ phẩn Công nghệ DKT đã và đang khẳng định được vị trí hàng đầu trong lĩnh vực Thương mại điện tử. </p>
                <div className="footer__map"><span className="icon-location"></span>
                  <p>Tầng 4 - Tòa nhà Hanoi Group 442 Đội Cấn Ba Đình - Hà Nội</p>
                </div>
                <div className="footer__email"><span className="icon-envelope"></span>
                  <p>support@dkt.com.vn</p>
                </div>
                <div className="footer__phone"><span className="icon-mobile"></span>
                  <p>(84-4) 66558868 - (84-4) 37868904</p>
                </div>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2">
                <div className="footer__title"><img src={require("../../images/list-yellow.png")} alt="list" />
                  <h2>CHÍNH SÁCH</h2>
                </div>
                <ul>
                  <li><a href="#">Chính sách giao hàng</a></li>
                  <li><a href="#">Chính sách đổi sản phẩm</a></li>
                  <li><a href="#">Chính sách bảo hành</a></li>
                  <li><a href="#">Chính sách trả góp</a></li>
                  <li><a href="#">Giới thiệu hàng đổi trả</a></li>
                  <li><a href="#">Vận chuyển miễn phí</a></li>
                </ul>
              </div>
              <div className="col-sm-2 col-md-2 col-lg-2">
                <div className="footer__title"><img src={require("../../images/list-yellow.png")} alt="list" />
                  <h2>DỊCH VỤ&HỖ TRỢ</h2>
                </div>
                <ul>
                  <li><a href="#">Hệ thống cửa hàng</a></li>
                  <li><a href="#">Hướng dẫn mua hàng</a></li>
                  <li><a href="#">Hướng dẫn thanh toán</a></li>
                  <li><a href="#">Tích điểm đổi thưởng</a></li>
                  <li><a href="#">Dịch vụ đổi trả hàng</a></li>
                  <li><a href="#">Câu hỏi thường gặp</a></li>
                </ul>
              </div>
              <div className="col-sm-5 col-md-5 col-lg-5">
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="footer__title"><img src={require("../../images/list-yellow.png")} alt="list" />
                      <h2>TIN TỨC - SỰ KIỆN</h2>
                    </div>
                    <ul>
                      <li><a href="#">Tin tức mới nhất</a></li>
                      <li><a href="#">Tin tức khuyến mãi</a></li>
                      <li><a href="#">Tuyển dụng , đãi ngộ</a></li>
                      <li><a href="#">Download tài liệu</a></li>
                      <li><a href="#">Chương trình đối tác</a></li>
                      <li><a href="#">Nhà phát triển ứng dụng</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="footer__title"><img src={require("../../images/list-yellow.png")} alt="list" />
                      <h2>KẾT NỐI</h2>
                    </div>
                    <ul>
                      <li><a href="#"><span className="icon-facebook"></span> Facebook</a></li>
                      <li><a href="#"><span className="icon-twitter"></span> Twitter</a></li>
                      <li><a href="#"><span className="icon-google-plus"></span> Google</a></li>
                      <li><a href="#"><span className="icon-skype"></span> Skype</a></li>
                      <li><a href="#"><span className="icon-instagram"></span> Instagram</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="row">
              <div className="col-sm-6 col-md-6 ol-lg-6">
                <h3>Thanh toán</h3>
                <p><span><a href="#">
                  <img src={require("../../images/bank-1.png")} alt="" /></a></span><span><a href="#"><img src={require("../../images/bank-2.png")} alt="" /></a></span><span><a href="#"><img src={require("../../images/bank-3.png")} alt="" /></a></span><span><a href="#"><img src={require("../../images/bank-4.png")} alt="" /></a></span></p>
                <p><span><a href="#"><img src={require("../../images/bank-5.png")} alt="" /></a></span><span><a href="#"><img src={require("../../images/bank-6.png")} alt="" /></a></span><span><a href="#"><img src={require("../../images/bank-7.png")} alt="" /></a></span><span><a href="#"><img src={require("../../images/bank-8.png")} alt="" /></a></span></p>
              </div>
              <div className="col-sm-6 col-md-6 ol-lg-6">
                <h3>Giải đáp nhanh:</h3>
                <div className="row">
                  <div className="col-sm-6 col-md-6 ol-lg-6">
                    <div className="footer__advisory"><span className="icon-phone1"></span>
                      <div className="footer__advisory__phone">
                        <p>Tư vấn miễn phí (24/7)</p>
                        <p>1900 650 650</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 ol-lg-6">
                    <div className="footer__chat"><span className="icon-wechat"></span>
                      <div className="footer__chat__phone">
                        <p>Góp ý - phản hồi - thắc mắc</p>
                        <p>1900 650 650</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__down">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-6 ol-lg-6">
                  <p>Bản quyền thuộc về <span>Design Team</span>. Phát triển bởi<span>Bizweb</span></p>
                </div>
                <div className="col-sm-6 col-md-6 ol-lg-6">
                  <div className="footer__down__menu">
                    <ul>
                      <li><Link to="/home">Trang chủ</Link></li>
                      <li><Link to="/about">Giới thiệu</Link></li>
                      <li><Link to="/products">Sản phẩm</Link></li>
                      <li><Link to="/promotion">Tin khuyến mãi</Link></li>
                      <li><Link to="/services">Dịch vụ</Link></li>
                      <li><Link to="/contact">Liên hệ</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}