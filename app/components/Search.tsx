"use client";

import React from 'react'
import Button from './Button';
import IonIcon from '@reacticons/ionicons';

const Search = () => {
    return (
        <div>
            <Button type='submit' className='flex text-[1.2rem] justify-center items-center'>
                <IonIcon name='search' />
            </Button>
        </div>
    )
}

export default Search