import axios from 'axios'
import { newProduce, Produce} from "../types"
import authenticationHelper from '../utils/authenticationHelper'

const baseUrl = 'http://localhost:3001/api/produce'

const addProduce = async (newProduce: newProduce): Promise<Produce[]> => {
    const res = await axios.post(baseUrl, newProduce,
        {headers: {
          Authorization: authenticationHelper.getAuthenticationHeaders().headers.Authorization
        }})
    return [res.data]
}

const getProduce = async (): Promise<Produce[]> => {
    const res = await axios.get(`${baseUrl}/`)
    return res.data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { addProduce, getProduce }