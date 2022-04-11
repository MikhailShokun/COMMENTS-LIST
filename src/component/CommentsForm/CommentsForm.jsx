import "./CommentsForm.css";
import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";

const CommentsForm = ({getComments, setLoading}) => {


    const createComments = (data) => {
        return axios.post("http://localhost:3001/comments", {
            name: data.name,
            body: data.commentBody,
        })
    }
    useEffect(()=> {
        getComments();
    }, [setLoading]);

    const {
        register, handleSubmit, reset, formState: {errors, isValid}
    } = useForm({mode: "onChange"});
    const onSubmit = (data) => {
        createComments(data);
        getComments();
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div> {errors.name && <p>{errors.name.message || "Errors"}</p>}</div>
                <input defaultValue="" {...register("name",
                    {
                        required: 'This field is required',
                        minLength: {
                            value: 5,
                            message: 'So short name, min 5 symbols'
                        },
                        maxLength: {
                            value: 20,
                            message: 'So long name, max 20 symbols'

                        }
                    })} placeholder={'Your name'}/>
                <textarea  {...register("commentBody", {required: true})} placeholder={'Your comment...'}/>
                {errors.post && <p>This field is required</p>}
                <input type="submit" disabled={!isValid} value={'Add comment'}/>
            </form>
        </div>
    );
}

export default CommentsForm;
