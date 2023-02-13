import axios from "axios";
import getMock from '../mock/mock.js'

const useLocalMock = process.env.NODE_ENV === 'production'

const mockData = getMock()

const mockRequest = (realRequest, mockData) => {
    if (useLocalMock) {
        return new Promise((resolve) => setTimeout(() => resolve({ data: mockData}), 300))
    } else {
        return realRequest()
    }
}

export const getInstances = () => mockRequest(() =>  axios.get('http://localhost:3004/instances'), mockData.instances)
export const getHistory = () => mockRequest(() => axios.get('http://localhost:3004/history'), mockData.history)
