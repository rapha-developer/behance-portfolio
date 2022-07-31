import ContactInfo from "../components/ContactInfo"
import LocationMap from "../components/LocationMap"
import Poster from "../components/Poster"

import contactInformation from "../api/contactInformation"
function Contact() {
    const posterData = {
        title: "contact",
        subtitle: "home ~ contact"
    }
    const contact = contactInformation
    return (
        <div className="contact">
            <Poster  
                title={posterData.title}
                subtitle={posterData.subtitle}
            />
            <div className="container">
                <div className="row">
                    <ContactInfo contact={contact} />
                    <LocationMap />
                </div>
            </div>
        </div>
    )
}
export default Contact