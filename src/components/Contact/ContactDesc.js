//CONTACT DESC COMPONENT

//IMPORTING
/** @jsx jsx */
import { jsx } from "@emotion/core";
import ContactItem from "./ContactItem";
import ContactIconOne from "../../assets/contact-01.png";
import ContactIconTwo from "../../assets/contact-02.png";
import ContactIconThree from "../../assets/contact-03.png";

//CONTACT DESC
const ContactDesc = () => (
  <div className="contactDesc">
    <ContactItem
      contactIcon={ContactIconOne}
      contactTitle="Endereço:"
      contactSub="Avenida Paulista n° 5555"
      contactSubTwo="São Paulo-SP"
    />
    <ContactItem
      contactIcon={ContactIconTwo}
      contactTitle="Telefone:"
      contactSub="+55 (11) 9999-9999"
      contactSubTwo='+55 (11) 8888-8888'
    />
    <ContactItem
      contactIcon={ContactIconThree}
      contactTitle="Email:"
      contactSub="contato@foryou.com"
      contactSubTwo='faleconosco@foryou.com'
    />
  </div>
);

export default ContactDesc;
