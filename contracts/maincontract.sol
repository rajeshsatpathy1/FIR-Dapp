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

    constructor() public{
        owner = msg.sender;
    }

    enum Topic {crime, cyber, miscellaneous}
    enum Severity {low, moderate, extreme}
    enum Status {lodged, pending, declined}

    struct Officer {
        address Officer;
        string Name;
        string StationName;
        string StationAddress;
        uint256 Pin;
        uint256 StationCode;
        bool OfficerExists;
    }

    struct FIR {
        address Compliant;
        string Name;
        string Adhar;        
        string Details;
        uint256 StationCode;
        Topic topic;
        Severity severity;
        Status status;
    }

    mapping (address => Officer) public AddressToOfficer;
    mapping (address => FIR) private AddressToFir;

    modifier OwnerOnly(address _account){
        require (_account == owner, "Unauthorize access!");
        _;
    }

    function InitializeOfficerAccount (
            address _account,
            string memory _Name,
            string memory _StationName,
            string memory _StationAddress,
            uint256 _Pin,
            uint256 _StationCode
        ) public OwnerOnly(msg.sender) {
            bool exists = true;
            AddressToOfficer[_account] = Officer( _account, _Name, _StationName, _StationAddress, _Pin, _StationCode, exists);
    }

    modifier AuthorizeOfficerOnly(address _officer, address _compliant){
        require(AddressToOfficer[_officer].OfficerExists == true, "Unauthorize access!");
        require(AddressToFir[_compliant].StationCode == AddressToOfficer[_officer].StationCode, "Unathorize access!");
        _;
    }

     event FirComplain (
        address indexed _From,
        string _Name,
        string indexed _Adhar,
        string _details,
        Status _status
    );

    function PlaceFir (
        string memory _Name,
        string memory _Adhar,
        string memory _Details,
        uint256 _StationCode,
        Topic _topic,
        Severity _severity
    ) public {
        Status _status = Status.pending;
        AddressToFir[msg.sender] = FIR(msg.sender, _Name, _Adhar, _Details, _StationCode, _topic, _severity, _status);
        emit FirComplain(msg.sender, _Name, _Adhar, _Details, _status);
    }

    function ApproveDeclineFir (address _compliant, bool _consent) public AuthorizeOfficerOnly(msg.sender, _compliant) {
        if(_consent){
            AddressToFir[_compliant].status = Status.lodged;
        } else {
            AddressToFir[_compliant].status = Status.declined;
        }

        emit FirComplain(AddressToFir[_compliant].Compliant, AddressToFir[_compliant].Name, AddressToFir[_compliant].Adhar, AddressToFir[_compliant].Details, AddressToFir[_compliant].status);
        delete AddressToFir[_compliant];
    }
}