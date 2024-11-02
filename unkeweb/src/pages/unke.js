import { useNavigate } from "react-router-dom"

export default function Unke() {
    const hStyle = { 
        color: '#CC0000',
        textShadow: '2px 2px 2px black'
    };

    const navigate = useNavigate()
 
    return (
        <>
        <h2 style = {hStyle}>Unknown Era</h2>
        </>
    )
     
}