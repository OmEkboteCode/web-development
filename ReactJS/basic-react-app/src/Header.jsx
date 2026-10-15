export default function Header(){
    let styles = { border: "1px solid black", backgroundColor: "blue"}
    return(
        <div className="header" style={styles}>
        <h2>MY DEVELOPER SPACE</h2>
        <h1>Hello, World!</h1>        
        <h4>Learning, building and growing one line at a time</h4>
        </div>

    )
}