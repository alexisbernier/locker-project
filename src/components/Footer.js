const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3.col-sm-6">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="col-md-3.col-sm-6">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="col-md-3.col-sm-6">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="col-md-3.col-sm-6">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="p text-xs-center">
            &copy;{new Date().getFullYear()} Locker - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
