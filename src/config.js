const BUILD = require('./build/contracts/TodoList.json');

module.exports = {
    TODOLIST_ABI : BUILD.abi,
    TODOLIST_CONTRACT_ADDRESS : BUILD.networks[Object.keys(BUILD.networks)].address
}