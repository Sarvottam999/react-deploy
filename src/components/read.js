import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {

    const [data, setData] = useState([]);
    // const[id,setId] = useState();


    function getData() {
        axios.get("https://6360f69aaf66cc87dc1f1271.mockapi.io/app1")
            .then((res) => {
                console.log("%%%%%%Z%Z%", res.data)
                setData(res.data)
            });
    }


    function handledelete(id) {

        axios
            .delete(`https://6360f69aaf66cc87dc1f1271.mockapi.io/app1/${id}`)
            .then((res) => { getData(); console.log("xxxxxxxxx", res); }
                // .then(res => {
                //   console.log("xxxxxxxxx",res)
                // }
            )
    }

    function handelStorage(id, name, email) {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);


         
    }

    // function handleDelete(id) {
    //      axios.delete(
    //   `https://jsonplaceholder.typicode.com/posts/${id}`)
    //     .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //     })
    //   }


    useEffect(() => {

        getData();
    }, []);


    return (
        < >
            <h1>read</h1>
            <Link to = "/">
<button type="submit" className="btn btn-primary"> create</button>
</Link>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                {data.map((eachdata) => {
                    console.log("*********", data);
                    return (

                        <tbody>
                            <tr>
                                <th scope="row">{eachdata.id}</th>
                                <td>{eachdata.name}</td>
                                <td>{eachdata.email}</td>
                                <td><Link to="/update">
                                    <button className="btn btn-success"  onClick={()=>handelStorage(eachdata.id, eachdata.name, eachdata.email)} >edit</button>
                                </Link></td>

                                <td><button className="btn btn-danger" onClick={() => handledelete(eachdata.id)} >delete</button> </td>

                            </tr>

                        </tbody>
                    )
                })}
            </table>
        </ >
    )
}

export default Read
