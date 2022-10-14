import React from "react";
import { Center, Grid, ActionIcon } from "@mantine/core";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";

const SocialBar = () => {
    return (
        <Center>
            <Grid grow>
                <Grid.Col span={3}>
                    <a href="https://instagram.com/aidantraboulayy" target="_blank" rel="external noreferrer">
                        <ActionIcon size="xl">
                            <AiFillInstagram size={100} color="rgba(32,38,57,1)"/>  
                        </ActionIcon>
                    </a>
                </Grid.Col>

                <Grid.Col span={3}>
                    <a href="https://linkedin.com/in/aidan-traboulay" target="_blank" rel="external noreferrer">
                        <ActionIcon size="xl">
                            <AiFillLinkedin size={100} color="rgba(32,38,57,1)"/>
                        </ActionIcon>
                    </a>
                </Grid.Col>

                <Grid.Col span={3}>
                    <a href="https://github.com/aidantrabs" target="_blank" rel="external noreferrer">
                        <ActionIcon size="xl">
                            <AiFillGithub size={100} color="rgba(32,38,57,1)"/>
                        </ActionIcon>
                    </a>
                </Grid.Col>

                <Grid.Col span={3}>
                    <a href="#" target="_blank" rel="next noreferrer">
                        <ActionIcon size="xl">
                            <MdOutlineContactPage size={100} color="rgba(32,38,57,1)"/>
                        </ActionIcon>
                    </a>
                </Grid.Col>
            </Grid>
        </Center>
    );
};

export default SocialBar;

// 