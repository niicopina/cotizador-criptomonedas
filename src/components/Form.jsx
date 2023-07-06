import React from 'react'
import styled from '@emotion/styled'
import useSelectCoins from '../hooks/useSelectCoins'
import { coins } from '../data/coins'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 30px;
    transition: background-color .3s ease;
    &:hover{
        background-color: #7A7BFE;
        cursor: pointer;
    }
`
const Form = () => {

    const [SelectCoins] = useSelectCoins('Elige la moneda', coins)
    
    return (
        <form>
            <SelectCoins />
            <InputSubmit 
                type='submit' 
                value="Cotizar" 
            />
        </form>
  )
}

export default Form
