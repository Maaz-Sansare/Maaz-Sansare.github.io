var group__pcf__mcal__peripherals__can =
[
    [ "CanFilterConfig_t", "struct_can_filter_config__t.html", [
      [ "id", "struct_can_filter_config__t.html#ad4afed2850fb101e8b715c4525f1899a", null ],
      [ "frameType", "struct_can_filter_config__t.html#adcbf4b1ee3a06e458c64b3b2d65c4682", null ],
      [ "frameFormat", "struct_can_filter_config__t.html#a61e24a927b4626f4a43ce696ff5a2517", null ],
      [ "mode", "struct_can_filter_config__t.html#a40996f334d6be26323e13ee1721695e5", null ],
      [ "ids", "struct_can_filter_config__t.html#a908b600e602a13caa162f09eec28f0cf", null ],
      [ "mask", "struct_can_filter_config__t.html#a075b86ee601947f16f13199ae11f5567", null ],
      [ "size", "struct_can_filter_config__t.html#af50defcdef16eda6c54cfcb6fe39ddce", null ],
      [ "priority", "struct_can_filter_config__t.html#a3a8d92fa518f55ac6e149a781a5e20fb", null ]
    ] ],
    [ "CanMessageHeader_t", "struct_can_message_header__t.html", [
      [ "frameFormat", "struct_can_message_header__t.html#ae1045ffbfb9e279f848400a386a859fd", null ],
      [ "id", "struct_can_message_header__t.html#a758f99d3428bf840670a344a2f68c33c", null ],
      [ "frameType", "struct_can_message_header__t.html#a49c2539e09e1a65be8115c02267d31c0", null ],
      [ "length", "struct_can_message_header__t.html#a0a18a06f08f0d96824801a2c1082de40", null ]
    ] ],
    [ "CanMessage_t", "struct_can_message__t.html", [
      [ "header", "struct_can_message__t.html#ae92a96753b176fadd4cdebf6e824199e", null ],
      [ "data", "struct_can_message__t.html#ae4485da5d82bf27bb2e899775974635b", null ]
    ] ],
    [ "CanConfig_t", "struct_can_config__t.html", [
      [ "id", "struct_can_config__t.html#a3f550a67883b60b0541077f53c6c2419", null ],
      [ "baudrate", "struct_can_config__t.html#a051cb4eaab18bfd4d616caadc1636dc9", null ],
      [ "txBufferSize", "struct_can_config__t.html#a75c86271c0250dca72758d3622bee149", null ],
      [ "rxBufferSize", "struct_can_config__t.html#a450f0c64ecafc2229da75ef1ff48b63d", null ],
      [ "handleErrors", "struct_can_config__t.html#a30d6675142a7d3593969090ac77dbcf6", null ],
      [ "disableAutoReTx", "struct_can_config__t.html#adfa54cc375c53430b5b3761ffca812e2", null ],
      [ "ErrorHandler", "struct_can_config__t.html#a8c5bf6361252ddece39706bcf94f0f38", null ],
      [ "hardwareCfg", "struct_can_config__t.html#a95bd34386b16d7e7b6ba03daba5738e6", null ]
    ] ],
    [ "PCF_ENTITY_TYPE_CAN", "group__pcf__mcal__peripherals__can.html#ga444efed475bde98354dac6386681a142", null ],
    [ "Can_t", "group__pcf__mcal__peripherals__can.html#ga5906655aa583f9072ae30033b406f4b4", null ],
    [ "canId_t", "group__pcf__mcal__peripherals__can.html#ga4ffb679dc6bf42351adf6fd216620028", null ],
    [ "canFilterMask_t", "group__pcf__mcal__peripherals__can.html#ga6d7abbc7c7875f609881d0deba9159ed", null ],
    [ "CanErrorCallback_fp", "group__pcf__mcal__peripherals__can.html#ga9f346b1218640dee71bfdf7f70f07cae", null ],
    [ "EnCanFrameFormat_t", "group__pcf__mcal__peripherals__can.html#gab84c96ce766c9190fde17697f8314e8b", [
      [ "enCanFrameFormat_Standard", "group__pcf__mcal__peripherals__can.html#ggab84c96ce766c9190fde17697f8314e8ba739191309b9eb46f2b76e1388a0ed40d", null ],
      [ "enCanFrameFormat_Extended", "group__pcf__mcal__peripherals__can.html#ggab84c96ce766c9190fde17697f8314e8ba1048af65f733b62ba8377ad41bfebf7e", null ]
    ] ],
    [ "EnCanDataLength_t", "group__pcf__mcal__peripherals__can.html#ga7c4dcc7493db571360d069abc98b9507", [
      [ "enCanDataLength_0byte", "group__pcf__mcal__peripherals__can.html#gga7c4dcc7493db571360d069abc98b9507a539cc87bce9b334617c951d388956c80", null ],
      [ "enCanDataLength_1byte", "group__pcf__mcal__peripherals__can.html#gga7c4dcc7493db571360d069abc98b9507af3532b75398cf3b72d8c3cc0ab7ea2bd", null ],
      [ "enCanDataLength_2byte", "group__pcf__mcal__peripherals__can.html#gga7c4dcc7493db571360d069abc98b9507a3d42f9fb5b80ed3efcaac2d2a9a44d3e", null ],
      [ "enCanDataLength_3byte", "group__pcf__mcal__peripherals__can.html#gga7c4dcc7493db571360d069abc98b9507ac2268167b10ac717d6316a7c84a63011", null ],
      [ "enCanDataLength_4byte", "group__pcf__mcal__peripherals__can.html#gga7c4dcc7493db571360d069abc98b9507aa35cbb7b1a8e88d4af5dba3b646863fe", null ],
      [ "enCanDataLength_5byte", "group__pcf__mcal__peripherals__can.html#gga7c4dcc7493db571360d069abc98b9507ac2b5c6cfca37657f7b017af6e410a3f2", null ],
      [ "enCanDataLength_6byte", "group__pcf__mcal__peripherals__can.html#gga7c4dcc7493db571360d069abc98b9507a39573b99160a38a07f4bf524dde7b8ec", null ],
      [ "enCanDataLength_7byte", "group__pcf__mcal__peripherals__can.html#gga7c4dcc7493db571360d069abc98b9507a1bda67674bd345e1197015bd1174f555", null ],
      [ "enCanDataLength_8byte", "group__pcf__mcal__peripherals__can.html#gga7c4dcc7493db571360d069abc98b9507a91cb3821c05caae37194dfe2fa94e55f", null ]
    ] ],
    [ "EnCanState_t", "group__pcf__mcal__peripherals__can.html#ga04e47cbd9d2912847c58c7112f2150ec", [
      [ "enCanState_Sleep", "group__pcf__mcal__peripherals__can.html#gga04e47cbd9d2912847c58c7112f2150eca13b4b58b5d6fe74a6b54d381eff74841", null ],
      [ "enCanState_Init", "group__pcf__mcal__peripherals__can.html#gga04e47cbd9d2912847c58c7112f2150ecab89db2be1a82d328a0bc8e1976345cea", null ],
      [ "enCanState_Running", "group__pcf__mcal__peripherals__can.html#gga04e47cbd9d2912847c58c7112f2150eca957fe58621e69e01b60a0f8650bbf7f9", null ],
      [ "enCanState_Test", "group__pcf__mcal__peripherals__can.html#gga04e47cbd9d2912847c58c7112f2150eca2b92b5c58af01f068f288bc39c72074b", null ],
      [ "enCanState_Error", "group__pcf__mcal__peripherals__can.html#gga04e47cbd9d2912847c58c7112f2150eca213fcff59dd1c18e896176b539832b18", null ]
    ] ],
    [ "EnCanErrorState_t", "group__pcf__mcal__peripherals__can.html#ga65f09eaaefe7b178478794196c5ccfc8", [
      [ "enCanErrorState_Warning", "group__pcf__mcal__peripherals__can.html#gga65f09eaaefe7b178478794196c5ccfc8ad90eae31b9c409d3e3a93bb9cfb50638", null ],
      [ "enCanErrorState_Error", "group__pcf__mcal__peripherals__can.html#gga65f09eaaefe7b178478794196c5ccfc8a27aa9299253eef0565fa045e3ecf6ba4", null ],
      [ "enCanErrorState_Busoff", "group__pcf__mcal__peripherals__can.html#gga65f09eaaefe7b178478794196c5ccfc8a7f5ae8c8d5957378ba46023e39d4fc00", null ]
    ] ],
    [ "EnCanFilterMode", "group__pcf__mcal__peripherals__can.html#ga61b33e1f0bac1541a8c5c3f46e57030e", [
      [ "enCanFilterMode_List", "group__pcf__mcal__peripherals__can.html#gga61b33e1f0bac1541a8c5c3f46e57030ea9d9111d867b0eb22624bb49b45fc24e0", null ],
      [ "enCanFilterMode_Group", "group__pcf__mcal__peripherals__can.html#gga61b33e1f0bac1541a8c5c3f46e57030ea7b99f5e6c0330a1886139a7286a7d19e", null ],
      [ "enCanFilterMode_Mask", "group__pcf__mcal__peripherals__can.html#gga61b33e1f0bac1541a8c5c3f46e57030eaf487c90eeac56ef00b0bbc8542b63035", null ],
      [ "enCanFilterMode_AllowAll", "group__pcf__mcal__peripherals__can.html#gga61b33e1f0bac1541a8c5c3f46e57030ea5539fccc60d029aef1245f288e8ea742", null ]
    ] ],
    [ "EnCanFrameType_t", "group__pcf__mcal__peripherals__can.html#ga5fce28cf1c8844d4b27f6898480f1a2a", [
      [ "enCanFrameType_UnknownFrame", "group__pcf__mcal__peripherals__can.html#gga5fce28cf1c8844d4b27f6898480f1a2aab13b55f757aea70b31aa013c2be2bfa8", null ],
      [ "enCanFrameType_DataFrame", "group__pcf__mcal__peripherals__can.html#gga5fce28cf1c8844d4b27f6898480f1a2aa28a0aea8d3d44f7b8bc8f72ee734a2d2", null ],
      [ "enCanFrameType_RemoteFrame", "group__pcf__mcal__peripherals__can.html#gga5fce28cf1c8844d4b27f6898480f1a2aa620cca22f09e20f6555d1fd91fc5a16a", null ]
    ] ],
    [ "pcf_Can_getEntityType", "group__pcf__mcal__peripherals__can.html#ga4a18031b908e6a2392263a6b79687cfd", null ],
    [ "pcf_Can_getTotal", "group__pcf__mcal__peripherals__can.html#ga69ec0a87b39f84ac79a8737f7c3e1436", null ],
    [ "pcf_Can_getAvailable", "group__pcf__mcal__peripherals__can.html#gaea77ab6907694aae3af8a0078ba28cfb", null ],
    [ "pcf_Can_new", "group__pcf__mcal__peripherals__can.html#ga48d9b2d97045e6a72da5b0c19b514765", null ],
    [ "pcf_Can_delete", "group__pcf__mcal__peripherals__can.html#gaae6c26f4804efce6041a75728e9ba3ba", null ],
    [ "pcf_Can_setPriority", "group__pcf__mcal__peripherals__can.html#gadcc34e3ba144641abbad060f9669e08f", null ],
    [ "pcf_Can_getPriority", "group__pcf__mcal__peripherals__can.html#ga0ecd9099cc7ec1f5a18037ca10544c30", null ],
    [ "pcf_Can_setState", "group__pcf__mcal__peripherals__can.html#ga7cfe1c7e4f5b37b76823ecc2b8db71d9", null ],
    [ "pcf_Can_getState", "group__pcf__mcal__peripherals__can.html#gac8045333c1a0dbeb366c9e7dcb5c04ed", null ],
    [ "pcf_Can_isAutoReTransmitDisabled", "group__pcf__mcal__peripherals__can.html#ga0074649d51c3d3688b8a64a55e25479b", null ],
    [ "pcf_Can_setFilter", "group__pcf__mcal__peripherals__can.html#ga0f41713c2a7461d2728c0c3c4607151e", null ],
    [ "pcf_Can_removeFilter", "group__pcf__mcal__peripherals__can.html#ga8598653bfe119b6ed622d8f13a703f28", null ],
    [ "pcf_Can_write", "group__pcf__mcal__peripherals__can.html#ga740e014857157a3c0a93b5dbf867e99d", null ],
    [ "pcf_Can_read", "group__pcf__mcal__peripherals__can.html#gaefe5046adc8d9a064c364709af1ad32a", null ],
    [ "pcf_Can_getRxBufferCount", "group__pcf__mcal__peripherals__can.html#gabecd1d3ab7bc52a0597f858747c999ba", null ],
    [ "pcf_Can_getTxBufferCount", "group__pcf__mcal__peripherals__can.html#ga3bf3f8d3c3c2f9ae8bf5fb158213e3be", null ],
    [ "pcf_Can_rxBufferFlush", "group__pcf__mcal__peripherals__can.html#ga571447884434f04deada3fe968a8dc41", null ],
    [ "pcf_Can_txBufferFlush", "group__pcf__mcal__peripherals__can.html#gad1f8aac90fc385b0931dfa9e65274eb6", null ],
    [ "pcf_Can_getTxErrCounter", "group__pcf__mcal__peripherals__can.html#gac240bce9c26f6660690f709dee2d0bab", null ],
    [ "pcf_Can_getRxErrCounter", "group__pcf__mcal__peripherals__can.html#gafad6b7585c70e162d36f643434c8f500", null ],
    [ "pcf_Can_getBaudrate", "group__pcf__mcal__peripherals__can.html#gaabd44057cdde257e3fa863f12abdb5de", null ],
    [ "pcf_Can_getRxBufferSize", "group__pcf__mcal__peripherals__can.html#ga447f19ad1edcd663953068647e48821d", null ],
    [ "pcf_Can_getTxBufferSize", "group__pcf__mcal__peripherals__can.html#gafce9057fb7001d2deeb4da7a8d92c53a", null ],
    [ "pcf_Can_customCommand", "group__pcf__mcal__peripherals__can.html#ga92d70c2ada08a72973ae8069db486f59", null ]
];