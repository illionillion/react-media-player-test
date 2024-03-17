import { Center, Link as UILink } from "@yamada-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

export const Home:FC = () => (
    <Center flexDir='column'>
        <UILink to="/react-audio-player" as={Link}>react-audio-player</UILink>
        <UILink to="/react-h5-audio-player" as={Link}>react-h5-audio-player</UILink>
    </Center>
)