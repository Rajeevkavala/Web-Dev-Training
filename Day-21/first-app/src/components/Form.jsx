import React from 'react'

const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form Data Submitted:', data);
    // Here you can handle the form data, e.g., send it to a server
};

const Form = () => {
  return (
    <>
        <h1>Form Component</h1>
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
        
    </>
  )
}

export default Form