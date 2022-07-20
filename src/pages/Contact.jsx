import ContactInfo from "../components/ContactInfo"
import LocationMap from "../components/LocationMap"
import Navbar from "../components/Menu/Navbar"
import Poster from "../components/Poster"

function Contact() {
    const posterData = {
        title: "contact",
        subtitle: "home ~ contact"
    }
    const contact = {
        intro: "contact us",
        title: "Entre contato por:",
        contactList: [
            { type: "Email", icon: "fa-regular fa-paper-plane", value:"contatosraphaelmoreira@gmail.com" },
            { type: "Github", icon: "fa-brands fa-github", value: "@github.com/rapha-developer" },
            { type: "Codepen", icon: "fa-brands fa-codepen", value: "@codepen.io/rapha-developer" },
            { type: "Behance", icon: "fa-brands fa-behance", value: "@behance.io/rapha-developer" },
        ]
    }
    return (
        <div className="contact">
            <Navbar />
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