import styled from "styled-components";

export const InputLinhaVerde = styled.TextInput.attrs({
    placeholderTextColor: "#386E17"
})`
    width: 90%;
    height: 51px;
    padding-left: 10px;
    margin-top: 15px;
    background-color: #F5F5F5;

    border-bottom-width: 2px;
    border-bottom-color: #386E17;
    border-radius: 5px;

    font-size: 14px;
    font-family: "Exo2_600SemiBold";
    color: #386E17;
`

export const InputSearch = styled(InputLinhaVerde)`
    align-items: center;
    padding-left: 10px;
`