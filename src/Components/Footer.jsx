import "./Footer.css"

export default function Footer(){
    return (
      <>
        <div className="footer-container">
          <div className="footerGrid">
            <div className="footerLogo"></div>
            <div className="footerPages">
              <div className="footerGridHead">All Pages</div>
              <ul className="All-Pages">
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="footerLinks">
              <div className="footerGridHead">All Links</div>
              <ul className="All-Pages">
                <li>All Services</li>
                <li>Certifications</li>
                <li>Clients</li>
                <li>Client Reviews</li>
                <li>Head Office</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="subFooter">Mitrozz IT Solutions</div>
        </div>
      </>
    );
}