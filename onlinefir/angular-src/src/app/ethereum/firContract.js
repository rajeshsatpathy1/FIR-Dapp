import { web3 } from './web3';
import maincontractAbi from './maincontractAbi';

export function createContract(contractAddress) {
    return new web3.eth.Contract(maincontractAbi, contractAddress);
}