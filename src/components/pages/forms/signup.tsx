import react, { useState } from "react"
import { valdtionData } from "../../../valdtion/input_valdtion"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import '../../../syles/formstyle.css';
function Signup() {
    const [name, Setname] = useState<string>("");
    const [email, Setemail] = useState<string>("");
    const [password, Setpass] = useState<string>("");

    async function registeruser(event: any) {
        event.preventDefault()
        const check_data = new valdtionData();
        const result_Email_check = check_data.getEmail(email)
        const result_passowrd_check = check_data.getPass(password)
        ////////////////////////valdtion email and password if ok move to the page
        if (result_Email_check == false) {
            alert('enter a valid email')
        }
        if (result_passowrd_check == false)
            alert('enter a valid passowrd')
        else {
            const response = await fetch("http://localhost:3001/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            })
            const data = await response.json()
            if (response == null) {
                window.location.href = "/Signin"
                console.log(data)
            }
            else {
                alert('user name or password already existing')
            }
        }
    }
    return (
        <Container id='main-container' className='d-grid h-100'>
            <div>
                <form onSubmit={registeruser} className='text-center w-100' id="form">
                    <h1 id="margen-botom-input " >sign up</h1>
                    <div>
                        <input id="input" type="text" onChange={(e) => Setname(e.target.value)} placeholder="name" />
                    </div>
                    <div>
                        <input id="input" type="text" onChange={(e) => Setemail(e.target.value)} placeholder="email" />
                    </div>
                    <div>
                        <input id="input" type="password" onChange={(e) => Setpass(e.target.value)} placeholder="password" />
                    </div>
                    <input id="margen-botom-button" className="btn btn-primary btn-lg" type="submit" value="Register" />
                </form>

            </div>
        </Container>
    )
}
export default Signup