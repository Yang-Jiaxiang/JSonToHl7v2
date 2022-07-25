module.exports = {
    MSH: {
        Encoding_Characters: "^~\\&", //編碼符號
        Sending_Application: "OM_RAD_OF", //發送申請
        Sending_Facility: "IHE", //發送設施
        Receiving_Application: "DCM4CHEE", //接收申請
        Receiving_Facility: "CYLIEN", //接收設施
        Date_Time: "20220523170000", //時間
        Security: " ", //安全
        Message_Type: {
            Message_Type: "ORM",
            Trigger_Event: "O01",
        },
        Message_Control_Id: "20220623140000", //訊息控制ID
        Processing_Id: "P", //處理ID
        Version_Id: "2.3", //版本ID
        Sequence_Number: "", //序號
        Continuation_Pointer: "", //續訊指標
        Accept_Acknowledgement_Type: "", //接受證明類型
        Application_Acknowledgement_Type: "", //申請證明類型
        Country_Code: "", //國家代碼
        Character_Set: "8859/1", //字符集
        Principal_Language_of_Message: "", //信息的主要語言
    },
};
