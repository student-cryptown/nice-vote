// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

import "@intmax/interoperability-contracts/contracts/OfferManager.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Timers.sol";
import "./VoteToken.sol";

contract SimpleVote is Context {
    OfferManagerInterface _offerManagerInterface;
    VoteToken _voteToken;

    //TODO: optimization
    struct SimpleProposal {
        uint256 voteStart;
        uint256 voteEnd;
        string description;
        string[] voteOptions; //E.g: ["yes", "no", "abstain"]
        uint256[] voteCount; //E.g: [yes, no, abstain]
    }
    event ProposalCreated(
        bytes32 indexed proposalHash,
        uint256 voteStart,
        uint256 voteEnd,
        string description,
        string[] voteOptions
    );

    bytes32[] public proposalHashes;
    mapping(bytes32 => SimpleProposal) public proposals;

    constructor(address offerManagerInterface, address voteToken) {
        _offerManagerInterface = OfferManagerInterface(offerManagerInterface);
        _voteToken = VoteToken(voteToken);
    }

    function hashProposal(
        uint256 voteStart,
        uint256 voteEnd,
        string memory description
    ) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(voteStart, voteEnd, description));
    }

    //TODO: fix this
    function getProposal(bytes32 proposalHash) public view returns (SimpleProposal memory) {
        return proposals[proposalHash];
    }

    function getProposalHashes(uint256 start, uint256 end) public view returns (bytes32[] memory) {
        bytes32[] memory hashes = new bytes32[](end - start);
        for (uint256 i = start; i < end; i++) {
            hashes[i - start] = proposalHashes[i];
        }
        return hashes;
    }

    function isVoting(bytes32 proposalHash) public view returns (bool) {
        return
            proposals[proposalHash].voteStart <= block.timestamp &&
            proposals[proposalHash].voteEnd >= block.timestamp;
    }

    function propose(
        uint256 voteEnd,
        string calldata description,
        string[] calldata voteOptions
    ) public {
        uint256 voteStart = block.timestamp;
        uint256[] memory voteCount = new uint256[](voteOptions.length);
        bytes32 proposalHash = hashProposal(voteStart, voteEnd, description);
        SimpleProposal memory proposal = SimpleProposal(
            voteStart,
            voteEnd,
            description,
            voteOptions,
            voteCount
        );
        proposalHashes.push(proposalHash);
        proposals[proposalHash] = proposal;
        emit ProposalCreated(proposalHash, voteStart, voteEnd, description, voteOptions);
    }

    function vote(bytes32 proposalHash, uint256 voteCount, uint256 voteOption) public {
        require(isVoting(proposalHash), "Vote is not active");
        require(voteOption < proposals[proposalHash].voteOptions.length, "Invalid vote option");
        _voteToken.burn(_msgSender(), voteCount);
        proposals[proposalHash].voteCount[voteOption] += voteCount;
    }
}
