// The contact component that displays a a contact's name, phone number, and address.
export default {
    buildContact(contact) {
        const contactArticle = document.createElement("article")

        const contactHeader = contactArticle.appendChild(document.createElement("h3"))
        contactHeader.textContent = contact.name

        const contactPhoneNumberParagraph = contactArticle.appendChild(document.createElement("p"))
        contactPhoneNumberParagraph.textContent = contact.phoneNumber

        const contactAddressParagraph = contactArticle.appendChild(document.createElement("p"))
        contactAddressParagraph.textContent = contact.address

        return contactArticle
    }
}