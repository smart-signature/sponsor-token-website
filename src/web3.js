/* eslint-disable */
import Web3 from 'web3';
import * as config from '@/config';

const web3Provider = window.web3 ? window.web3.currentProvider : null;
const web3 = new Web3(web3Provider ? web3Provider : new Web3.providers.HttpProvider(config.defaultNetwork.rpc));

[web3.eth.defaultAccount] = web3.eth.accounts;
// web3.eth.getTransactionReceiptMined = getTransactionReceiptMined;

web3.eth.getTransactionReceiptMined = function getTransactionReceiptMined(txHash, interval) {
  const self = this;
  const transactionReceiptAsync = function (resolve, reject) {
    self.getTransactionReceipt(txHash, (error, receipt) => {
      if (error) { reject(error); }
      else if (receipt == null) {
        setTimeout(() => transactionReceiptasync (resolve, reject),
          interval ? interval : 500,
        );
      } else { resolve(receipt); }
    });
  };

  if (Array.isArray(txHash)) {
    return Promise.all(txHash.map(
      oneTxHash => self.getTransactionReceiptMined(oneTxHash, interval),
    ));
  }
  if (typeof txHash === 'string') {
    return new Promise(transactionReceiptAsync);
  }
  throw new Error(`Invalid Type: ${txHash}`);
};

export default web3;
