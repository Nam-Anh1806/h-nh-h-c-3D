import React from 'react';

const InputForm = () => {
    const [input, setInput] = React.useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the input submission
        console.log('Submitted input:', input);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="inputField">Enter Input:</label>
            <input 
                id="inputField"
                type="text"
                value={input}
                onChange={handleChange}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default InputForm;
