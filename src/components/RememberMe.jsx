export function RememberMe() {
    return (
        <div className="col-12">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" name="remember-me" value="true" id="remember-me"/>
                <label className="form-check-label" htmlFor="remember-me">Remember me</label>
            </div>
        </div>
    );
}