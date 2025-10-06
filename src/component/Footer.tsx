import React from 'react';

const Footer = () => {
    // All styling has been removed and replaced with custom class names.
    return (
        <footer className="movie-footer">
            <div className="footer-content-wrapper">
                
                {/* Top Section: Contact and Social Links (Static) */}
                <div className="footer-top-bar">
                    
                    {/* Contact Info */}
                    <div className="footer-contact-info">
                        <p className="contact-title">Need Assistance?</p>
                        <p className="contact-number-label">
                            Call us 24/7: <span className="contact-number-value">+1-800-STREAM-IT</span>
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="footer-social-links">
                        <a 
                            href="#facebook"
                            className="social-icon-link"
                            aria-label="Follow us on Facebook"
                        >
                            <span className="social-icon-badge">
                                FB
                            </span>
                        </a>
                        <a 
                            href="#twitter"
                            className="social-icon-link"
                            aria-label="Follow us on Twitter"
                        >
                            <span className="social-icon-badge">
                                TW
                            </span>
                        </a>
                        <a 
                            href="#instagram"
                            className="social-icon-link"
                            aria-label="Follow us on Instagram"
                        >
                            <span className="social-icon-badge">
                                IG
                            </span>
                        </a>
                        <a 
                            href="#youtube"
                            className="social-icon-link"
                            aria-label="Follow us on YouTube"
                        >
                            <span className="social-icon-badge">
                                YT
                            </span>
                        </a>
                    </div>

                </div>

                {/* Main Link Grid (Static) */}
                <div className="footer-link-grid">
                    
                    {/* Quick Links */}
                    <div className="footer-column">
                        <h4 className="footer-column-title">Quick Links</h4>
                        <ul className="footer-link-list">
                            <li><a href="#home" className="footer-link-item">Home</a></li>
                            <li><a href="#movies" className="footer-link-item">Movies</a></li>
                            <li><a href="#tvshows" className="footer-link-item">TV Shows</a></li>
                            <li><a href="#newhot" className="footer-link-item">New & Hot</a></li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div className="footer-column">
                        <h4 className="footer-column-title">Information</h4>
                        <ul className="footer-link-list">
                            <li><a href="#aboutus" className="footer-link-item">About Our Service</a></li>
                            <li><a href="#investors" className="footer-link-item">Investor Relations</a></li>
                            <li><a href="#contactus" className="footer-link-item">Contact Us</a></li>
                            <li><a href="#careers" className="footer-link-item">Careers</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="footer-column">
                        <h4 className="footer-column-title">Legal</h4>
                        <ul className="footer-link-list">
                            <li><a href="#privacy" className="footer-link-item">Privacy Policy</a></li>
                            <li><a href="#cookies" className="footer-link-item">Cookie Preferences</a></li>
                            <li><a href="#legal" className="footer-link-item">Legal Notices</a></li>
                            <li><a href="#terms" className="footer-link-item">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="footer-column">
                        <h4 className="footer-column-title">Support</h4>
                        <ul className="footer-link-list">
                            <li><a href="#help" className="footer-link-item">Help Center / FAQ</a></li>
                            <li><a href="#account" className="footer-link-item">Manage Account</a></li>
                            <li><a href="#giftcards" className="footer-link-item">Redeem Gift Cards</a></li>
                            <li><a href="#watchlist" className="footer-link-item">Your Watchlist</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Copyright */}
                <div className="footer-copyright-section">
                    <p className="footer-copyright-text">
                        &copy; 2025 MovieStream, Inc. All rights reserved. (Static Content)
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
