import React, { useState } from 'react'

// import useStyles from './formstyles'
import axios from 'axios'

const Form = () => {
    // const classes = useStyles();
    const [input, setInput] = useState({
        title: '',
        description: '',
        donation: '',
        caseStudy: ''
    })

    function handleChange(event) {
        const { name, value } = event.target

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        // const newCampaign = {
        //     title: input.title,
        //     description: input.description,
        //     donation: input.donation,
        //     caseStudy: input.caseStudy
        // }

        // console.log(newCampaign);
        // console.log(input);

        axios.post('http://localhost:3000/campaigns/create');
        console.log("saved");
    }

    return (

        <div class="container">
            <form>
                <div className="form-group">
                    <label for="title">Campaign Name</label>
                    <input onChange={handleChange} type="text" name="title" value={input.title} placeholder="Give your campaign a name" />
                </div>
                <div className="form-group">
                    <label for="description">Campaign Description</label>
                    <input onChange={handleChange} type="text" name="description" value={input.description} placeholder="Describe the issue" />
                </div>
                <div className="form-group">
                    <label for="donation">Recommended donation</label><br></br>
                    <input onChange={handleChange} type="number" name="donation" value={input.donation} />
                </div>
                {/* <div className="form-group">
                    <label for="startDate">Start camapign</label>
                    <input type="date" name="startDate" id="startDate" />
                </div>
                <div className="form-group">
                    <label for="endDate">End camapign</label>
                    <input type="date" name="endDate" id="endDate" />
                </div> */}
                <div className="form-group">
                    <label for="caseStudy">Select a case study</label>
                    <input onChange={handleChange} type="text" name="caseStudy" value={input.caseStudy} />
                </div>

                <button onClick={handleClick} class="w3-button w3-padding-large w3-light-grey center" id="submit-btn" position="relative">BUILD MY CAMPAIGN</button>

            </form>
        </div>
    )
}

export default Form



