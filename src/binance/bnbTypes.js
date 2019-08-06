/**
 * Created by paul on 8/26/17.
 */
// @flow

// export type EthereumInitOptions = {
//   blockcypherApiKey?: string,
//   etherscanApiKey?: string,
//   infuraProjectId?: string
// }

export type BinanceSettings = {
  binanceApiServers: Array<string>
  // blockcypherApiServers: Array<string>,
  // superethServers: Array<string>,
  // iosAllowedTokens: { [currencyCode: string]: boolean }
}

export type BinanceApiTransaction = {
  txHash: string,
  blockHeight: number,
  txType: string,
  timeStamp: string,
  fromAddr: string,
  toAddr: string,
  value: string,
  txAsset: string,
  txFee: string,
  txAge: number,
  orderId: null | string,
  code: number,
  data: null | string,
  confirmBlocks: number,
  memo: string
}

type EthereumFeesGasLimit = {
  regularTransaction: string,
  tokenTransaction: string
}

export type EthereumFeesGasPrice = {
  lowFee: string,
  standardFeeLow: string,
  standardFeeHigh: string,

  // The amount of wei which will be charged the standardFeeLow
  standardFeeLowAmount: string,

  // The amount of wei which will be charged the standardFeeHigh
  standardFeeHighAmount: string,
  highFee: string
}

export type EthereumFee = {
  gasLimit: EthereumFeesGasLimit,
  gasPrice?: EthereumFeesGasPrice
}

export type EthereumFees = {
  [address: string]: EthereumFee
}

export type EthereumCalcedFees = {
  gasPrice: string,
  gasLimit: string
}

export type EtherscanTransaction = {
  hash: string,
  blockNumber: string,
  timeStamp: string,
  gasPrice: string,
  gasUsed: string,
  value: string,
  nonce: string,
  from: string,
  to: string,
  gas: string,
  gasPrice: string,
  gasUsed: string,
  cumulativeGasUsed: string,
  isError: string,
  contractAddress?: string,
  tokenName?: string,
  tokenSymbol?: string,
  tokenDecimal?: string
}

export type BinanceTxOtherParams = {
  from: Array<string>,
  to: Array<string>,
  // gas: string,
  // gasPrice: string,
  // gasUsed: string,
  // cumulativeGasUsed: string,
  errorVal: number,
  tokenRecipientAddress: string | null,
  data?: string | null
}

export type EthereumWalletOtherData = {
  nextNonce: string,
  unconfirmedNextNonce: string,
  networkFees: EthereumFees
}