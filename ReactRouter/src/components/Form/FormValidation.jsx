export default function Validation({values}) {
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if(values.name === "") {
        errors.name = "Name is Required"
    }

    if(values.email === "") {
        errors.email = "Email is Required"
    }

    if(values.subject === "") {
        errors.subject = "Subject is Required"
    }
    else if(!email_pattern.test(values.email)) {
        errors.email = "Email did'nt match"
    }

    if(values.message === "") {
        errors.message = "Message is Required"
    }

    return errors;
}