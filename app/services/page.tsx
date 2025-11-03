import GetPosts from '@/components/GetPosts';
import { getPosts } from '@/lib/getPosts';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

const Services = async () => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ['posts'],
        queryFn: getPosts
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <GetPosts />
        </HydrationBoundary>
    )
}

export default Services