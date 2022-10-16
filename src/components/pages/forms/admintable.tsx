import 'bootstrap/dist/css/bootstrap.min.css';
import react, { useState, useEffect } from "react"
import { Container } from "react-bootstrap";
import '../../../syles/formstyle.css';
import '../../../syles/cardstyle.css';

function Admintable() {
    const [location_name, Setlocationname] = useState<string>("");
    const [location_id, Setid] = useState<string>("");
    const [price, SetPrice] = useState<string>("");
    const [Locations, Setlocations] = useState<any>([])
    useEffect(() => {
        fetch("http://localhost:3001/infotable").then((res) => res.json()).then(res => Setlocations(res)).then((jsonRes) => console.log(jsonRes)).catch((err) => console.log(err))
    }, [])

    interface Location {
        location_id:number,
        location_name: string,
        price: number
    }
    async function llocation(event: any) {
        event.preventDefault()
        const response = await fetch("http://localhost:3001/infotable", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                location_id,
                location_name,
                price,
            }),
        })
        const data = await response.json()
        if (data.location) {
            alert('the data is insert')
        }
        else {
            alert('the location already existing')
        }
    }
    return (
        
        <Container id='main-container' className='d-grid h-100'>
        <div>
        <form onSubmit={llocation} className='text-center w-100' id="form">
            <h1 id="margen-botom-input ">Locations</h1>
            <div>
                    <input type="text" onChange={(e) => Setid(e.target.value)} id="input" placeholder="id location"/>
                </div>
                <div>
                    <input type="text" onChange={(e) => Setlocationname(e.target.value)} id="input" placeholder="location name"/>
                </div>
                <div>
                    <input type="" onChange={(e) => SetPrice(e.target.value)} id="input" placeholder="price"/>
                </div>
                <input id="margen-botom-button" className="btn btn-primary btn-lg" type="submit" value="submit" />
            </form>

            <div id="card-flex">
                {Locations.length > 0 ? Locations.map((location: Location) =>
                    <div key={location.location_id} className="card" id="cardd">
                        <div className="card-body">{location.location_name}</div>
                        <div> price: {location.price}$</div>
                        <button className="btn btn-danger" >delet</button>
                    </div>
                )
                    : ('loading...')}

            </div>
        </div>
        </Container>
    )
}
export default Admintable