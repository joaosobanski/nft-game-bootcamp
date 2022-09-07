const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
        ["Alex Weiss", "Lara Croft", "Jonah Maiava"],
        [
            "https://i.imgur.com/uRNjVHf.png",
            "https://i.imgur.com/TlYFyPn.jpeg",
            "https://i.imgur.com/JGEKnYU.png",
        ],
        [300, 500, 400], // HP values
        [50, 100, 75], // Attack damage values,
        "Konstantin",
        "https://i.imgur.com/WFGabDy.png",
        1000,
        50
    );
    await gameContract.deployed();
    console.log("Contrato implantado no endereço:", gameContract.address)

};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
//0xF50082106C42c9Bdd2cD7657e44FaB1CB24F1A2a 
// npx hardhat run scripts/deploy.js --network goerli