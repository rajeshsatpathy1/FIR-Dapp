/*

1) Read a lot. Read widely. 
2) Don't jump to conclusions
3) Create systems, not goals
4) Argue with yourself
5) Be willing to change your opinion
6) Write
7) Seek adversity﻿ 

*/

pragma solidity >=0.4.21 <0.6.0;

contract Capstone {
    
    address private owner;

    enum Topic {crime, cyber, miscellaneous}
    enum Severity {low, moderate, extreme}
    enum Status {lodged, pending, declined}
    enum Sex {Male, Female}

    struct FIR {
        string PlaceOfOccurance;
        string Name;
        string Adhar;        
        string Subject;
        string Address;
        string details;
        string Email;
        int256 MobileNo;
        int256 Telephone;
        int8 Age;
        int8 Pin;
        Topic topic;
        Severity severity;
        Status status;
        Sex sex;
    }

    FIR[] public Fir;

    mapping (address => uint256) public AddressToPolicestationcode;
    mapping (uint => address) private FIRToAddress;
    mapping (address => uint) public OfficerToPolicestationcode;

    constructor() public{
        owner = msg.sender;
    }

    modifier OwnerOnly(address _account){
        require (_account == owner, "Unauthorize access!");
        _;
    }

    modifier OfficerOnly(address _account, uint _stationcode){
        require(OfficerToPolicestationcode[_account] == _stationcode, "Unauthorize access!");
        _;
    }

    event FirComplain (
        address indexed _From,
        uint256 indexed _Id,
        string _Name,
        string indexed _Adhar,
        string _Subject,
        string _details
    );

    function InitializeOfficerAccount (address _account) public OwnerOnly(_account) {

    }

    function ApproveDeclineFir (uint _id, bool _consent) public OfficerOnly(msg.sender, OfficerToPolicestationcode[msg.sender]) {
        if(_consent){
            FIR[_id].Fir.Status = Status.lodged;
        } else {
            FIR[_id].Fir.Status = Status.declined;
        }
    }

    function PlaceFir (
        string memory _PlaceOfOccurance,
        string memory _Name,
        string memory _Adhar,
        string memory _Subject,
        string memory _Address,
        string memory _Details,
        string memory _Email,
        int256 _MobileNo,
        int256 _Telephone,
        int8 _Age,
        int8 _Pin,
        Topic _topic,
        Severity _severity,
        Sex _sex
    ) public {
        Status _status = Status.pending;
        uint id = Fir.push(FIR(_PlaceOfOccurance,_Name, _Adhar, _Subject, _Address, _Details, _Email, _MobileNo, _Telephone, _Age, _Pin, _topic, _severity, _status, _sex)) - 1;
        FIRToAddress[id] = msg.sender;
        emit FirComplain(msg.sender, id, _Name, _Adhar, _Subject, _Details);
    }

}