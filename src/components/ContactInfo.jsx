
function ContactInfo(props) {
    const contact = props.contact
    const contact__items = contact.contactList.map((contactItem) => {
        const messageAfterFormatted = contactItem.type + ": " + contactItem.value;
        return (
            <div className="contact__item" key={contactItem.type}>
                <a href={contactItem.url} 
                    target="_blank"
                    className="contact__icon"><i className={contactItem.icon}></i></a>
                <p className="contact__text">
                    <a href={contactItem.url}
                        target="_blank">{messageAfterFormatted}</a></p>
            </div>
        )
    });
    return (
        <div className="contact__section">
            <h6 className="subject__intro uppercase">{contact.intro}</h6>
            <h2 className="subject__title capitalize">{contact.title}</h2>
            <div className="contact__information">
                {contact__items}
            </div>
        </div>
    )
}
export default ContactInfo