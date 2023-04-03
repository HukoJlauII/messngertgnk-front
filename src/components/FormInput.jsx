export const FormInput = (props) => {
    return (
        <div className="col-12">
            <label htmlFor={props.name.toLowerCase()} className="form-label">{props.name}</label>
            <div className="input-group has-validation">
                {(props.name === "Username") && <span className="input-group-text" id="inputGroupPrepend">@</span>}
                <input type={chooseInputType(props.name)} name={props.name.toLowerCase()} className="form-control"
                       id={props.name.toLowerCase()}
                       value={props.value}
                       onChange={props.setter}
                       required/>
                <div className="invalid-feedback">Please enter your {props.name.toLowerCase()}</div>
            </div>
        </div>
    );
};

function chooseInputType(type) {
    switch (type) {
        case "Password":
        case "Password Confirm":
            return "password";
        case "Email":
            return "email"
        default:
            return "text";
    }
}