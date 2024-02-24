export default function AboutMe() {
    return (
        <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <div style = {{displya: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px', maxWidth: '600px', width: '100%' }} >
            <img src= "./src/assets/images/lalitakapadia.jpg" alt = "photo"  
            style={{ width: '95px', height: '95px', borderRadius: '50%' }} ></img>
            <div style = {{margin: '20px 0'}} >
                <h3 style = {{ textAlign: 'left', fontSize: '1.5em'}}>About Me</h3>
            </div>
        </div>
        <p style={{ textAlign: 'justify', fontSize: '1.3em', maxWidth: '90%', width: '100%' }}>
            paragraph about me 
        </p>
        </div>
    );
}