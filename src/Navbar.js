import React, { useState } from 'react'

const Navbar = ({fetchMovies,fetchseries}) => {

const [movieName,setMovieName] = useState('')

const [seties,setseries] = useState('')


const Submit=(e)=>{
e.preventDefault();
fetchMovies(movieName)
fetchseries(seties)
}


const change=(e)=>{
setMovieName(e.currentTarget.value)
setseries(e.currentTarget.value)
}

return (
<>
<h2>Movies Bank</h2>
<form onSubmit={Submit}>
    <input type="text" placeholder='Search a Movies'
        onChange={change}
        className='navinput'
    />
</form>
</>
    )
}

export default Navbar