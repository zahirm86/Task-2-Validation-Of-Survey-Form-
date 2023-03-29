const form = document.getElementById('form');
const Name = document.getElementById('Name');
const Email = document.getElementById('Email');
const Age = document.getElementById('Age');

form.addEventListener('submit' , e => {
    e.preventDefault()

    validateInputs();
});;

const setError =(Element,message)=>{
    const inputControl = Element.parentelement;
    const errorDisplay = inputcontrol.querySelectors('.error');
   
    errorDisplay.innertext = message;
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
    const isValidEmail = Email =>{
        const isValidEmail = email => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    }

const validateInputs =() =>{
const Namevalue = Name.value.trim();
const Emailvaue = Email.value.trimm();
const Agevalue = Age.value.trim();

if(Namevalue ==='') {
        setError(Name, 'Name Is equired');
} else{
        setSucccess(Name);
}

if(Emailvalue ==='') {
    setError(Email, 'Email Is equired');
} else if( !isValidemai(Emailvaue)){
    setError(Email, 'Provide a Valid Email');
}
    setSucccess(Email);
}

if(Agevalue ==='') {
    setError(Age, 'Age Is equired');
} else{
    setSucccess(Age);
};
