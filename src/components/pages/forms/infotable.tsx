import 'bootstrap/dist/css/bootstrap.min.css';
import react, { useState, useEffect } from "react"
import Locaiondisplay from '../loactions'
function Infotable() {

    const [location_id, Setid] = useState<string>("");
    const [location_name, Setlocationname] = useState<string>("");
    const [price, SetPrice] = useState<string>("");
    const [Locations, Setlocations] = useState<any>([])

    useEffect(() => {
        fetch("http://localhost:3001/infotable").then((res) => res.json()).then(res => Setlocations(res)).then((jsonRes) => console.log(jsonRes)).catch((err) => console.log(err))
    }, [])

    interface Location {
        location_id:string,
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
    }

    return (
        <div id="card-flex">
            {Locations.length > 0 ? Locations.map((location: Location) =>
                <div key={location.location_id} className="card" id="cardd">
                    <div className="card-body">{location.location_name}</div>
                    <div> price: {location.price}$</div>
                    <button className="btn btn-success">add</button>
                </div>
            )
                : ('loading...')}

        </div>
    )
}
export default Infotable