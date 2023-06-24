import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

function usePlatforms() {
    const { data, error, isLoading } = useData<Platform>(
        "/platforms/lists/parents"
    );

    return { data, error, isLoading };
}

export default usePlatforms;
