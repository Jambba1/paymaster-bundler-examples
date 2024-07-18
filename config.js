import dotenv from 'dotenv'

// Updating path due to being executed in the examples/x directory
dotenv.config({ path: '../../.env' })

export default {
    "rpc_url": process.env.RPC_URL,
    "private_key": process.env.PRIVATE_KEY,
    "account_type": process.env.ACCOUNT_TYPE || 'simple',
    "contract_address": "0x4e888104F2a10Fc82Ac7fc903cC0f66c472018DC",
    "function_name": "mintTo",
    "entry_point": "0x24b76E6DE17b928dE889c2aDe037e15D452B1291"
}
