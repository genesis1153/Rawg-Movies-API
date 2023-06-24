import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import cropImage from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;

    return (
        <List>
            {isLoading && <Spinner />}

            <Heading fontSize="30px" marginBottom={3} marginTop={2}>
                Genres
            </Heading>

            {data.map((genre) => (
                <ListItem paddingY={1} key={genre.id}>
                    <HStack>
                        <Image
                            boxSize="32px"
                            src={cropImage(genre.image_background)}
                            borderRadius="6px"
                            objectFit="cover"
                        />
                        <Button
                            variant="link"
                            fontSize="lg"
                            fontWeight={
                                selectedGenre?.id === genre.id ? "bold" : ""
                            }
                            color={
                                selectedGenre?.id === genre.id
                                    ? "green.500"
                                    : ""
                            }
                            onClick={() => onSelectGenre(genre)}
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenresList;
