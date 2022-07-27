module.exports = {
    MSH: {
        Encoding_Characters: "^~\\&",
        Sending_Application: "OM_RAD_OF",
        Sending_Facility: "IHE",
        Receiving_Application: "DCM4CHEE",
        Receiving_Facility: "CYLIEN",
        Date_Time: "20220523170000",
        Security: "",
        Message_Type: [
            {
                segment: "Message_Type",
                value: "ORM",
            },
            {
                segment: "Trigger_Event",
                value: "O01",
            },
        ],
        Message_Control_Id: "20220623140000",
        Processing_Id: "P",
        Version_Id: "2.3.1",
        Sequence_Number: "",
        Continuation_Pointer: "",
        Accept_Acknowledgement_Type: "",
        Application_Acknowledgement_Type: "",
        Country_Code: "",
        Character_Set: "8859/1",
        Principal_Language_of_Message: "",
    },
    PID: {
        External_ID: [
            {
                segment: "ID",
                value: "1234567",
            },
            { segment: "Check_Digit", value: "4" },
            {
                segment: "Code_Identifying_The_Check_Digit_Scheme_Employed",
                value: "M11",
            },
            {
                segment: "Assigning_Authority",
                value: "ADT01",
            },
            { segment: "Identifier_Type_Code", value: "MR" },
            {
                segment: "Assigning_Facility",
                value: "University Hospital",
            },
        ],
        Patient_Name: [
            { segment: "Patient_Name", value: "Smith" },
            {
                segment: "Given_Name",
                value: "John",
            },
            { segment: "Middle_Initial_or_Name", value: "J" },
            { segment: "Suffix", value: "III" },
            { segment: "Prefix", value: "DR" },
            {
                segment: "Degree",
                value: "PHD",
            },
            {
                segment: "Name_Type_Code",
                value: "L",
            },
        ],
        Date_of_Birth: "20010412170000",
        Sex: "M",
        Patient_Address: [
            { segment: "Street_Address", value: "1234 Easy St." },
            { segment: "Other_Designation", value: "Ste. 123" },
            { segment: "City", value: "San Francisco" },
            { segment: "State_or_Province", value: "CA" },
            { segment: "Zip_or_Postal_Code", value: "94123" },
            { segment: "Country", value: "USA" },
            { segment: "Address_Type", value: "B" },
            { segment: "County_parish_Code", value: "SF" },
        ],
        Phone_Number_Home: [
            {
                segment: "Telephone_Number",
                value: "(415)555-3210",
            },
            {
                segment: "Telecommunication_Use_Code",
                value: "ORN",
            },
            {
                segment: "Telecommunication_Equipment_Type",
                value: "FX",
            },
        ],
        Primary_Language: [
            {
                segment: "Identifier",
                value: "F-11380",
            },
            {
                segment: "Text",
                value: "CREATININE",
            },
            {
                segment: "Name_of_Coding_System",
                value: "I9",
            },
            {
                segment: "Alternate_Identifier",
                value: "2148-5",
            },
            {
                segment: "Alternate_Text",
                value: "CREATININE",
            },
            {
                segment: "Name_Of_Alternate_Coding_System",
                value: "LN",
            },
        ],
        Marital_Status: "A",
        Patient_Account_Number: [
            {
                segment: "ID",
                value: "1234567",
            },
            {
                segment: "Check_Digit",
                value: "4",
            },
            {
                segment: "Code_Identifying_The_Check_Digit_Scheme_Employed",
                value: "M11",
            },
            {
                segment: "Assigning_Authority",
                value: "ADT01",
            },
            {
                segment: "Identifier_Type_Code",
                value: "MR",
            },
            {
                segment: "Assigning_Facility",
                value: "University Hospital",
            },
        ],
        Ethnic_Group: "原住民",
        Birth_Place: "TAIWAN",
        Multiple_Birth_Indicator: "N",
        Citizenship: "TAIWAN",
        Veterans_Military_Status: [
            {
                segment: "Identifier",
                value: "F-11380",
            },
            { segment: "Text", value: "CREATININE" },
            {
                segment: "Name_of_Coding_System",
                value: "I9",
            },
            {
                segment: "Alternate_Identifier",
                value: "2148-5",
            },
            {
                segment: "Alternate_Text",
                value: "CREATININE",
            },
            {
                segment: "Name_Of_Alternate_Coding_System",
                value: "LN",
            },
        ],
    },
};
