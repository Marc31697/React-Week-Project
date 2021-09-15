import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, choosePrice } from '../redux/slices/rootSlice';
import { Input } from '../sharedComponents';
import { Button } from '@material-ui/core';
import { server_calls } from '../api';
import { useGetData } from '../custom-hooks';

interface CarFormProps{
    id?:string;
    data?: {};
}

interface CarState {
    make: string;
    price: string;
}

export const CarForm = (props:CarFormProps) => {
    const dispatch = useDispatch();

    let { carData, getData } = useGetData();

    const store = useStore();

    const make = useSelector<CarState>(state => state.make)
    const price = useSelector<CarState>(state => state.price)

    const { register, handleSubmit } = useForm({ })

    const onSubmit = async(data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await server_calls.update(props.id, data)
            window.location.reload()
            console.log(`updated: ${data}`)
            event.target.reset();
        } else{
            dispatch(chooseName(data.make))
            dispatch(choosePrice(data.price))
            await server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit= {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Car Make</label>
                    <Input {...register('make')} name="make" placeholder='Make' />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name="model" placeholder="Model"/>
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <Input {...register('color')} name="color" placeholder="Color"/>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder="Year"/>
                </div>
                <div>
                    <label htmlFor="max_speed">Max Speed</label>
                    <Input {...register('max_speed')} name="max_speed" placeholder="Max Speed"/>
                </div>
                <div>
                    <label htmlFor="miles_per_gallon">Miles Per Gallon</label>
                    <Input {...register('miles_per_gallon')} name="miles_per_gallon" placeholder="Miles Per Gallon"/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}