import React from "react";

function Contact(props) {
    return (
        <div class="w3-content w3-container w3-padding-64" id="contact">
            <h3 class="w3-center">TELL US ABOUT YOUR EXPERIENCE</h3>
            <div class="w3-row w3-padding-32 w3-section">
                <div class="w3-col m4 w3-container">
                    <iframe title="officelocation"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26467.88551409237!2d151.22342043872627!3d-33.980056465464095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b40767dbb7f5%3A0x206f441faa941cd0!2s14%20Alkoo%20Ave%2C%20Little%20Bay%20NSW%202036!5e0!3m2!1sen!2sau!4v1612060624940!5m2!1sen!2sau"
                        width="400" height="300" frameborder="0" allowfullscreen="" aria-hidden="false"
                        class="w3-image w3-round" tabindex="0" />
                </div>
                <div class="w3-col m8 w3-panel">
                    <div class="w3-large w3-margin-bottom">
                        <i class="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Sydney, AUS<br />
                        <i class="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: +61 478 678
                            624<br />
                        <i class="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email:
                            colinjcsmith@gmail.com<br />
                    </div>
                    <p>Drop me a message and let's chat:</p>
                    <form action="/action_page.php" target="_blank">
                        <div class="w3-row-padding">
                            <div class="w3-half">
                                <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
                            </div>
                            <div class="w3-half">
                                <input class="w3-input w3-border" type="text" placeholder="Email" required name="Email" />
                            </div>
                        </div>
                        <input class="w3-input w3-border" type="text" placeholder="Message" required name="Message" />
                        <button class="w3-button w3-black w3-right w3-section" type="submit">
                            <i class="fa fa-paper-plane"></i> SEND MESSAGE
                                    </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;