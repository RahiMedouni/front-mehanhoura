import ConstructionSharpIcon from '@mui/icons-material/ConstructionSharp';
import "./OnDoing.css";

const Bricool = () => {
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
    {/* <section className="add">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d204740.98828777502!2d3.0922204!3d36.696664899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sdz!4v1633106304643!5m2!1sen!2sdz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </section> */}
        </>
    )
}

export default Bricool;