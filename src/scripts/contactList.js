// The contactList component that displays all contacts. It should import the contact component and the contactCollection component.
import contactCollection from "./contactCollection"
import contact from "./contact"

export default {
  listAllContacts() {
    contactCollection.getAllContacts().then(contactsResponse => {
      console.log(contactsResponse)

      const contactsSection = document.createElement("section")

      contactsResponse.forEach((theContact) => {
        const contactHTML = contact.buildContact(theContact)
        contactsSection.appendChild(contactHTML)
      })

      const displayContainer = document.querySelector("#display-container");
      displayContainer.appendChild(contactsSection);
    })
  }
}