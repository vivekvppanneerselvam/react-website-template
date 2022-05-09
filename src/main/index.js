import React from 'react'
import jai from '../assets/img/jai.PNG'
import logo from '../assets/img/jrbuilders-logo.jpg'
import b1 from '../assets/img/building1.png'
import b2 from '../assets/img/building2.jpg'
import b3 from '../assets/img/building3.jpg'
import b4 from '../assets/img/building4.jpg'

function Main(props) {
    return (
        <>
            <section id="hero" class="clearfix"><div class="container d-flex h-100"><div class="row justify-content-center align-self-center aos-init aos-animate"
                data-aos="fade-up"><div class="col-lg-6 intro-info order-lg-first order-last aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <h2>JR Builders <br />India PVT. LTD <br /><span>Business!</span></h2>
                    is a newly established construction firm formed by experienced professionals who are committed to highest degree of excellence,
                    professionalism and integrity—both in the delivery of services and end-products, as well as in its relationships with its various stakeholders.
                    The founders brought in a copious amount of expertise into the company,
                    the result of decades of hard work, dedication and experience in the industry.
                </div><div class="col-lg-6 intro-img order-lg-last order-first aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
                    <img src={logo} alt="" class="img-fluid" /></div></div></div></section>

            <main id="main">
                <section id="about" class="about section-bg">
                    <div class="container aos-init aos-animate" data-aos="fade-up">
                        <div class="row"><div class="col-lg-5 col-md-6">
                            <div class="about-img aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
                                <img src={b2} style={{width:'100%', height:'500px'}} alt="" />
                            </div>
                        </div>
                            <div class="col-lg-7 col-md-6">
                                <div class="about-content aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
                                    <h2>About Us</h2><h3>Overview.</h3><p>J.R BUILDER is a group of young and energetic engineers, planners & architects. We envisioned establishing J.R BUILDER as the preferred choice for developing residential, commercial and industrial properties in Chennai, Chengalpattu, kelambakkam surroundings, to take their construction business to the next level.
                                        To realize this vision, we have adopted a customer-centric approach, commitment to excellence, passion for innovation, on-time delivery of projects and superior service, which forms the cornerstones of J.R BUILDERs' philosophy. We are committed to creating customer delight in every business initiative we undertake.
                                        Since inception, the company has successfully established its footprints in Punjab. It is in line with the ambitious growth plan to take J.R BUILDER to expand its business to Northern India region in the commercial and industrial construction on the back of our strong business ethics.
                                        We believe that any company is as good as its team. Our team of over 50 associate professionals from different fields as diverse as Accounts, Administration, Civil, HR, Legal, Maintenance, Purchase, R&D, Logistics, Sales and Marketing are dedicated to realizing our collective vision and mission.
                                        We don't just deliver on our promise, we deliver it in style. We acknowledge and appreciate the support we have received from our loyal customers over the years. Going forward, we seek your continued patronage in taking J.R BUILDER to the next level.</p>
                                    <ul>
                                        <li style={{ textAlign: 'left' }} ><h4><i class="fa fa-check-circle"></i> VISION</h4> To become the most sought construction company in Northern India by delivering quality construction services to Small and Medium Enterprises segment.</li>
                                        <li style={{ textAlign: 'left' }} ><h4><i class="fa fa-check-circle"></i> MISSION </h4>
                                            Our "mission" is continued business expansion in our chosen market, building long-term relationships with customers based upon the dependability of our service, on mutual trust and respect.
                                        </li>
                                        <li style={{ textAlign: 'left' }} ><h4><i class="fa fa-check-circle"></i>  VALUES</h4>
                                            We are customer focused, professionally driven, technology enabled and quality oriented company engaged in creating value for our customers by delivering reliable and superior service, ably supported by our team of talented professionals. This has enabled us to create customer delight every time.
                                        </li>
                                        <li style={{ textAlign: 'left' }} ><h4><i class="fa fa-check-circle"></i> Team</h4>
                                            A shared sense of common purpose that transcends functional specialization and organization boundaries.</li>

                                        <li style={{ textAlign: 'left' }} ><h4><i class="fa fa-check-circle"></i> Sustainability</h4>
                                            We plan and act for the future - for the long-term goal to our company, our customers, and our world.</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" class="services ">
                    <div class="container aos-init aos-animate" data-aos="fade-up">
                        <header class="section-header">
                            <h3>Services</h3>
                            <p>What We Do</p>
                        </header>
                        <div class="row g-5">
                            <div class="col-md-6 col-lg-4 wow bounceInUp aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                                <div class="box">
                                    <div class="icon" style={{ background: "#fceef3" }}><i class="fa fa-building" style={{ color: "#ff689b" }}>
                                    </i></div>
                                    <h4 class="title"><a href="">Residential Building Constructions</a></h4>
                                    <p class="description">Whether you are building an independent residential house or apartment or commercial establishments
                                        we focus on saving time and money without compromising on excellence.
                                        We design, build with unmatched speed and attention to detail. We offer an end to end solutions for new build or large scale extensions. </p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                                <div class="box"><div class="icon" style={{ background: "#fff0da" }}><i class="fa fa-house" style={{ color: "#e98e06" }}></i></div>
                                    <h4 class="title"><a href="">Home Refurbishments</a></h4>
                                    <p class="description">Building conversions or renovation take a lot of skills, foresight and sensitivity. This applies both to the building itself and the investment aims that are resting on it. We plan and enact your vision, whilst retaining the character of the original build.
                                        Our speed and talent is unmatched in the home refurbishment services.</p></div>
                            </div>
                            <div class="col-md-6 col-lg-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
                                <div class="box"><div class="icon" style={{ background: "#e6fdfc" }}><i class="fa fa-sink" style={{ color: "#3fcdc7" }}></i></div>
                                    <h4 class="title"><a href="">Bathroom Remodeling</a></h4>
                                    <p class="description">Bathroom remodeling or renovation can be confusing stressful and sometimes frustrating, it needs lots of skills,
                                        foresight and expertise. We will guide you through every phase of bathroom design,
                                        helping you with modern concept installation using skilled craftsmen to produce the perfectly finished bathroom without fuss and stress. </p></div>
                            </div>
                            <div class="col-md-6 col-lg-4 wow aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100"><div class="box">
                                <div class="icon" style={{ background: "#eafde7" }}><i class="fa fa-truck-plow" style={{ color: "#41cf2e" }}></i></div>
                                <h4 class="title"><a href="">Demolition</a>
                                </h4><p class="description">we're also doing demolition works for old buildings with high safety measure and with low budget quick work</p>
                            </div>
                            </div>
                            <div class="col-md-6 col-lg-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200" >
                                <div class=" box"><div class="icon" style={{ background: "#e1eeff" }}><i class="fa fa-compass-drafting" style={{ color: "#2282ff" }}></i>
                                </div><h4 class="title"><a href="">Architect</a></h4>
                                    <p class="description">Planning and Architectural design for newly construction buildings. </p></div>
                            </div>
                            <div class="col-md-6 col-lg-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
                                <div class="box">
                                    <div class="icon" style={{ background: "#ecebff" }}><i class="fa-solid fa-user-helmet-safety" style={{ color: "#8660fe" }}></i>
                                    </div><h4 class="title"><a href="">Labor Contract</a></h4>
                                    <p class="description">will charge the customers only on labour effort, materials can be provided or suppose to be taken care by the customer
                                        Which provide lots wishes by customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="portfolio" class="portfolio section-bg">
                    <div class="container aos-init aos-animate" data-aos="fade-up"><header class="section-header">
                        <h3 class="section-title">Projects</h3></header>
                        <div class="row portfolio-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" style={{ position: "relative", height: "1098.02px" }}>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-app" style={{ position: "absolute", left: "0px; top: 0px" }}><div class="portfolio-wrap">
                                <img src={b1} class="img-fluid" alt="" /><div class="portfolio-info"><h4><a href="portfolio-details.html">App 1</a></h4>
                                    <p>App</p><div> <a href={b1} data-gallery="portfolioGallery" title="App 1" class="link-preview portfolio-lightbox">
                                        <i class="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" class="link-details" title="More Details"><i class="bi bi-link"></i></a></div></div>
                            </div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s" style={{ position: "absolute", left: "380px", top: "0px" }}><div class="portfolio-wrap">
                                <img src="assets/img/portfolio/web3.jpg" class="img-fluid" alt="" /><div class="portfolio-info"><h4><a href="portfolio-details.html">Web 3</a>
                                </h4><p>Web</p><div> <a href="assets/img/portfolio/web3.jpg" class="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Web 3">
                                    <i class="bi bi-plus"></i></a> <a href="portfolio-details.html" class="link-details" title="More Details"><i class="bi bi-link"></i></a>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s" style={{ position: "absolute", left: "760px", top: "0px" }}><div class="portfolio-wrap">
                                <img src={b2} class="img-fluid" alt="" /><div class="portfolio-info"><h4><a href="portfolio-details.html">App 2</a>
                                </h4><p>App</p><div> <a href={b2} class="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="App 2">
                                    <i class="bi bi-plus"></i></a> <a href="portfolio-details.html" class="link-details" title="More Details"><i class="bi bi-link"></i></a></div></div></div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-card" style={{ position: "absolute", left: "760px", top: "230.25px" }}><div class="portfolio-wrap">
                                <img src={b3} class="img-fluid" alt="" /><div class="portfolio-info"><h4><a href="portfolio-details.html">Card 2</a></h4><p>Card</p><div>
                                    <a href="assets/img/portfolio/card2.jpg" class="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Card 2"><i class="bi bi-plus"></i></a>
                                    <a href="portfolio-details.html" class="link-details" title="More Details"><i class="bi bi-link"></i></a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s" style={{ position: "absolute", left: "380px", top: "268.688px" }}>
                                <div class="portfolio-wrap"> <img src={b4} class="img-fluid" alt="" /><div class="portfolio-info"><h4>
                                    <a href="portfolio-details.html">Web 2</a></h4><p>Web</p><div> <a href={b4} class="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Web 2"><i class="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" class="link-details" title="More Details"><i class="bi bi-link"></i></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s" style={{ position: "absolute", left: "0px", top: "390.891px" }}>
                                <div class="portfolio-wrap"> <img src={b4} class="img-fluid" alt="" /><div class="portfolio-info"><h4><a href="portfolio-details.html">App 3</a></h4>
                                <p>App</p><div> <a href="assets/img/portfolio/app3.jpg" class="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="App 3">
                                    <i class="bi bi-plus"></i></a> <a href="portfolio-details.html" class="link-details" title="More Details"><i class="bi bi-link"></i></a></div>
                            </div>
                            </div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-card" style={{ position: "absolute", left: "0px", top: "656.282px" }}><div class="portfolio-wrap">
                                <img src={b1} class="img-fluid" alt="" />
                                <div class="portfolio-info"><h4><a href="portfolio-details.html">Card 1</a></h4><p>Card</p><div>
                                    <a href="assets/img/portfolio/card1.jpg" class="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Card 1">
                                        <i class="bi bi-plus"></i></a> <a href="portfolio-details.html" class="link-details" title="More Details"><i class="bi bi-link">
                                        </i></a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-card" data-wow-delay="0.1s" style={{ position: "absolute", left: "760px", top: "789.625px" }}>
                                <div class="portfolio-wrap">
                                    <img src={b2} class="img-fluid" alt="" /><div class="portfolio-info"><h4><a href="portfolio-details.html">Card 3</a>
                                    </h4><p>Card</p><div> <a href="assets/img/portfolio/card3.jpg" class="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Card 3">
                                        <i class="bi bi-plus"></i></a> <a href="portfolio-details.html" class="link-details" title="More Details"><i class="bi bi-link"></i></a></div></div></div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.2s" style={{ position: "absolute", left: "380px", top: "830.844px" }}>
                                <div class="portfolio-wrap"> <img src={b3} class="img-fluid" alt="" /><div class="portfolio-info"><h4>
                                    <a href="portfolio-details.html">Web 1</a></h4><p>Web</p><div> <a href="assets/img/portfolio/web1.jpg" class="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Web 1"><i class="bi bi-plus"></i></a>
                                        <a href="portfolio-details.html" class="link-details" title="More Details"><i class="bi bi-link"></i></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="team" class="team">
                    <div class="container aos-init aos-animate" data-aos="fade-up">
                        <div class="section-header"><h3>Team</h3>
                            <p>Our Team</p>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                <div class="member">
                                    <img src={jai} class="img-fluid" alt="" />
                                    <div class="member-info"><div class="member-info-content">
                                        <h4>JayaKumar D</h4> <span>Chief Executive Officer</span>
                                        <div class="social">
                                            <a href="https://www.instagram.com/devilvirus420"><i class="fa fa-facebook"></i></a>
                                            <a href="https://www.instagram.com/devilvirus420"><i class="fa fa-instagram"></i></a>
                                            <a href="https://in.linkedin.com/in/jayakumar-dhanasekaran-1a7391111"><i class="fa fa-linkedin"></i></a>
                                        </div></div>
                                    </div></div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>


        </>
    )
}


export default Main