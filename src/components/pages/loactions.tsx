import React from 'react'
import { Locationtype } from '../../types/location.types'
interface Props {
    location: Locationtype,
}

const Locaiondisplay: React.FC<Props> = ({ location }) => {
    return (
        <div>{location.location_name}</div>
    )
}
export default Locaiondisplay