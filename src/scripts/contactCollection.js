const api = {
    getContacts: () => {
        return fetch("http://localhost:8088/contacts")
            .then(response => response.json())
    },
    postContact: (newContactObject) => {
        fetch("http://localhost:8088/contacts", {
                method: "POST",
                body: JSON.stringify(newContactObject),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
    }
}

export default api