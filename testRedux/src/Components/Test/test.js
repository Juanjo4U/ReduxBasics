import React from "react";
import { Text } from "native-base";
import styled from "styled-components";

const Wrapper = styled.View`
    justifyContent: center;
    alignItems: center;
`

export default ({ testGreeting }) => {
    return (
        <Wrapper>
            <Text>{testGreeting}</Text>
        </Wrapper>
    )
}