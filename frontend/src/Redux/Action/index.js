import { TOKEN } from "../ActionTypes"
const Token={
    addToken:(data)=>({
        type:TOKEN.GETTOKEN,
        payload:data
    }),
    removeToken:()=>({
        type:TOKEN.REMOVETOKEN
    })
}
export default Token