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
                        <ActionIcon size="xl" variant="transparent" color="btn-color.6">
                            <AiFillInstagram size={100}/>  
                        </ActionIcon>
                    </a>
                </Grid.Col>

                <Grid.Col span={3}>
                    <a href="https://linkedin.com/in/aidan-traboulay" target="_blank" rel="external noreferrer">
                        <ActionIcon size="xl" variant="transparent" color="btn-color.6">
                            <AiFillLinkedin size={100}/>
                        </ActionIcon>
                    </a>
                </Grid.Col>

                <Grid.Col span={3}>
                    <a href="https://github.com/aidantrabs" target="_blank" rel="external noreferrer">
                        <ActionIcon size="xl" variant="transparent" color="btn-color.6">
                            <AiFillGithub size={100}/>
                        </ActionIcon>
                    </a>
                </Grid.Col>

                <Grid.Col span={3}>
                    <a href=".\Aidan_Traboulay_Resume.pdf" target="_blank" rel="next noreferrer">
                        <ActionIcon size="xl" variant="transparent"  color="btn-color.6">
                            <MdOutlineContactPage size={100}/>
                        </ActionIcon>
                    </a>
                </Grid.Col>
            </Grid>
        </Center>
    );
};

export default SocialBar;

// 