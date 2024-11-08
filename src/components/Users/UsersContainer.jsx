import { useState, useEffect, Fragment } from "react";
import { ProgressSpinner } from 'primereact/progressspinner';
        

const UsersContainer = () =>{
    const[dataUsers, setDataUsers] = useState([]), 
    [loadingUsers, setLoadingUsers] = useState(true); 

    const getDataUsers = async() =>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log('responde', response); 
        if(!response.ok){
            console.log("hubo un error");
        }

        const results = await response.json()
        setDataUsers(results)
        console.log('resultado:', results);
        }
        catch(error) {
            console.log('hubo un error');
        }
        finally{
            setLoadingUsers(false)
        }
    }

    console.log("dataUsers", dataUsers);
    

    useEffect(() => {
        getDataUsers()
    }, [])

return(
    <Fragment>
        {loadingUsers ? 
        <ProgressSpinner></ProgressSpinner>
        :
            dataUsers.map((user)=>(
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <h3>{user.adress.street}</h3>
                </div>
                //<h1 key={user.id}> {user.name}</h1>
            ))
        }
    </Fragment>
)

}

export default UsersContainer 

