const maincontractAbi = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "AddressToOfficer",
      "outputs": [
        {
          "name": "Officer",
          "type": "address"
        },
        {
          "name": "Name",
          "type": "string"
        },
        {
          "name": "StationName",
          "type": "string"
        },
        {
          "name": "StationAddress",
          "type": "string"
        },
        {
          "name": "Pin",
          "type": "uint256"
        },
        {
          "name": "StationCode",
          "type": "uint256"
        },
        {
          "name": "OfficerExists",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_From",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_Name",
          "type": "string"
        },
        {
          "indexed": true,
          "name": "_Adhar",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "_details",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "_status",
          "type": "uint8"
        }
      ],
      "name": "FirComplain",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_account",
          "type": "address"
        },
        {
          "name": "_Name",
          "type": "string"
        },
        {
          "name": "_StationName",
          "type": "string"
        },
        {
          "name": "_StationAddress",
          "type": "string"
        },
        {
          "name": "_Pin",
          "type": "uint256"
        },
        {
          "name": "_StationCode",
          "type": "uint256"
        }
      ],
      "name": "InitializeOfficerAccount",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_Name",
          "type": "string"
        },
        {
          "name": "_Adhar",
          "type": "string"
        },
        {
          "name": "_Details",
          "type": "string"
        },
        {
          "name": "_StationCode",
          "type": "uint256"
        },
        {
          "name": "_topic",
          "type": "uint8"
        },
        {
          "name": "_severity",
          "type": "uint8"
        }
      ],
      "name": "PlaceFir",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_compliant",
          "type": "address"
        },
        {
          "name": "_consent",
          "type": "bool"
        }
      ],
      "name": "ApproveDeclineFir",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

export default maincontractAbi;