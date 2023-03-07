import './styles.css'

export function Card(props){
    return(
        <div className="card">
            <div className='name-list'>
                <small>{ props.number}</small>
                <strong>{ props.name}</strong>
            </div>
            <small className='time'>{props.time}</small>
        </div>
    )
}