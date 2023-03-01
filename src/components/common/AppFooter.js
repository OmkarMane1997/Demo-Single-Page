import { BackTop } from 'antd';
const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };
const AppFooter = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="logo">
          <i className="fab fa-airbnb"></i>{" "}
          <a href="http://localhost:3000/">Demo</a>
        </div>
        <ul className="socials">
          <li>
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <div className="copyright">Copyright &copy; 2022 Demo</div>
        <BackTop>
      <div style={style}><i className="fas fa-location-arrow"></i></div>
    </BackTop>
      </div>
    </div>
  );
};
export default AppFooter;
