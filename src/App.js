import './App.css';
import React, {useState} from "react";
import { useForm } from "react-hook-form";


function App(props) {

   const [post, setPost] = useState();

   const addPost = (post) => {
       setPost(post)
   }

    const {register, handleSubmit, reset, formState: { errors, isValid }
    } = useForm({mode: "onBlur"});
    const onSubmit = (data) => {
        addPost(data)
        reset()
    };

     return (
        <div className={'App'}>
            <h1>Add post (with react-hook-form)</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
         <div> {errors.name && <p>{errors.name.message || "Errors"}</p>}</div>
            <input defaultValue="" {...register("name",
                { required: 'This field is required',
                minLength:{
                    value: 5,
                    message: 'So short name, min 5 symbols'
                },
                maxLength:{
                    value: 20,
                    message: 'So long name, max 20 symbols'

                }})} placeholder={'Your name'} />
            <textarea  {...register("post", { required: true })} placeholder={'Your comment...'} />
            {errors.post && <p>This field is required</p>}
            <input type="submit" disabled={!isValid} value={'Add comment'}/>
        </form>

            <pre>{JSON.stringify(post)}</pre>

        </div>
    );
}

export default App;



const container = document.querySelector(".container");

fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => {
        container.innerHTML = data.map((elem) => `<div>${elem.url}></img></div>`);
    });
