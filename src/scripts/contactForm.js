import eventHandler from "./eventHandler"

// The contactForm component that listens for when the submit button is pressed. When it is triggered, a new contact should be POSTed to the API. It should import the contactCollection component.
const contactForm = {
    buildContactForm () {
        const contactNameLabel = document.createElement("label")
        contactNameLabel.textContent = "Contact Name: "

        const contactNameInput = document.createElement("input")
        contactNameInput.id = "contact-name-input"

        const contactPhoneNumberLabel = document.createElement("label")
        contactPhoneNumberLabel.textContent = "Contact Phone Number: "

        const contactPhoneNumberInput = document.createElement("input")
        contactPhoneNumberInput.id = "contact-phone-number-input"

        const contactAddressLabel = document.createElement("label")
        contactAddressLabel.textContent = "Contact Address: "

        const contactAddressInput = document.createElement("input")
        contactAddressInput.id = "contact-address-input"

        const addContactButton = document.createElement("button")
        addContactButton.textContent = "Add Contact"
        addContactButton.addEventListener("click", eventHandler.handleAddContact)

        const contactFormSection = document.createElement("section")
        contactFormSection.appendChild(contactNameLabel)
        contactFormSection.appendChild(contactNameInput)
        contactFormSection.appendChild(contactPhoneNumberLabel)
        contactFormSection.appendChild(contactPhoneNumberInput)
        contactFormSection.appendChild(contactAddressLabel)
        contactFormSection.appendChild(contactAddressInput)
        contactFormSection.appendChild(addContactButton)

        const displayContainer = document.querySelector("#display-container")
        displayContainer.appendChild(contactFormSection)
}
}

export default contactForm