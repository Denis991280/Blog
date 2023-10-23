export default function Footer() {
  return (
    <>
      <footer>
        <div class="footer">
          <div class="row">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-youtube"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
          </div>

          <div class="row">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div class="row">
            Created using:
            <span className="footerIcons">
              <i class="fa-brands fa-react fa-2xl"></i>
            </span>
            <span className="footerIcons">
              <i class="fa-brands fa-bootstrap fa-2xl"></i>
            </span>
            <span>
              <img className="muiIcon" src="src/assets/mui.bmp" />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
