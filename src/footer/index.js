import React from 'react'

function Footer(props) {
    return (
        <footer id="footer" class="section-bg">
            <div class="footer-top"><div class="container">
                <div class="row"><div class="col-lg-6">
                    <div class="row"><div class="col-sm-6">
                        <div class="footer-info"><h2>JR BUILDERS</h2>
                                <p></p></div><div class="footer-newsletter">
                            <p>JR BUILDER is a group of young and energetic engineers, planners & architects. We envisioned establishing 
                                JR BUILDER's as the preferred choice for developing residential, commercial and industrial properties.</p>
                            <form action="" method="post">
                                <input type="email" name="email" />
                                <input type="submit" value="Subscribe" /></form></div></div>
                        <div class="col-sm-6"><div class="footer-links"><h4>Useful Links</h4>
                            <ul><li><a href="#">Home</a></li><li><a href="#about">About us</a></li>
                                <li><a href="#">Services</a></li><li><a href="#">Terms of service</a></li>
                                <li><a href="#">Privacy policy</a></li></ul></div><div class="footer-links">
                                <h4>Contact Us</h4><p> 2/207 Gangaiyamma Kovil Street <br /> Alathur, Thirupporur<br /> 603110 <br />
                                    <strong>Phone:</strong> +91-9790052538<br /> <strong>Email:</strong>
                                    contact.jrbuilders@gmail.com<br /></p></div><div class="social-links">
                                <a href="https://www.instagram.com/buildersjr/" class="facebook"><i class="fa fa-facebook"></i></a>
                                <a href="https://www.instagram.com/buildersjr/" class="instagram"><i class="fa fa-instagram"></i></a>
                                <a href="https://in.linkedin.com/in/jayakumar-dhanasekaran-1a7391111" class="linkedin"><i class="fa fa-linkedin"></i></a>
                            </div></div></div></div><div class="col-lg-6"><div class="form">
                                <h4>Send us a message</h4><p>Tell Us Your Requirements, <br/>
                                    Better yet, see us in person!
                                    We love our customers, so feel free to visit during normal business hours.</p>
                                <form action="forms/contact.php" method="post" role="form" class="php-email-form"><div class="form-group">
                                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required="" /></div><div class="form-group mt-3">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required="" />
                                    </div><div class="form-group mt-3">
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required="" />
                                    </div><div class="form-group mt-3"><textarea class="form-control" name="message" rows="5" placeholder="Message" required=""></textarea></div><div class="my-3"><div class="loading">Loading</div><div class="error-message"></div>
                                        <div class="sent-message">Your message has been sent. Thank you!</div></div><div class="text-center"><button type="submit" title="Send Message">Send Message</button></div></form></div></div></div></div></div>
            <div class="container"><div class="copyright"> © Copyright <strong>JR Builders</strong>. All Rights Reserved</div><div class="credits"> Designed by <a href="https://vivekpanneerselvam.in/">Vivek Panneerselvam</a></div></div></footer>
    )
}

export default Footer