import React, { Fragment, useState } from 'react'
import "../App.css"

const SearchStore = () => {

    const [data, setData] = useState({
        storeID: '',
    })

    const handleInputChange = (event) => {

        console.log(event.target.value)
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const sendData = (event) => {
        event.preventDefault();
        console.log(data.storeID)

        window.open(`/stores/${data.storeID}`)
    }

    return (

        <Fragment>
            <form onSubmit={sendData}>
                <input
                    placeholder='Enter store ID'
                    type='text'
                    name='storeID'
                    onChange={handleInputChange}
                ></input>
                <button type='submit'>Submit</button>
            </form>
        </Fragment>


    )
}

export default SearchStore