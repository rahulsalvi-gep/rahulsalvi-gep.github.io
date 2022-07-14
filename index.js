const data = [
    {
        "bpc": "20210511",
        "bpmEngineId": "2c63be3a-ca7e-424c-9b82-23b2ee9bbb45",
        "event": {
            "appId": 445,
            "documentEntity": "leoorder",
            "eventId": "e8ca675a-31cf-47ab-93ee-76d3a574fcd7",
            "eventName": "leo-order-save-dm",
            "isActive": true,
            "onPre": false,
            "subtype": null
        },
        "eventConfigurationId": "e50f258d-7617-4753-861d-93b49d34d269",
        "eventConfigurationType": "Camunda",
        "eventId": "e8ca675a-31cf-47ab-93ee-76d3a574fcd7",
        "eventMoment": 2,
        "isActive": true,
        "isSync": true,
        "messageName": "",
        "processName": "leo-order-save-dm",
        "sequence": 1,
        "subtype": "SupplierOrder",
        "version": 0
    },
    {
        "bpc": "20210511",
        "businessCase": null,
        "documentGroup": "leoorder",
        "event": {
            "appId": 445,
            "documentEntity": "leoorder",
            "eventId": "e8ca675a-31cf-47ab-93ee-76d3a574fcd7",
            "eventName": "leo-order-save-dm",
            "isActive": true,
            "onPre": false,
            "subtype": null
        },
        "eventConfigurationId": "42bf402f-ace3-4113-bbf6-fe123155df91",
        "eventConfigurationType": "Rule",
        "eventId": "e8ca675a-31cf-47ab-93ee-76d3a574fcd7",
        "eventMoment": 1,
        "eventTrigger": "leo-order-save",
        "executeAllRules": true,
        "isActive": true,
        "isSync": true,
        "ruleEngineConfigurationId": "2ad3e274-1a1d-4243-aba0-b856c1afe702",
        "scope": null,
        "sequence": 1,
        "subtype": "SupplierOrder",
        "version": 1
    }
];

var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

data.forEach(d => {
    console.log(d);
    // Insert a row at the end of table
    let newRow = tbodyRef.insertRow();

    let newCell = newRow.insertCell();
    let newText = document.createTextNode(d["bpc"]);
    newCell.appendChild(newText);

    let newCell2 = newRow.insertCell();
    if (!d["documentGroup"]) {
        newCell2.style.backgroundColor = "red";
    }

    let newText2 = document.createTextNode(d["documentGroup"]);

    newCell2.appendChild(newText2);

    let newCell3 = newRow.insertCell();
    let newText3 = document.createTextNode(d["event"]["eventName"]);
    newCell3.appendChild(newText3);

    let newCell4 = newRow.insertCell();
    let newText4 = document.createTextNode(d["event"]["subtype"]);
    newCell4.appendChild(newText4);


});
