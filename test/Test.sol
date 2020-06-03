pragma solidity 0.4.25;

contract Test {
    constructor() public {
        _;
        require(block.timestamp > 0, "123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890");
    }
}
