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

    let txn;
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Mintou NFT #1");

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Mintou NFT #2");

    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Mintou NFT #3");

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #4");

    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();
    txn = await gameContract.attackBoss();
    await txn.wait();
    txn = await gameContract.attackBoss();
    await txn.wait();


    console.log("Fim do deploy e mint!");
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
