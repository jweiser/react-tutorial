import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination: '',
            dietaryRestrictions: {
                isVegan: false,
                isKosher: false,
                isLactoseFree: false
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.getDietaryRestrictionDescription = this.getDietaryRestrictionDescription.bind(this);
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target;

        if (type === "checkbox") {
            this.setState(prevState => {
                return {
                    dietaryRestrictions: {
                        ...prevState.dietaryRestrictions,
                        [name]: checked
                    }
                };
            });
        } else {
            this.setState({
                [name]: value
            });
        }
    }

    getDietaryRestrictionDescription() {
        return Object.entries(
            this.state.dietaryRestrictions
        ).map(([dietaryRestriction, checked]) => {
            if (checked) {
                return dietaryRestriction
                    .replace(/^is/, '') // Remove 'is' prefix of dietary restriction name
                    .replace(/([a-z])([A-Z])/g, '$1 $2'); // Separate camel case in the name with a space
            } else {
                return '';
            }
        }).filter(
            dietaryRestriction => dietaryRestriction.length > 0
        ).join(', ');
    }

    render() {
        return (
            <main>
                <form>
                    <input
                        name="firstName"
                        value={this.state.firstName}
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <br />

                    <input
                        name="lastName"
                        value={this.state.lastName}
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />
                    <br />

                    <input
                        name="age"
                        value={this.state.age}
                        placeholder="Age"
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />

                    <label>
                        Female:
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            onChange={this.handleChange}
                            checked={this.state.gender === 'Female'}
                        />
                    </label>
                    <br />

                    <label>
                        Male:
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            onChange={this.handleChange}
                            checked={this.state.gender === 'Male'}
                        />
                    </label>
                    <br />

                    <label>
                        Other:
                        <input
                            type="radio"
                            name="gender"
                            value="Other"
                            onChange={this.handleChange}
                            checked={this.state.gender === 'Other'}
                        />
                    </label>
                    <br />
                    <br />

                    <label>Destination:</label>
                    <select name="destination" value={this.state.destination} onChange={this.handleChange}>
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
                            checked={this.state.dietaryRestrictions.isVegan}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <label>
                        Kosher?
                        <input
                            type="checkbox"
                            name="isKosher"
                            checked={this.state.dietaryRestrictions.isKosher}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <label>
                        Lactose Free?
                        <input
                            type="checkbox"
                            name="isLactoseFree"
                            checked={this.state.dietaryRestrictions.isLactoseFree}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName + ' ' + this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: <br />
                    {this.getDietaryRestrictionDescription()}
                </p>
            </main>
        )
    }
}

export default App;