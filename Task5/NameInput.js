const NameInput =(props) => {
    return(
        <div>
            <input type="text" value = {props.info} onChange={(e)=>{props.nameSetter(e.target.value)}} />
          
        </div>
    )
}
export default NameInput;