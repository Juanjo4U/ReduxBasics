import React from "react";
import { Text, Button } from "native-base";
import styled from "styled-components";

const Wrapper = styled.View`
    flex:1;
    backgroundColor: gray;
    justifyContent: space-around;
    alignItems: center;
    borderRadius:10
`

const Title = styled.Text`
    font-size: ${props => props.fontSize ? props.fontSize : 15};
    color: ${props => props.color};
    textAlign: center;
`

const Input = styled.TextInput`
    backgroundColor: white;
    width:60%;
    borderRadius:10;
    textAlign: center;
`
// se optiene como parametros de entrada el "mapStateToProps" y el "mapDispatchtoProps" gracias a los containers de redux
// "txtTitle" por parte de "mapStateToProps" y la funcion "Greeting" por parte "mapDispatchtoProps"
export default ({ txtTitle, Greeting }) => {
    const [name, setName] = React.useState();
    return (
        <Wrapper>
            <Title fontSize={20} color={'white'}>
                {txtTitle}
        </Title>
            <Input placeholder = 'introduce tu nombre'
                onChangeText={txt => setName(txt)}
            />
            <Button
                onPress={_ => Greeting(name)}
            >
                <Text>Press</Text>
            </Button>
        </Wrapper>
    )
}