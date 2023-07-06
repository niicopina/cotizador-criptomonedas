import {useEffect} from 'react'
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

    const [coin, SelectCoins] = useSelectCoins('Elige la moneda', coins)
    useEffect(()=>{
        const consultAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=40&tsym=USD'
            const response = await fetch(url)
            const result = await response.json()
            console.log(result.Data)
        }
        consultAPI()
    },[])
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
