module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "5777", //Match any network id
      }
    },
    solc: {
    //   optimizer: {
    //     enables: true,
    //     runs: 200,
    //   }
    },
    contracts_build_directory: "./src/build/contracts"
}