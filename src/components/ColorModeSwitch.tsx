import { HStack, Show, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <HStack marginLeft={{ lg: "50px" }}>
            <Switch
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
                colorScheme="green"
            />
            <Show above="lg">
                <Text whiteSpace="nowrap">Dark Mode</Text>
            </Show>
        </HStack>
    );
}

export default ColorModeSwitch;
