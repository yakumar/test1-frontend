import React, {useState, useEffect} from 'react'
import axios from 'axios'


const MyProfile = (props) => {

        //  const [messageObj, setMessage] = useState({ message: '', id: 1 });

        const [newProfile, setNewProfile]= useState({
            name:'',
            id:'',
            email:'',
            entries:0,
            joined:null


        });

    console.log('from MY Profile :',props.profId)
    

    useEffect(()=>{
        const myId = props.profId;
        
        axios.get(`http://localhost:8080/profile/${myId}`)
            .then(res=>{
                setNewProfile({
                    ...newProfile, 
                    name:res.data.name,
                    email:res.data.email,
                    id:res.data.id,
                    joined:res.data.joined,
                    entries:res.data.entries

            

                })
            })
            .catch(err=>console.log(err));
        

    }, []);

    function toBack(e){
        e.preventDefault();
        props.history.push('/profiles')

    }
    return (
        <div>
            <button onClick={toBack}>Back</button>
            <h3>{newProfile.email}</h3>
            
        </div>
    )
}

export default MyProfile
