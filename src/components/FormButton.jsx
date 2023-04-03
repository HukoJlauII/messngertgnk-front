export function FormButton(props) {
    return (
        <div className="col-12">
            <button className="btn btn-primary w-100" onClick={props.submit}>{props.action}</button>
        </div>
    );
}