// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

import "@intmax/interoperability-contracts/contracts/OfferManagerV2.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Timers.sol";

contract SimpleVote is Context {
    OfferManagerV2 public immutable _offerManager;
    uint256 public immutable _voteIntmaxAsset;

    //TODO: optimization
    struct SimpleProposal {
        address proposer;
        uint256 voteStart;
        uint256 voteEnd;
        string description;
        string[] voteOptions; //E.g: ["yes", "no", "abstain"]
        uint256[] voteCounts; //E.g: [yes, no, abstain]
    }

    event Voted(
        bytes32 indexed proposalHash,
        address indexed voter,
        uint256 votecount,
        uint256 voteOption
    );

    event ProposalCreated(
        bytes32 indexed proposalHash,
        uint256 voteStart,
        uint256 voteEnd,
        string description,
        string[] voteOptions
    );

    bytes32[] private proposalHashes;
    // mapping(bytes32 =>)
    mapping(bytes32 => SimpleProposal) private proposals;

    constructor(address offerManager, uint256 voteIntmaxAsset) {
        _offerManager = OfferManagerV2(offerManager);
        _voteIntmaxAsset = voteIntmaxAsset;
    }

    receive() external payable {}

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
        require(start < end, "Invalid start and end");
        uint256 trueEnd = end > proposalHashes.length ? proposalHashes.length : end;
        bytes32[] memory hashes = new bytes32[](trueEnd - start);
        for (uint256 i = start; i < trueEnd; i++) {
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
            _msgSender(),
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

    function vote(
        bytes32 proposalHash,
        bytes32 voterIntmaxAddress,
        uint256 voteCount,
        uint256 voteOption,
        bytes memory witness
    ) public {
        require(isVoting(proposalHash), "Vote is not active");
        require(voteOption < proposals[proposalHash].voteOptions.length, "Invalid vote option");

        //多分これでいいのか？まるで魔法だぜ
        uint256 offerId = _offerManager.register(
            voterIntmaxAddress,
            _voteIntmaxAsset,
            voteCount,
            address(this),
            bytes32(_voteIntmaxAsset),
            address(0),
            0,
            witness
        );
        _offerManager.activate(offerId);

        proposals[proposalHash].voteCounts[voteOption] += voteCount;
        emit Voted(proposalHash, _msgSender(), voteCount, voteOption);
    }
}
