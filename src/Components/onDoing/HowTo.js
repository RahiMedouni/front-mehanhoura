import ConstructionSharpIcon from '@mui/icons-material/ConstructionSharp';
import "./OnDoing.css";

const HowTo = () => {
    return (
        <>
        <section style={{
            backgroundColor: "whitesmoke",
            height: "100vh",
            marginTop: -75,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
                
            <div className='box'>
                < ConstructionSharpIcon sx={{ fontSize: 200, color: "#0040AA" }} />
            </div>
            <h1 style={{marginTop: 50, color: "#0040AA" }}>en cour de traitement</h1>
    </section>
        </>
    )
}

export default HowTo;