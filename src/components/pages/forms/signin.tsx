
import react, { useState } from "react"
import { valdtionData } from "../../../valdtion/input_valdtion"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import '../../../syles/formstyle.css';

function Signin() {
    const [email, Setemail] = useState<string>("");
    const [password, Setpass] = useState<string>("");
    const onsubmet = () => {
        const check_data = new valdtionData();
        const result_Email_check = check_data.getEmail(email)
        const result_passowrd_check = check_data.getPass(password)
    }
    async function loginuser(event: any) {
        event.preventDefault()
        const response = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        const data = await response.json()
        ///////////check if the user admin go to admin page
        if (email === "admin@admin" && password === "admin") {
            window.location.href = '/Admintable'
            alert('welcome admin')
        }
        else if (data.user) {
            alert('login successful welcome')
            window.location.href = '/infotable'
        }
        else {
            alert('please check your user and passowrd')
        }
    }
    return (

        <Container id='main-container' className='d-grid h-100'>
            <div>
                <form onSubmit={loginuser} className='text-center w-100' id="form">
                    <h1 id="margen-botom-input " >sign in</h1>
                    <div>
                        <input id="input" type="text" onChange={(e) => Setemail(e.target.value)} placeholder="email" />
                    </div>
                    <div>
                        <input id="input" type="password" onChange={(e) => Setpass(e.target.value)} placeholder="password" />
                    </div>
                    <input id="margen-botom-button" className="btn btn-primary btn-lg" type="submit" value="submit" />
                </form>
            </div>
        </Container>
    )
}
export default Signin