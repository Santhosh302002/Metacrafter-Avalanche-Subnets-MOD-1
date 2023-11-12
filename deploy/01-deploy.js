// const { getContractAddress } = require("ethers/lib/utils")
const { network, run } = require("hardhat")
require("dotenv").config()

module.exports = async ({ deployments, getNamedAccounts }) => {
    const { deployer } = await getNamedAccounts()
    const { deploy, log } = deployments
    const chainId = network.config.chainId
    // console.log(chainId);

    if (chainId === 31337) {

    }
    else {
        // if (chainId === 11155111) {

        // }
        // if (chainId === 5) {
        //     priceFeedAddress = process.env.GOERLI_PRICEFEED_URL
        // }
    }
    const erc20 = await deploy("ERC20", {
        from: deployer,
        log: true,
        args: []
    });
    console.log(erc20.address)
    const Vault = await deploy("Vault", {
        from: deployer,
        log: true,
        args: [erc20.address]
    }
    )
    if (chainId === 5 && process.env.GOERLI_PRICEFEED_URL) {
        await verify(Vault.address, [erc20.address])
    }
    else if (chainId === 11155111 && process.env.SEPOLIR_PRICEFEED_URL) {
        await verify(Vault.address, [erc20.address])
    }
    else if (chainId === 43113 && process.env.SNOWTRACE_API_KEY) {
        await verify(Vault.address, [erc20.address])
    }
}

const verify = async (contractAddress, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified!")
        } else {
            console.log(e)
        }
    }
}

module.exports.tags = ['all', 'Vault'];