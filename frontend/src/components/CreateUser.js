
import "./CreateUser.css";

function CreateUser() {
    
    function createUser() {
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;

        if ( name == "" || email == "" ) {
            alert("You must fill out both fields.");
            return;
        }

        fetch("http://localhost:8080/create_user", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                "name" : name,
                "email_address" : email
            })
        })
        .then(res => res.json())
        .then(response => {
            console.log(response);
        })
    }

    return (
        <div className="create-user-container box">
            <input id="name"
                   type="text"
                   placeholder="John Doe"
                   maxLength="40" />
            <input id="email"
                   type="email"
                   placeholder="john.doe@gmail.com"
                   maxLength="100" />
            <button onClick={createUser}>Add Yourself</button>
        </div>
    )
}

export default CreateUser;