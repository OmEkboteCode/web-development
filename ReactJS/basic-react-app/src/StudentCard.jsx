export default function StudentCard({name, branch, semester, interests}){

    return(
        <div>
            <h2>{name}</h2>
            <p>Branch: {branch}</p>
            <p>Semester: {semester}</p>
            <b>Interests: {interests}</b>
        </div>
    )
}