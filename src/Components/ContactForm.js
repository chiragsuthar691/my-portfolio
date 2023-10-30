import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { useState } from "react";

const formInitialDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
};
export const ContactForm = () => {
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-itme-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
          </Col>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col sm={6} className="px-1">
                <input
                  type="text"
                  value={formDetails.firstName}
                  placeholder="Firstname"
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                />
              </Col>
              <Col sm={6} className="px-1">
                <input
                  type="text"
                  value={formDetails.lastName}
                  placeholder="Lastname"
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                />
              </Col>
              <Col sm={6} className="px-1">
                <input
                  type="email"
                  value={formDetails.email}
                  placeholder="Email Address"
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                />
              </Col>
              <Col sm={6} className="px-1">
                <input
                  type="tel"
                  value={formDetails.phoneNumber}
                  placeholder="Phone Number"
                  onChange={(e) => onFormUpdate("phoneNumber", e.target.value)}
                />
              </Col>
              <Col>
                <textarea
                  row="6"
                  value={formDetails.message}
                  placeholder="Message"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                ></textarea>
                <button type="submit">
                  <span>{buttonText}</span>
                </button>
              </Col>
              {status.message && (
                <Col>
                  <p
                    className={status.message === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                </Col>
              )}
            </Row>
          </form>
        </Row>
      </Container>
    </section>
  );
};

// const Form = () => {
//   <!-- Begin Mailchimp Signup Form -->
// <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
// <style type="text/css">
// 	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;}
// 	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
// 	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
// </style>
// <div id="mc_embed_signup">
//     <form action="https://gmail.us17.list-manage.com/subscribe/post?u=f378a941526babcc2a3f08360&amp;id=3bd1344f26&amp;f_id=00235ae0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//         <div id="mc_embed_signup_scroll">
//         <h2>Subscribe</h2>
//         <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
// <div class="mc-field-group">
// 	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
// </label>
// 	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
// 	<span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
// </div>
// 	<div id="mce-responses" class="clear foot">
// 		<div class="response" id="mce-error-response" style="display:none"></div>
// 		<div class="response" id="mce-success-response" style="display:none"></div>
// 	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
//     <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_f378a941526babcc2a3f08360_3bd1344f26" tabindex="-1" value=""></div>
//         <div class="optionalParent">
//             <div class="clear foot">
//                 <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
//                 <p class="brandingLogo"><a href="http://eepurl.com/iirDKD" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
//             </div>
//         </div>
//     </div>
// </form>
// </div>
// <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
// <!--End mc_embed_signup--></link>
// }
