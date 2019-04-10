import contactCollection from "./contactCollection"
import contactList from "./contactList"

const mainContainer = document.querySelector("#display-container")

const eventHandler = {
    handleAddContact() {
        const contactName = document.querySelector("#contact-name-input").value
        const contactPhoneNumber = document.querySelector("#contact-phone-number-input").value
        const contactAddress = document.querySelector("#contact-address-input").value

        console.log("Form values", contactName, contactPhoneNumber, contactAddress)

        const newContact = {
            "name": contactName,
            "phoneNumber": contactPhoneNumber,
            "address": contactAddress
        }

        contactCollection.postNewContact(newContact).then(
            while (mainContainer.childNodes[1])
                mainContainer.removeChild(mainContainer.childNodes[1])
            
        }.then(() => {
            contactList.listAllContacts()})
        
    }
}

export default eventHandler