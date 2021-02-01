import React from "react";

const FooterPage = () => {
  return (
    <section>
    <div>
        <container className="footerrow">
          <a href="mailto:leggeamy@gmail.com">
            <img 
            src={require("../../assets/icons/email.png").default}
            alt="email"
            className="icon" />
            </a> 
  
          <a href="https://www.linkedin.com/in/amy-legge/">
            <img 
            src={require("../../assets/icons/linkedin.png").default}
            alt="linkedin"
            className="icon" />
            </a> 
       
          <a href="https://github.com/leggeamy">
            <img 
            src={require("../../assets/icons/github.png").default}
            alt="egithub"
            className="icon" />
            </a> 
         </container>
    </div>
  </section>
  );
}

export default FooterPage;