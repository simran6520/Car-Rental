import React ,{useState} from 'react'

const Search = ({history}) => {
 
    const[keyword,setKeyword]=useState('');

    const searchHandler=(e)=>{
        e.preventDefault()

        if(keyword.trim())
        {
            history.push(`/${keyword}`)
        }
        else{
            history.push('/')
        }
    }
  return (
    
        <form onSubmit={searchHandler}>
           <div className='input-group'>
               <input
               type="text"
              
               className='form-control'
               placeholder='Enter Car Name....'
               onChange={(e)=>setKeyword(e.target.value)}
               
               />
              
                   <input type='submit' value="Search"/>
                       

                   

               

               </div> 
        </form>
    
  )
}

export default Search
