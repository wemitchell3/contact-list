// The contactCollection component that loads existing contacts from a json-server API, and saves new ones.
export default {
    getAllContacts() {
      return fetch("http://localhost:8088/contacts").then(response =>
        response.json()
      )
    },
    postNewContact(contact) {
      return fetch("http://localhost:8088/contacts", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(contact)
      }).then(response => response.json())
    }
  }