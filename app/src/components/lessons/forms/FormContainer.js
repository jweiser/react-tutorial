import React from 'react';

import FormComponent from './FormComponent';

class FormContainer extends React.Component {
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
            <FormComponent
                data={this.state}
                handleChange={this.handleChange}
                getDietaryRestrictionDescription={this.getDietaryRestrictionDescription}
            />
        );
    }
}

export default FormContainer;