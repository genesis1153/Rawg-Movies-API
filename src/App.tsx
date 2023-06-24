import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string | null;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    function handleSelectGenre(genre: Genre) {
        setGameQuery({ ...gameQuery, genre });
    }

    function handleSelectPlatform(platform: Platform) {
        setGameQuery({ ...gameQuery, platform });
    }

    function handleSortOrder(sortOrder: string) {
        setGameQuery({ ...gameQuery, sortOrder });
    }

    function handleSearchGame(searchText: string) {
        setGameQuery({ ...gameQuery, searchText });
    }

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "300px 1fr",
            }}
        >
            <GridItem area="nav">
                <NavBar onHandleSearchGame={handleSearchGame} />
            </GridItem>

            <Show above="lg">
                <GridItem area="aside" p={5}>
                    <GenresList
                        onSelectGenre={handleSelectGenre}
                        selectedGenre={gameQuery.genre}
                    />
                </GridItem>
            </Show>

            <GridItem area="main">
                <GameHeading gameQuery={gameQuery} />
                <HStack
                    spacing={5}
                    marginLeft={5}
                    marginBottom={2}
                    marginTop={3}
                >
                    <PlatformSelector
                        selectedPlatform={gameQuery.platform}
                        onSelectPlatform={handleSelectPlatform}
                    />
                    <SortSelector
                        sortOrder={gameQuery.sortOrder}
                        onSelectSortOrder={handleSortOrder}
                    />
                </HStack>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}

export default App;
