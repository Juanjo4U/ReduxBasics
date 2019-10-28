import React from 'react';
import styled from "styled-components";
/******¡¡¡¡¡¡Aqui se importa el "container del componente" y NO el componente!!!!!!******/
import Form from '../../Redux/containers/Form/form';
import Test from "../../Redux/containers/Test/test";
// si importas el componente en si, "NO" tendras acceso al "state"

const Wrapper = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`
const MidContainer = styled.View`
    width: 80%;
    height: 250;
    justifyContent: space-around;
`
const Title = styled.Text`
    textAlign: center;
    fontSize: 25;
`

export default ({ welcome }) => {
    return (
        <Wrapper>
            <MidContainer>
                <Title>
                    {welcome}
                </Title>
                <Form />
                <Test />
            </MidContainer>
        </Wrapper>
    )
}
