

export default function Box(props){
    const style =props.value === 'X' ? 'box x':'box o'
    return <div className="box">
        <button 
        className={style}
        onClick={props.onClick}
        >
            {props.value}
        </button>
           </div>
}