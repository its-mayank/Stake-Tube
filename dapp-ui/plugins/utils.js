import attentionABI from './attentionABI'
const Web3 = require('web3')

let metamaskWeb3 = new Web3('http://localhost:8545')
let account = null
let attentionContract
let attentionContractAddress = '0xc148153640d70d3cb3d410a2f2303103fe43da20' // Paste Contract address here

export function web3() {
  return metamaskWeb3
}

export const accountAddress = () => {
  return account
}

export async function setProvider() {
  // TODO: get injected Metamask Object and create Web3 instance
  if (window.ethereum) {
    metamaskWeb3 = new Web3(ethereum);
    try {
      // Request account access if needed
      await ethereum.enable();
    } catch (error) {
      // User denied account access...
    }
  }
  else if (window.web3) {
    metamaskWeb3 = new Web3(web3.currentProvider);
  }
  account = await metamaskWeb3.eth.getAccounts()
}


function getattentionContract() {
  // TODO: create and return contract Object
  attentionContract = attentionContract || new metamaskWeb3.eth.Contract(attentionABI.abi, attentionContractAddress)
  return attentionContract

}


export async function postProperty(name, description) {
  // TODO: call Attention.addvideo
  const prop = await getattentionContract().methods.addVideo(name, description).send({
    from: account[0]
  })
  alert('Video added sucessfully ')
}

export async function bookProperty(videoId) {
  // TODO: call attention.rentSpace
  const prop = await getattentionContract().methods.videoEarnings(videoId).send({
    from: account[0],
    value: 1,
  })
  alert('Paid Successfully')
}

export async function fetchAllProperties() {
  // TODO: call attention.propertyId

  const totalVideos = await getattentionContract().methods.videoNos().call()
  //
  // // iterate till property Id
     const videos = []
  for (let i = 0; i < totalVideos; i++) {
    const p = await attentionContract.methods.videos(i).call()
    videos.push({
      id: i,
      name: p.name,
      description: p.description,
      users: p.users
    })

  }
  return videos
  //push each object to properties array
}
