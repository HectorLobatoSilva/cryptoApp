import abi from './Transactions.json';
export const shortAddress = (address: string) => {
    return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
};
export class Constants {
    static readonly CONTRACT_ABI: Array<any> = abi.abi;
    static readonly CONTRACT_ADDRESS: any = '';
}
