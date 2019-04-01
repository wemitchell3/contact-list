// HTML structure for a contact entry

const contactElement = {
    makeContactComponent: (contactEntry) => {
        return `
        <section class ="singleContact">
        <p class="entryTitle">Contact Name: ${contactEntry.name}</p>
        <p class="entryTitle">Phone Number: ${contactEntry.phoneNumber}</p>
        <p class="entryTitle">Address: ${contactEntry.address}</p>
        </section>
        `
    }
    }
    
    export default contactElement