// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

import "@intmax/interoperability-contracts/contracts/OfferManager.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Timers.sol";
import "./VoteToken.sol";

contract SimpleIntmaxBridge is Context {
    OfferManagerInterface _offerManagerInterface;
    VoteToken _voteToken;

    constructor(address offerManagerInterface, address voteToken) {
        _offerManagerInterface = OfferManagerInterface(offerManagerInterface);
        _voteToken = VoteToken(voteToken);
    }

    function withdraw() public {}
}
