'use client';

import { getPosts } from '@/lib/getPosts';
import { useQuery } from '@tanstack/react-query'
import React from 'react'

interface IPost{
    id: number;
    title: string;
}

const GetPosts = () => {
    const {data, isLoading, error} = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts
    })

    if(isLoading) return 
  return (
    <div>
        <ul>
            {data?.slice(0, 5).map(({id, title}: IPost)=>(
                <li key={id}>title: {title}</li>
            ))}
        </ul>
    </div>
  )
}

export default GetPosts