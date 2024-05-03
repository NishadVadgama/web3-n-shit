async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  console.log("Account balance:", (await deployer.provider.getBalance(deployer.address)).toString());

  const Token = await ethers.getContractFactory("BEP20Token");
  const token = await Token.deploy();

  console.log("Token address:", token);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});