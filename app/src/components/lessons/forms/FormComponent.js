import React from 'react';

function FormComponent(props) {
    return (
        <main>
            <form>
                <input
                    name="firstName"
                    value={props.data.firstName}
                    placeholder="First Name"
                    onChange={props.handleChange}
                />
                <br />

                <input
                    name="lastName"
                    value={props.data.lastName}
                    placeholder="Last Name"
                    onChange={props.handleChange}
                />
                <br />

                <input
                    name="age"
                    value={props.data.age}
                    placeholder="Age"
                    onChange={props.handleChange}
                />
                <br />
                <br />

                <label>
                    Female:
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={props.handleChange}
                        checked={props.data.gender === 'Female'}
                    />
                </label>
                <br />

                <label>
                    Male:
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={props.handleChange}
                        checked={props.data.gender === 'Male'}
                    />
                </label>
                <br />

                <label>
                    Other:
                    <input
                        type="radio"
                        name="gender"
                        value="Other"
                        onChange={props.handleChange}
                        checked={props.data.gender === 'Other'}
                    />
                </label>
                <br />
                <br />

                <label>Destination:</label>
                <select name="destination" value={props.data.destination} onChange={props.handleChange}>
                    <option value="">-- Please Choose a destination --</option>
                    <option value="Toronto">Toronto</option>
                    <option value="Montreal">Montreal</option>
                    <option value="Vancouver">Vancouver</option>
                </select>
                <br />
                <br />

                <label>
                    Vegan?
                    <input
                        type="checkbox"
                        name="isVegan"
                        checked={props.data.dietaryRestrictions.isVegan}
                        onChange={props.handleChange}
                    />
                </label>
                <br />

                <label>
                    Kosher?
                    <input
                        type="checkbox"
                        name="isKosher"
                        checked={props.data.dietaryRestrictions.isKosher}
                        onChange={props.handleChange}
                    />
                </label>
                <br />

                <label>
                    Lactose Free?
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        checked={props.data.dietaryRestrictions.isLactoseFree}
                        onChange={props.handleChange}
                    />
                </label>
                <br />
                <br />

                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName + ' ' + props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>
                Your dietary restrictions: <br />
                {props.getDietaryRestrictionDescription()}
            </p>
        </main>
    );
}

export default FormComponent;