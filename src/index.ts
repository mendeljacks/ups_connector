export type post_acceptance_audit_pre_check_type = {AcceptanceAuditPreCheckResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, AlertDetail?: {Code: string, Description: string, ElementLevelInformation?: {Level: string, ElementIdentifier?: {Code: string, Value: string, }, }, }, TransactionReference?: {CustomerContext?: string, TransactionIdentifier?: string, }, }, ShipperNumber?: string, Service?: {Code: string, Description?: string, }, RegulationSet?: string, PackageResults?: {PackageIdentifier: string, AccessibleIndicator?: string, EuropeBUIndicator?: string, ChemicalRecordResults?: {ChemicalRecordIdentifier: string, ADRPoints?: string, TransportCategory?: string, TunnelRestrictionCode?: string, ADRUnits?: string, }, }, }, }
/** 
 * The Dangerous Goods API provides the ability to determine what Dangerous Goods (also known as Hazardous Materials) can be carried by UPS.
 * The Dangerous Goods API provides the ability to determine what Dangerous Goods (also known as Hazardous Materials) can be carried by UPS.
 * @example "{\r\n \"AcceptanceAuditPreCheckRequest\": { \r\n \"OriginRecordTransactionTimestamp\": \"Your Origin Record Transaction Timestamp \",\r\n \"Shipment\": {\r\n \"ShipperNumber\": \"Your Shipper Number\",\r\n \"ShipFromAddress\": {\r\n \"AddressLine\": \"Ship From Address Line\",\r\n \"City\": \"Lutherville Timonium\",\r\n \"StateProvinceCode\": \"MD\",\r\n \"PostalCode\": \"21093\",\r\n \"CountryCode\": \"US\"\r\n },\r\n \"ShipToAddress\": {\r\n \"AddressLine\": \"Ship To Address Line\",\r\n \"City\": \"New Milford\",\r\n \"StateProvinceCode\": \"NJ\",\r\n \"PostalCode\": \"07646\",\r\n \"CountryCode\": \"US\"\r\n },\r\n \"Service\": {\r\n \"Code\": \"001\"\r\n },\r\n \"RegulationSet\": \"IATA\",\r\n \"Package\": {\r\n \"PackageIdentifier\": \"1\",\r\n \"PackageWeight\": {\r\n \"Weight\": \"26\",\r\n \"UnitOfMeasurement\": {\r\n \"Code\": \"LBS\"\r\n }\r\n },\r\n \"TransportationMode\": \"PAX\",\r\n \"EmergencyPhone\": \"Your Emergency Phone\",\r\n \"EmergencyContact\": \"Your Emergency Contact\",\r\n \"ChemicalRecord\": {\r\n \"ChemicalRecordIdentifier\": \"1\",\r\n \"ClassDivisionNumber\": \"3\",\r\n \"IDNumber\": \"UN2332\",\r\n \"Quantity\": \"10\",\r\n \"UOM\": \"L\",\r\n \"PackagingInstructionCode\": \"355\",\r\n \"ProperShippingName\": \"Acetaldehyde oxime\",\r\n \"PackagingType\": \"Fiberboard Box\",\r\n \"PackagingGroupType\": \"III\",\r\n \"PackagingTypeQuantity\": \"1\",\r\n \"CommodityRegulatedLevelCode\": \"FR\"\r\n }\r\n }\r\n }\r\n }\r\n}\r\n"
*/
export const post_acceptance_audit_pre_check = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_acceptance_audit_pre_check_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/dangerousgoods/v1/acceptanceauditprecheck`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_a_v_type = {AddressValidationResponse: {Response: {TransactionReference: {CustomerContext?: string, TransactionIdentifier?: string, XpciVersion?: string, ToolVersion?: string, }, ResponseStatusCode: string, ResponseStatusDescription?: string, Error: {ErrorSeverity: string, ErrorCode: string, ErrorDescription?: string, MinimumRetrySeconds?: string, ErrorLocation: {ErrorLocationElementName?: string, ErrorLocationAttributeName?: string, }, ErrorDigest?: string, }, }, AddressValidationResult: {Rank: string, Quality: string, Address: {City: string, StateProvinceCode: string, }, PostalCodeLowEnd: string, PostalCodeHighEnd: string, }, }, }
/** 
 * The UPS Address Validation API's database is updated every month with new address information from USPS.  Address Validation for City, State, Zip is only available for the United States
 * The UPS Address Validation API's database is updated every month with new address information from USPS.  Address Validation for City, State, Zip is only available for the United States
 * @example {"AccessRequest":{"AccessLicenseNumber":"Your Access License Number","UserId":"Your Username","Password":"Your Password"},"AddressValidationRequest":{"Request":{"TransactionReference":{"CustomerContext":"Your Customer Context"},"RequestAction":"AV"},"Address":{"City":"ALPHARETTA","StateProvinceCode":"GA","PostalCode":"30005"}}}
*/
export const post_a_v = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_a_v_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/AV`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_chemical_reference_data_type = {ChemicalReferenceDataResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, TransactionIdentifier?: string, }, }, ChemicalData?: {ChemicalDetail?: {RegulationSet?: string, IDNumber?: string, HazardousMaterialsDescription?: string, ClassDivisionNumber?: string, SubRiskClass?: string, PackagingGroupType?: string, SpecialPermit?: string, TechnicalNameRequiredIndicator?: string, AdditionalShippingInformationRequiredIndicator?: string, TunnelRestrictionCode?: string, TransportCategory?: string, TransportMultiplierQuantity?: string, ChannelTunnelAcceptedIndicator?: string, ChemicalType?: string, CAToUSShipmentAllowedIndicator?: string, }, ProperShippingNameDetail?: {ProperShippingName: string, }, PackageQuantityLimitDetail?: {PackageQuantityLimitTypeCode?: string, Quantity?: string, UOM?: string, PackagingInstructionCode?: string, }, }, }, }
/** 
 * The Dangerous Goods API provides the ability to determine what Dangerous Goods (also known as Hazardous Materials) can be carried by UPS.
 * The Dangerous Goods API provides the ability to determine what Dangerous Goods (also known as Hazardous Materials) can be carried by UPS.
 * @example "{\r\n \"ChemicalReferenceDataRequest\": {\r\n \"IDNumber\": \"UN1088\",\r\n \"ProperShippingName\": \"Acetal\",\r\n \"ShipperNumber\": \"Your Shipper Number\"\r\n }\r\n}\r\n"
*/
export const post_chemical_reference_data = async (
    base_url: string, 
    token: string, 
    path: {version: undefined},  
    axios: Function
): Promise<{data: post_chemical_reference_data_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/dangerousgoods/${path.version}/chemicalreferencedata`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_delete_type = {DeleteResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, TransactionIdentifier?: string, }, }, }, }
/** 
 * The Paperless Document API web service allows the users to upload their own customized trade documents for customs clearance to Forms History. 
 * The Paperless Document API web service allows the users to upload their own customized trade documents for customs clearance to Forms History. 
 * @example {"UPSSecurity":{"UsernameToken":{"Username":"Your User Id","Password":"Your Password"},"ServiceAccessToken":{"AccessLicenseNumber":"Your Access License Number"}},"DeleteRequest":{"Request":{"TransactionReference":{"CustomerContext":"Your Customer Context"}},"ShipperNumber":"Your Shipper Number","DocumentID":"2016-01-18-11.01.07.589501"}}
*/
export const post_delete = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_delete_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/PaperlessDocumentAPI`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_denied_party_screener_type = {DeniedPartyScreenerResponse: {Response: {Warning?: string, DeniedPartySearchStatus: string, }, TransactionInfo: {Date: string, Time: string, TransactionCharge: {MonetaryValue: string, CurrencyCode: string, }, }, GovernmentList?: {ListDescription?: {ListName?: string, Description?: string, ControlAgency?: string, LastRegulatoryUpdate?: string, }, DeniedParty?: {Names?: {Name?: string, }, Addresses?: {Address?: {AddressLine?: string, City?: string, State?: string, PostalCode?: string, County?: string, CountryCode?: string, }, }, Remarks?: string, }, }, }, }
/** 
 * Denied Party Screener allows you to use to search for restricted trading parties by destination country or territory or by party.
 * Denied Party Screener allows you to use to search for restricted trading parties by destination country or territory or by party.
 * @example "{\r\n\"DeniedPartyScreenerRequest\": {\r\n\"Party\": {\r\n\"ScreenType\": \"ScreenType\",\r\n\"CompanyName\": \"CompanyName\",\r\n\"Address\": {\r\n\"AddressLine\": [\"AddressLine\", \"Suite\"]\r\n},\r\n\"MatchLevel\": \"\"\r\n}\r\n}\r\n}\r\n"
*/
export const post_denied_party_screener = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_denied_party_screener_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/tradeability/v1/restrictedparties`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_freight_cancel_pickup__type = {FreightCancelPickupResponse: {Response: {ResponseStatus: string, Alert: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, TransactionIdentifier?: string, }, }, FreightCancelStatus: string, }, }
/** 
 * API can be only used by users that plan to ship packages manifested, tendered, and delivered by TForce Freight
 * API can be only used by users that plan to ship packages manifested, tendered, and delivered by TForce Freight
 * @example {}
*/
export const post_freight_cancel_pickup_ = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_freight_cancel_pickup__type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/v1/freight/pickups`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_freight_pickup_type = {FreightPickupResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, TransactionIdentifier?: string, }, }, PickupRequestConfirmationNumber: string, }, }
/** 
 * API can be only used by users that plan to ship packages manifested, tendered, and delivered by TForce Freight
 * API can be only used by users that plan to ship packages manifested, tendered, and delivered by TForce Freight
 * @example {"FreightPickupRequest":{"Request":{"TransactionReference":{"CustomerContext":"XOLT Smoke -Invalid Pickup date ."}},"DestinationPostalCode":"20019","DestinationCountryCode":"US","Requester":{"ThirdPartyIndicator":"true","AttentionName":"Pickup Testing","EMailAddress":"vholloway@ups.com","Name":"Pickup Testing","Phone":{"Number":"12345667890","Extension":"122"}},"ShipFrom":{"AttentionName":"Pickup testing","Name":"Pickup Testin","Address":{"AddressLine":["123 main st ","address 2","address 3"],"City":"Roswell","StateProvinceCode":"GA","PostalCode":"30076","CountryCode":"US"},"Phone":{"Number":"1290987654","Extension":"123"},"EMailAddress":"abc@yahoo.com"},"PickupDate":"20190228","EarliestTimeReady":"0800","LatestTimeReady":"1600","ShipmentDetail":{"PackagingType":{"Code":"CAN","Description":"can"},"NumberOfPieces":"20","DescriptionOfCommodity":"twenty","Weight":{"UnitOfMeasurement":{"Code":"LBS","Description":"pounds"},"Value":"102"}},"PickupInstructions":"Pickup Instructions ","AdditionalComments":"Additonal Instructions","HandlingInstructions":"Handling Instructions","SpecialInstructions":"Special Instructions ","DeliveryInstructions":"Delivery Instructions"}}
*/
export const post_freight_pickup = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_freight_pickup_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/v1/freight/pickups`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_freight_rate_type = {FreightRateResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, }, }, Rate?: {Type: {Code: string, Description?: string, }, Factor: {Value: string, UnitOfMeasurement?: {Code: string, Description?: string, }, }, }, FreightDensityRate?: {Density: string, TotalCubicFeet: string, }, Commodity: {CommodityID?: string, Description: string, Weight: {Value: string, UnitOfMeasurement: {Code: string, Description?: string, }, }, AdjustedWeight?: {Value: string, UnitOfMeasurement: {Code: string, Description?: string, }, }, }, TotalShipmentCharge?: {CurrencyCode: string, MonetaryValue: string, }, BillableShipmentWeight?: {Value: string, UnitOfMeasurement: {Code: string, Description?: string, }, }, DimensionalWeight?: {Value: string, UnitOfMeasurement: {Code: string, Description?: string, }, }, Service?: {Code: string, Description?: string, }, GuaranteedIndicator?: string, MinimumChargeAppliedIndicator?: string, AlternateRatesResponse?: {AlternateRateType: {Code: string, Description?: string, }, Rate: {Type: {Code: string, Description?: string, }, SubTypeCode?: string, Factor: {Value: string, UnitOfMeasurement?: {Code: string, Description?: string, }, }, }, FreightDensityRate?: {Density: string, TotalCubicFeet: string, }, BillableShipmentWeight?: {Value: string, UnitOfMeasurement: {Code: string, Description?: string, }, }, TimeInTransit?: {DaysInTransit: string, }, }, TimeInTransit?: {DaysInTransit: string, }, HandlingUnits?: {Quantity: string, Type: {Code: string, Description?: string, }, Dimensions: {UnitOfMeasurement: {Code: string, Description?: string, }, Length: string, Width: string, Height: string, }, AdjustedHeight: {Value: string, UnitOfMeasurement: {Code: string, Description?: string, }, }, }, QuoteNumber?: string, }, }
/** 
 * The Rating Ground Freight API may only be used by brokers or resellers of transportation services with a current and active UPGF Master Transportation Agreement.
 * The Rating Ground Freight API may only be used by brokers or resellers of transportation services with a current and active UPGF Master Transportation Agreement.
 * @example {"FreightRateRequest":{"ShipFrom":{"Name":"Test US Shipper","Address":{"AddressLine":"123 Lane","City":"TIMONIUM","StateProvinceCode":"MD","PostalCode":"21093","CountryCode":"US","ResidentialAddressIndicator":""},"AttentionName":"Test Shipper","Phone":{"Number":"4444444444","Extension":"4444"},"EMailAddress":"gcc0htq@ups.com"},"ShipperNumber":"AT0123","ShipTo":{"Name":"Dilbert's Derbies","Address":{"AddressLine":"555 Main St","City":"LOUISVILLE","StateProvinceCode":"KY","PostalCode":"40201","CountryCode":"US"},"AttentionName":"Dilbert","Phone":{"Number":"8459865555"}},"PaymentInformation":{"Payer":{"Name":"Test US Shipper","Address":{"AddressLine":"123 Lane","City":"LUTHERVILLE TIMONIUM","StateProvinceCode":"MD","PostalCode":"21093","CountryCode":"US"},"ShipperNumber":"AT0123","AccountType":"1","AttentionName":"Test Shipper","Phone":{"Number":"4444444444","Extension":"4444"},"EMailAddress":"gcc0htq@ups.com"},"ShipmentBillingOption":{"Code":"10"}},"Service":{"Code":"308"},"Commodity":{"Description":"FRS-Freight","Weight":{"UnitOfMeasurement":{"Code":"LBS"},"Value":"150"},"Dimensions":{"UnitOfMeasurement":{"Code":"IN","Description":" "},"Length":"9","Width":"5","Height":"4"},"NumberOfPieces":"1","PackagingType":{"Code":"PLT"},"FreightClass":"60"},"DensityEligibleIndicator":"","AlternateRateOptions":{"Code":"3"},"PickupRequest":{"PickupDate":"20170923"},"GFPOptions":{"GPFAccesorialRateIndicator":""},"TimeInTransitIndicator":""}}
*/
export const post_freight_rate = async (
    base_url: string, 
    token: string, 
    path: {version: string,requestoption: string},  
    axios: Function
): Promise<{data: post_freight_rate_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/${path.version}/freight/rating/${path.requestoption}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_freight_ship_type = {FreightShipResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, }, }, ShipmentResults: {PickupRequestConfirmationNumber?: string, DeliveryDate?: string, ShipmentNumber?: string, BOLID?: string, GuaranteedIndicator?: string, MinimumChargeAppliedIndicator?: string, Rate?: {Type: {Code: string, Description: string, }, Factor: {Value: string, UnitOfMeasurement?: {Code: string, Description?: string, }, }, }, FreightDensityRate?: {Density?: string, TotalCubicFeet?: string, }, TotalShipmentCharge?: {CurrencyCode: string, MonetaryValue: string, }, BillableShipmentWeight?: {UnitOfMeasurement: {Code: string, Description?: string, }, Value: string, }, Service?: {Code: string, Description?: string, }, Documents?: {Image?: {Type: {Code: string, Description: string, }, GraphicImage: string, Format: {Code: string, Description: string, }, }, Forms?: {Type: {Code: string, Description: string, }, GraphicImage: string, Format: {Code: string, Description: string, }, }, }, TimeInTransit?: {DaysInTransit?: string, }, }, }, }
/** 
 * Only users that plan to ship packages manifested, tendered, and delivered by TForce Freight can use the API.
 * Only users that plan to ship packages manifested, tendered, and delivered by TForce Freight can use the API.
 * @example "{\"FreightShipRequest\":{\"Shipment\":{\"ShipFrom\":{\"Name\":\"ShipFromName\",\"Address\":{\"AddressLine\":\"AddressLine\",\"City\":\"City\",\"StateProvinceCode\":\"State\",\"PostalCode\":\"PostalCode\",\"CountryCode\":\"CountryCode\"},\"AttentionName\":\"AttentionName\",\"Phone\":{\"Number\":\"AttentionPhone\"}},\"ShipperNumber\":\"888144\",\"ShipTo\":{\"Name\":\"ShipToName\",\"Address\":{\"AddressLine\":\"AddressLine\",\"City\":\"City\",\"StateProvinceCode\":\"StateProvince\"\",\"PostalCode\":\"PostalCode\",\"CountryCode\":\"CountryCode\"},\"AttentionName\":\"AttentionName\",\"Phone\":{\"Number\":\"AttentionPhone\"}},\"PaymentInformation\":{\"Payer\":{\"Name\":\"PayerName\",\"Address\":{\"AddressLine\":\"AddressLine\",\"City\":\"City\",\"StateProvinceCode\":\"StateProvince\",\"PostalCode\":\"PostalCode\",\"CountryCode\":\"CountryCode\"},\"ShipperNumber\":\"ShipperNumber\",\"AccountType\":\"1\",\"AttentionName\":\"AttentionName\",\"Phone\":{\"Number\":\"AttentionPhone\"}},\"ShipmentBillingOption\":{\"Code\":\"10\"}},\"Service\":{\"Code\":\"308\"},\"HandlingUnitOne\":{\"Quantity\":\"2\",\"Type\":{\"Code\":\"PLT\"}},\"Commodity\":{\"Description\":\"Goods\",\"Weight\":{\"UnitOfMeasurement\":{\"Code\":\"LBS\"},\"Value\":\"190\"},\"Dimensions\":{\"UnitOfMeasurement\":{\"Code\":\"IN\"},\"Length\":\"11\",\"Width\":\"11\",\"Height\":\"11\"},\"NumberOfPieces\":\"10\",\"PackagingType\":{\"Code\":\"PKG\"},\"FreightClass\":\"110\"},\"DensityEligibleIndicator\":\"\",\"PickupRequest\":{\"Requester\":{\"AttentionName\":\"AttentionName\",\"EMailAddress\":\"AttentionEmail\",\"Name\":\"DG\",\"Phone\":{\"Number\":\"AttentionPhone\"}},\"PickupDate\":\"20181228\",\"EarliestTimeReady\":\"0723\",\"LatestTimeReady\":\"1700\"},\"TimeInTransitIndicator\":\"\"},\"Miscellaneous\":{\"WSVersion\":\"21.0.11\",\"ReleaseID\":\"07.12.2008\"}"
*/
export const post_freight_ship = async (
    base_url: string, 
    token: string, 
    path: {version: string,requestoption: string},  
    axios: Function
): Promise<{data: post_freight_ship_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/${path.version}/freight/shipments/${path.requestoption}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_label_recovery_type = {LabelRecoveryResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, }, }, ShipmentIdentificationNumber?: string, LegacyLabelDeliveryLabelURL?: string, LabelResults: {TrackingNumber?: string, LabelImage?: {LabelImageFormat: {Code: string, }, GraphicImage: string, HTMLImage?: string, PDF417?: string, InternationalSignatureGraphicImage?: string, URL?: string, }, MailInnovationsTrackingNumber?: string, MailInnovationsLabelImage?: {LabelImageFormat: {Code: string, }, GraphicImage: string, HTMLImage?: string, PDF417?: string, InternationalSignatureGraphicImage?: string, URL?: string, }, Receipt?: {HTMLImage?: string, Image?: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, URL?: string, }, ReturnSlip?: {Image: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, }, Form?: {Image: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, }, }, CODTurnInPage?: {Image: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, }, Form?: {Image: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, }, HighValueReport?: {Image: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, }, TrackingCandidate?: {TrackingNumber: string, DestinationPostalCode?: string, DestinationCountryCode?: string, PickupDateRange?: {BeginDate: string, EndDate: string, }, }, }, }
/** 
 * The Label Shipping API allows us to retrieve forward and return labels.
 * The Label Shipping API allows us to retrieve forward and return labels.
 * @example "{\r\n \"LabelRecoveryRequest\": { \r\n \"LabelSpecification\": {\r\n \"HTTPUserAgent\": \"\",\r\n \"LabelImageFormat\": {\r\n \"Code\": \"ZPL\"\r\n },\r\n \"LabelStockSize\": {\r\n \"Height\": \"6\",\r\n \"Width\": \"4\"\r\n }\r\n },\r\n \"Translate\": {\r\n \"LanguageCode\": \"eng\",\r\n \"DialectCode\": \"US\",\r\n \"Code\": \"01\"\r\n },\r\n \"LabelDelivery\": {\r\n \"LabelLinkIndicator\": \"\",\r\n \"ResendEMailIndicator\": \"\",\r\n \"EMailMessage\": {\r\n \"EMailAddress\": \"\"\r\n }\r\n },\r\n \"TrackingNumber\": \"1Z12345E8791315413\"\r\n }\r\n}\r\n"
*/
export const post_label_recovery = async (
    base_url: string, 
    token: string, 
    path: {version: undefined},  
    axios: Function
): Promise<{data: post_label_recovery_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/LBRecovery`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_landed_cost_type = {LandedCostResponse: {Response: {Warning?: string, }, QueryResponse?: {Shipment: {Product: {TariffCode: string, Question?: {Name: string, Text: string, Type: string, Options?: {Option: {Key: string, Value: string, }, }, }, }, Question?: {Name: string, Text: string, Type: string, Options?: {Option: {Key: string, Value: string, }, }, }, }, TransactionDigest: string, SuppressQuestionIndicator?: string, }, EstimateResponse?: {TransactionInfo: {Date: string, Time: string, TransactionCharge: {MonetaryValue: string, CurrencyCode: string, }, }, ShipmentEstimate: {CurrencyCode: string, ShipmentCharges: {TaxesAndFees: string, AdditionalInsuranceCost?: string, TransportationCost?: string, SubTotal: string, }, ProductsCharges: {Product: {TariffCode: string, Charges: {Duties?: string, TaxesAndFees?: string, VAT?: string, CostOfGoods: string, SubTotal: string, }, }, ProductsSubTotal: string, }, TotalLandedCost: string, }, SuppressQuestionIndicator?: string, }, }, }
/** 
 * Landed Cost provides an all-inclusive cost estimate of international shipments.
 * Landed Cost provides an all-inclusive cost estimate of international shipments.
 * @example "{\r\n \"LandedCostRequest\": {\r\n \"QueryRequest\": {\r\n \"Shipment\": {\r\n \"OriginCountryCode\": \"OriginCountryCode\",\r\n \"DestinationCountryCode\": \"DestinationCountryCode\",\r\n \"DestinationStateProvinceCode\": \"\",\r\n \"TransportationMode\": \"TransportationMode\",\r\n \"FreightCharges\": {\r\n \"MonetaryValue\": \"MonetaryValue\",\r\n \"CurrencyCode\": \"CurrencyCode\"\r\n },\r\n \"AdditionalInsurance\": {\r\n \"MonetaryValue\": \"MonetaryValue\",\r\n \"CurrencyCode\": \"CurrencyCode\"\r\n },\r\n \"Product\": {\r\n \"TariffInfo\": {\r\n \"TariffCode\": \"TariffCode\"\r\n },\r\n \"ProductCountryCodeOfOrigin\": \"ProductCountryCodeOfOrigin\",\r\n \"Quantity\": {\r\n \"Value\": \"Value\"\r\n },\r\n \"Weight\": {\r\n \"Value\": \"Value\",\r\n \"UnitOfMeasure\": {\r\n \"UnitCode\": \"UnitCode\",\r\n \"UnitDescription\": \"\"\r\n }\r\n},\r\n \"UnitPrice\": {\r\n \"MonetaryValue\": \"MonetaryValue\",\r\n \"CurrencyCode\": \"CurrencyCode\"\r\n } \r\n },\r\n \"ResultCurrencyCode\": \"ResultCurrencyCode\"\r\n },\r\n \"TransactionReferenceID\": \"TransactionReferenceID\"\r\n } \r\n } \r\n}\r\n"
*/
export const post_landed_cost = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_landed_cost_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/tradeability/v1/landedcost/queries`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_locator_type = {LocatorResponse: {Response: {TransactionReference?: {CustomerContext?: string, XpciVersion?: string, }, ResponseStatusCode: string, ResponseStatusDescription?: string, Error?: {ErrorSeverity: string, ErrorCode: string, ErrorDescription?: string, MinimumRetrySeconds?: string, ErrorLocation?: {ErrorLocationElementName?: string, ErrorLocationAttributeName?: string, }, ErrorDigest?: string, }, }, Geocode?: {Latitude: string, Longitude: string, }, SearchResults: {GeocodeCandidate?: {AddressKeyFormat: {ConsigneeName?: string, AddressLine: string, PoliticalDivision3?: string, PoliticalDivision2: string, PoliticalDivision1: string, PostcodePrimaryLow: string, PostcodeExtendedLow?: string, CountryCode: string, }, Geocode: {Latitude: string, Longitude: string, }, LandmarkName?: string, }, Disclaimer?: string, DropLocation?: {LocationID: string, OriginOrDestination: string, IVR: {PhraseID: string, TextToSpeechIndicator?: string, }, Geocode: {Latitude: string, Longitude: string, }, AddressKeyFormat: {ConsigneeName?: string, AddressLine: string, PoliticalDivision3?: string, PoliticalDivision2: string, PoliticalDivision1: string, PostcodePrimaryLow: string, PostcodeExtendedLow?: string, CountryCode: string, }, PhoneNumber: string, FaxNumber?: string, EMailAddress?: string, LocationAttribute: {OptionType: {Code: string, Description: string, }, OptionCode: {Category?: string, Code: string, Description: string, Name?: string, TransportationPickUpSchedule?: {PickUp: {DayOfWeek: string, PickUpDetails: {PickUpTime?: string, NoPickUpIndicator: string, }, }, }, }, }, Distance: {Value: string, UnitOfMeasurement: {Code: string, Description?: string, }, }, SpecialInstructions?: {Segment: string, }, LatestGroundDropOffTime?: string, LatestAirDropOffTime?: string, AdditionalChargeIndicator?: string, StandardHoursOfOperation?: string, NonStandardHoursOfOperation?: string, WillCallHoursOfOperation?: string, Number?: string, HomePageURL?: string, Comments?: string, AdditionalComments?: {CommentType: {Code: string, Text: string, }, }, Disclaimer?: string, SLIC?: string, Timezone: string, FacilityType?: string, OperatingHours?: {StandardHours?: {HoursType: string, DayOfWeek: {Day: string, OpenHours?: string, CloseHours?: string, LatestDropOffHours?: string, PrepHours?: string, ClosedIndicator?: string, Open24HoursIndicator?: string, }, }, }, LocalizedInstruction?: {Locale: string, Last50ftInstruction: string, }, PromotionInformation?: {Locale: string, Promotion: string, }, SortCode?: {HubSortCode?: string, FreightSortFacilityCode?: string, }, ServiceOfferingList?: {ServiceOffering: {Code: string, Description: string, }, }, DisplayPhoneNumberIndicator?: string, AccessPointInformation?: {PublicAccessPointID?: string, ImageURL?: string, LoadCapacityRatio?: string, BusinessClassificationList?: {BusinessClassification: {Code: string, Description: string, }, }, AccessPointStatus?: {Code: string, Description: string, }, FacilitySLIC?: string, PrivateNetworkList?: {PrivateNetwork: {NetworkID: string, NetworkDescription: string, }, }, Availability?: {ShippingAvailability?: {AvailableIndicator?: string, UnavailableReason?: {Code: string, Description: string, }, }, DCRAvailability?: {AvailableIndicator?: string, UnavailableReason?: {Code: string, Description: string, }, }, }, }, LocationImage?: {SecureURL?: string, NonSecureURL?: string, }, LocationNewIndicator?: string, PromotionalLinkURL?: string, FeaturedRank?: string, WillCallLocationIndicator?: string, }, MapNavigation?: {Number?: string, MapDimensions: {Height: string, Width: string, }, ZoomFactor: string, PanX?: string, PanY?: string, MapID: string, MapURL: string, ImageMap: {LocationID: string, XCoordinate: string, YCoordinate: string, }, }, DrivingDirections?: {Directions?: {Segment: string, Distance?: {Value: string, UnitOfMeasurement: {Code: string, Description?: string, }, }, Time?: string, }, TotalDistance: {Distance?: {Value: string, UnitOfMeasurement: {Code: string, Description?: string, }, }, }, TotalTime: string, }, AvailableLocationAttributes?: {OptionType: {Code: string, Description: string, }, OptionCode: {Code: string, Description: string, Name?: string, Category?: string, TransportationPickUpSchedule?: {PickUp: {DayOfWeek: string, PickUpDetails: {PickUpTime?: string, NoPickUpIndicator: string, }, }, }, }, }, ActiveAvailableAccessPointIndicator?: string, }, AllowAllConfidenceLevels: string, }, }
/** 
 * The Locator API provides UPS full-service and self-service locations, hours of operation and pickup times.
 * Get Locator Response
 * @example "{\r\n \"AccessRequest\": {\r\n \"AccessLicenseNumber\": \"Your Access License Number\",\r\n \"UserId\": \"Your UserID\",\r\n \"Password\": \"Your Password\"\r\n },\r\n \"LocatorRequest\": {\r\n \"Request\": {\r\n \"RequestAction\": \"Locator\",\r\n \"RequestOption\": \"1\",\r\n \"TransactionReference\": {\r\n \"CustomerContext\": \"XOLT Sample Code\"\r\n }\r\n },\r\n \"OriginAddress\": {\r\n \"AddressKeyFormat\": {\r\n \"AddressLine\": \"Street Address\",\r\n \"PoliticalDivision2\": \"City\",\r\n \"PoliticalDivision1\": \"State\",\r\n \"PostcodePrimaryLow\": \"12345\",\r\n \"PostcodeExtendedLow\": \"1234\",\r\n \"CountryCode\": \"US\"\r\n }\r\n },\r\n \"Translate\": {\r\n \"Locale\": \"en_US\"\r\n },\r\n \"UnitOfMeasurement\": {\r\n \"Code\": \"MI\"\r\n },\r\n \"LocationSearchCriteria\": {\r\n \"SearchOption\": {\r\n \"OptionType\": {\r\n \"Code\": \"01\"\r\n },\r\n \"OptionCode\": {\r\n \"Code\": \"002\"\r\n }\r\n },\r\n \"MaximumListSize\": \"1\",\r\n \"SearchRadius\": \"50\"\r\n }\r\n }\r\n}\r\n"
*/
export const post_locator = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_locator_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/Locator`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_pickup_cancel_type = {PickupCancelResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, }, }, PickupType: string, GWNStatus?: {Code: string, Description?: string, }, }, }
/** 
 * Using the Pickup API, applications can schedule pickups, manage previously scheduled pickups, or cancel previously scheduled pickups.
 * Using the Pickup API, applications can schedule pickups, manage previously scheduled pickups, or cancel previously scheduled pickups.
 * @example undefined
*/
export const post_pickup_cancel = async (
    base_url: string, 
    token: string, 
    path: {cancelby: undefined},  
    axios: Function
): Promise<{data: post_pickup_cancel_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/v1/pickups/${path.cancelby}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_pickup_creation_type = {PickupCreationResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, }, }, PRN?: string, WeekendServiceTerritory?: {SatWST: string, SunWST: string, }, WeekendServiceTerritoryIndicator?: string, RateStatus: {Code: string, Description?: string, }, RateResult?: {Disclaimer?: {Code: string, Description: string, }, RateType?: string, CurrencyCode?: string, ChargeDetail?: {ChargeCode: string, ChargeDescription?: string, ChargeAmount: string, IncentedAmount?: string, TaxAmount?: string, }, TaxCharges?: {Type: string, MonetaryValue: string, }, TotalTax?: string, GrandTotalOfAllCharge: string, GrandTotalOfAllIncentedCharge?: string, PreTaxTotalCharge?: string, PreTaxTotalIncentedCharge?: string, }, }, }
/** 
 * Using the Pickup API, applications can schedule pickups, manage previously scheduled pickups, or cancel previously scheduled pickups.
 * Using the Pickup API, applications can schedule pickups, manage previously scheduled pickups, or cancel previously scheduled pickups.
 * @example "{\r\n \"PickupCreationRequest\": {\r\n \"RatePickupIndicator\": \"N\",\r\n \"Shipper\": {\r\n \"Account\": {\r\n \"AccountNumber\": \"1009YY\",\r\n \"AccountCountryCode\": \"US\"\r\n }\r\n },\r\n \"PickupDateInfo\": {\r\n \"CloseTime\": \"1400\",\r\n \"ReadyTime\": \"0500\",\r\n \"PickupDate\": \"20190131\"\r\n },\r\n \"PickupAddress\": {\r\n \"CompanyName\": \"Pickup Proxy\",\r\n \"ContactName\": \"Pickup Manager\",\r\n \"AddressLine\": \"315 Saddle Bridge Drive\",\r\n \"Room\": \"R01\",\r\n \"Floor\": \"2\",\r\n \"City\": \"Allendale\",\r\n \"StateProvince\": \"NJ\",\r\n \"Urbanization\": \"\",\r\n \"PostalCode\": \"07401\",\r\n \"CountryCode\": \"US\",\r\n \"ResidentialIndicator\": \"Y\",\r\n \"PickupPoint\": \"Lobby\",\r\n \"Phone\": {\r\n \"Number\": \"6785851399\",\r\n \"Extension\": \"911\"\r\n }\r\n },\r\n \"AlternateAddressIndicator\": \"Y\",\r\n \"PickupPiece\": [\r\n {\r\n \"ServiceCode\": \"001\",\r\n \"Quantity\": \"27\",\r\n \"DestinationCountryCode\": \"US\",\r\n \"ContainerCode\": \"01\"\r\n },\r\n {\r\n \"ServiceCode\": \"012\",\r\n \"Quantity\": \"4\",\r\n \"DestinationCountryCode\": \"US\",\r\n \"ContainerCode\": \"01\"\r\n }\r\n ],\r\n \"TotalWeight\": {\r\n \"Weight\": \"5.5\",\r\n \"UnitOfMeasurement\": \"LBS\"\r\n },\r\n \"OverweightIndicator\": \"N\",\r\n \"PaymentMethod\": \"01\",\r\n \"SpecialInstruction\": \"Jias Test \",\r\n \"ReferenceNumber\": \"CreatePickupRefJia\",\r\n \"Notification\": {\r\n \"ConfirmationEmailAddress\": \"vholloway@ups.com\",\r\n \"UndeliverableEmailAddress\": \"vholloway@ups.com\"\r\n },\r\n \"CSR\": {\r\n \"ProfileId\": \"1 Q83 122\",\r\n \"ProfileCountryCode\": \"US\"\r\n }\r\n }\r\n}\r\n\r\n"
*/
export const post_pickup_creation = async (
    base_url: string, 
    token: string, 
    path: {version: undefined},  
    axios: Function
): Promise<{data: post_pickup_creation_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/${path.version}/pickups`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_pickup_get_political_division_1_list_type = {PickupGetPoliticalDivision1ListResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description?: string, }, TransactionReference?: {CustomerContext?: string, }, }, PoliticalDivision1?: string, }, }
/** 
 * Using the Pickup API, applications can schedule pickups, manage previously scheduled pickups, or cancel previously scheduled pickups.
 * Using the Pickup API, applications can schedule pickups, manage previously scheduled pickups, or cancel previously scheduled pickups.
 * @example undefined
*/
export const post_pickup_get_political_division_1_list = async (
    base_url: string, 
    token: string, 
    path: {countrycode: string},  
    axios: Function
): Promise<{data: post_pickup_get_political_division_1_list_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/v1/pickup/countries/${path.countrycode}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_pickup_get_service_center_facilities_type = {PickupGetServiceCenterFacilitiesResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, }, }, ServiceCenterLocation: {DropOffFacilities?: {Name: string, Address: {AddressLine: string, City: string, StateProvince: string, PostalCode: string, CountryCode: string, ResidentialIndicator: string, }, SLIC: string, Type: string, Timezone: string, Phone: string, Fax: string, FacilityTime?: {DayOfWeek: {Day: string, EarliestDropOfforPickup?: string, LatestDropOfforPickup?: string, OpenHours: string, CloseHours: string, PrepTime?: string, LastDrop?: string, }, }, OriginOrDestination: string, LocalizedInstruction?: {Locale?: string, Last50ftInstruction?: string, }, Distance?: {Value?: string, UnitOfMeasurement?: string, }, }, PickupFacilities?: {Name: string, Address: {AddressLine: string, City: string, StateProvince: string, PostalCode: string, CountryCode: string, ResidentialIndicator: string, }, SLIC: string, Type: string, Timezone: string, Phone: string, Fax: string, FacilityTime?: {DayOfWeek: {Day: string, EarliestDropOfforPickup?: string, LatestDropOfforPickup?: string, OpenHours: string, CloseHours: string, PrepTime?: string, LastDrop?: string, }, }, AirportCode?: string, SortCode?: string, }, }, }, }
/** 
 * Using the Pickup API, applications can schedule pickups, manage previously scheduled pickups, or cancel previously scheduled pickups.
 * Using the Pickup API, applications can schedule pickups, manage previously scheduled pickups, or cancel previously scheduled pickups.
 * @example "{\r\n\"PickupGetServiceCenterFacilitiesRequest\": {\r\n \"PickupPiece\": {\r\n \"ServiceCode\": \"012\",\r\n \"ContainerCode\": \"03\"\r\n },\r\n \"DestinationAddress\": {\r\n \"City\": \"Allendale\",\r\n \"StateProvince\": \"NJ\",\r\n \"PostalCode\": \"07401\",\r\n \"CountryCode\": \"US\"\r\n },\r\n \"ProximitySearchIndicator\": \"\",\r\n \"Locale\": \"en_HK\"\r\n }\r\n}\r\n"
*/
export const post_pickup_get_service_center_facilities = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_pickup_get_service_center_facilities_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/v1/pickup/servicecenterlocations`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_pickup_pending_status_type = {PickupPendingStatusResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, }, }, PendingStatus: {PickupType: string, ServiceDate: string, PRN: string, GWNStatusCode?: string, OnCallStatusCode?: string, PickupStatusMessage: string, BillingCode?: string, ContactName?: string, ReferenceNumber?: string, }, }, }
/** 
 * Using the Pickup API, applications can schedule pickups, manage previously scheduled pickups, or cancel previously scheduled pickups.
 * Using the Pickup API, applications can schedule pickups, manage previously scheduled pickups, or cancel previously scheduled pickups.
 * @example undefined
*/
export const post_pickup_pending_status = async (
    base_url: string, 
    token: string, 
    path: {pickuptype: string},  
    axios: Function
): Promise<{data: post_pickup_pending_status_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/v1/pickups/${path.pickuptype}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_pickup_rate_type = {PickupRateResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, }, }, RateResult: {Disclaimer?: {Code: string, Description: string, }, RateType?: string, CurrencyCode: string, ChargeDetail?: {ChargeCode: string, ChargeDescription?: string, ChargeAmount: string, IncentedAmount?: string, TaxAmount?: string, }, TaxCharges?: {Type: string, MonetaryValue: string, }, TotalTax?: string, GrandTotalOfAllCharge?: string, GrandTotalOfAllIncentedCharge?: string, PreTaxTotalCharge?: string, PreTaxTotalIncentedCharge?: string, }, WeekendServiceTerritoryIndicator?: string, WeekendServiceTerritory?: {SatWST: string, SunWST: string, }, }, }
/** 
 * Using the Pickup API, applications can schedule pickups, manage previously scheduled pickups, or cancel previously scheduled pickups.
 * Using the Pickup API, applications can schedule pickups, manage previously scheduled pickups, or cancel previously scheduled pickups.
 * @example "{\r\n \"PickupRateRequest\": {\r\n \"PickupAddress\": {\r\n \"AddressLine\": \"315 Saddle Bridge Drive\",\r\n \"City\": \"Allendale\",\r\n \"StateProvince\": \"NJ\",\r\n \"PostalCode\": \"07401\",\r\n \"CountryCode\": \"US\",\r\n \"ResidentialIndicator\": \"Y\"\r\n },\r\n \"AlternateAddressIndicator\": \"N\",\r\n \"ServiceDateOption\": \"02\",\r\n \"PickupDateInfo\": {\r\n \"CloseTime\": \"2000\",\r\n \"ReadyTime\": \"900\",\r\n \"PickupDate\": \"20160405\"\r\n }\r\n }\r\n}\r\n"
*/
export const post_pickup_rate = async (
    base_url: string, 
    token: string, 
    path: {version: undefined},  
    axios: Function
): Promise<{data: post_pickup_rate_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/${path.version}/pickups/rating`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_pre_notification_type = {PreNotificationResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, TransactionIdentifier?: string, }, }, }, }
/** 
 * The Pre-Notification API allows customer applications to inform UPS operations of Dangerous Goods shipments as they are processed and will enter the UPS transportation network prior to an upload of manifest information at the end of the day.
 * The Pre-Notification API allows customer applications to inform UPS operations of Dangerous Goods shipments as they are processed and will enter the UPS transportation network prior to an upload of manifest information at the end of the day.
 * @example {"PreNotificationRequest":{"Request":{"RequestOption":"RequestOption","SubVersion":"1703","TransactionReference":{"CustomerContext":"Verify the returned when the all the required fields and conditional arepresent in the request","TransactionIdentifier":" "}},"Shipment":{"ShipperNumber":"nnnnnn","ShipmentIdentificationNumber":"1Z00000YY000","ShipFromAddress":{"AddressLine":"MY STREET","City":"city","StateProvinceCode":"SS","PostalCode":"00000","CountryCode":"US"},"ShipToAddress":{"AddressLine":["MY SUITE","MY STREET"],"City":"city","StateProvinceCode":"TT","PostalCode":"11111","CountryCode":"US"},"PickupDate":"20161020","Service":{"Code":"GND","Description":"Ground"},"RegulationSet":"IATA","Package":{"TrackingNumber":"1Z00000000000","PackageWeight":{"UnitOfMeasurement":{"Code":"KGS","Description":"Kilo"},"Weight":"12"},"TransportationMode":"CAO","VoidIndicator":"","PackagePoints":"1","ChemicalRecord":{"ReportableQuantity":"1","ClassDivisionNumber":"I","SubRiskClass":"1234","IDNumber":"UN2761","PackagingGroupType":"0","Quantity":"1","UOM":"LBS","PackagingInstructionCode":"TEST","EmergencyPhone":" ","EmergencyContact":" ","ProperShippingName":"TEST SHIPPING","TechnicalName":" ","AdditionalDescription":" ","PackagingType":" ","HazardLabelRequired":"HAZARD LABEL","PackagingTypeQuantity":"1","CommodityRegulatedLevelCode":"LQ","TransportCategory":"0","TunnelRestrictionCode":"1","QValue":"0.5","OverPackedIndicator":"","AllPackedInOneIndicator":""}}}}}
*/
export const post_pre_notification = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_pre_notification_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/dangerousgoods/v1/prenotification`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_push_to_image_repository_type = {PushToImageRepositoryResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, TransactionIdentifier?: string, }, }, FormsGroupID?: string, }, }
/** 
 * The Paperless Document API web service allows the users to upload their own customized trade documents for customs clearance to Forms History. 
 * The Paperless Document API web service allows the users to upload their own customized trade documents for customs clearance to Forms History. 
 * @example {"UPSSecurity":{"UsernameToken":{"Username":"Your User Id","Password":"Your Password"},"ServiceAccessToken":{"AccessLicenseNumber":"Your Access License Number"}},"PushToImageRepositoryRequest":{"Request":{"TransactionReference":{"CustomerContext":"Your Customer Context"}},"ShipperNumber":"Your Shipper Number","FormsHistoryDocumentID":{"DocumentID":"2016-01-18-11.01.07.589501"},"ShipmentIdentifier":"Your Package Shipment Identifier","ShipmentDateAndTime":"2016-01-18-11.01.07","ShipmentType":"1","TrackingNumber":"Your Package Tracking Number"}}
*/
export const post_push_to_image_repository = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_push_to_image_repository_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/PaperlessDocumentAPI`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_quantum_view_type = {QuantumViewResponse: {Response: {TransactionReference: {CustomerContext?: string, XpciVersion?: string, ToolVersion?: string, }, ResponseStatusCode: string, ResponseStatusDescription?: string, Error?: {ErrorSeverity?: string, ErrorCode?: string, ErrorDescription?: string, MinimumRetrySeconds?: string, ErrorLocation: {ErrorLocationElementName?: string, ErrorLocationAttributeName?: string, }, ErrorDigest?: string, }, }, QuantumViewEvents: {SubscriberID: string, SubscriptionEvents: {Name?: string, Number?: string, SubscriptionStatus: {Code: string, Description?: string, }, DateRange?: {BeginDate: string, EndDate?: string, }, SubscriptionFile?: {FileName: string, StatusType: {Code: string, Description: string, }, Manifest?: {Shipper: {Name: string, AttentionName?: string, TaxIdentificationNumber?: string, PhoneNumber?: string, FaxNumber?: string, ShipperNumber?: string, EMailAddress?: string, Address?: {AddressLine1?: string, AddressLine2?: string, AddressLine3?: string, City?: string, StateProvinceCode?: string, PostalCode?: string, CountryCode?: string, ResidentialAddressIndicator: string, }, }, ShipTo: {ShipperAssignedIdentificationNumber?: string, CompanyName?: string, AttentionName?: string, PhoneNumber?: string, TaxIdentificationNumber?: string, FaxNumber?: string, EMailAddress?: string, Address?: {ConsigneeName?: string, AddressLine1?: string, AddressLine2?: string, AddressLine3?: string, City?: string, StateProvinceCode?: string, PostalCode?: string, CountryCode?: string, }, LocationID?: string, ReceivingAddressName?: string, }, ReferenceNumber?: {Number?: string, Code?: string, Value: string, }, Service?: {Code: string, Description?: string, }, PickupDate?: string, ScheduledDeliveryDate?: string, ScheduledDeliveryTime?: string, DocumentsOnly?: string, Package?: {Activity?: {Date?: string, Time?: string, }, Description?: string, Dimensions?: {Length: string, Width: string, Height: string, }, DimensionalWeight?: {UnitOfMeasurement: {Code: string, Description?: string, }, Weight: string, }, PackageWeight?: {Weight: string, }, LargePackage?: string, TrackingNumber?: string, ReferenceNumber?: {Number?: string, Code?: string, Value: string, }, PackageServiceOptions?: {COD?: {CODCode?: string, CODAmount?: {CurrencyCode?: string, MonetaryValue?: string, }, }, InsuredValue?: {CurrencyCode?: string, MonetaryValue: string, }, EarliestDeliveryTime?: string, HazardousMaterialsCode?: string, HoldForPickup: string, }, UPSPremiumCareIndicator?: string, }, ShipmentServiceOptions?: {SaturdayPickup: string, SaturdayDelivery: string, CallTagARS?: {Number?: string, Code?: string, }, }, ManufactureCountry?: string, HarmonizedCode?: string, CustomsValue?: {MonetaryValue: string, }, SpecialInstructions?: string, ShipmentChargeType?: string, BillToAccount?: {Option: string, Number: string, }, ConsigneeBillIndicator: string, CollectBillIndicator: string, LocationAssured?: string, ImportControl?: string, LabelDeliveryMethod?: string, CommercialInvoiceRemoval?: string, PostalServiceTrackingID?: string, ReturnsFlexibleAccess?: string, UPScarbonneutral?: string, Product?: string, UPSReturnsExchange?: string, LiftGateOnDelivery?: string, LiftGateOnPickUp?: string, PickupPreference?: string, DeliveryPreference?: string, HoldForPickupAtUPSAccessPoint?: string, UAPAddress?: {CompanyName?: string, AttentionName?: string, Address?: {AddressLine1?: string, AddressLine2?: string, AddressLine3?: string, City?: string, StateProvinceCode?: string, PostalCode?: string, CountryCode?: string, }, PhoneNumber?: string, }, DeliverToAddresseeOnlyIndicator?: string, UPSAccessPointCODIndicator?: string, ClinicalTrialIndicator?: string, ClinicalTrialIndicationNumber?: string, CategoryAHazardousIndicator?: string, DirectDeliveryIndicator?: string, PackageReleaseCodeIndicator?: string, ProactiveResponseIndicator?: string, WhiteGloveDeliveryIndicator?: string, RoomOfChoiceIndicator?: string, InstallationDeliveryIndicator?: string, ItemDisposalIndicator?: string, LeadShipmentTrackingNumber?: string, SaturdayNonPremiumCommercialDeliveryIndicator?: string, SundayNonPremiumCommercialDeliveryIndicator?: string, UPSPremierAccessorialIndicator?: string, UPSPremierCategoryCode?: string, }, Origin?: {PackageReferenceNumber?: {BarCodeIndicator?: string, Number?: string, Code?: string, Value: string, }, ShipmentReferenceNumber?: {BarCodeIndicator?: string, Number?: string, Code?: string, Value: string, }, ShipperNumber: string, TrackingNumber: string, Date: string, Time: string, ActivityLocation?: {AddressArtifactFormat: {PoliticalDivision2?: string, PoliticalDivision1?: string, CountryCode?: string, }, }, BillToAccount?: {Option: string, Number: string, }, ScheduledDeliveryDate?: string, ScheduledDeliveryTime?: string, }, Exception?: {PackageReferenceNumber?: {BarCodeIndicator?: string, Number?: string, Code?: string, Value: string, }, ShipmentReferenceNumber?: {BarCodeIndicator?: string, Number?: string, Code?: string, Value: string, }, ShipperNumber: string, TrackingNumber: string, Date: string, Time: string, UpdatedAddress?: {ConsigneeName?: string, StreetNumberLow?: string, StreetPrefix?: string, StreetName?: string, StreetType?: string, StreetSuffix?: string, AddressExtendedInformation?: {Type?: string, Low?: string, High?: string, }, PoliticalDivision3?: string, PoliticalDivision2?: string, PoliticalDivision1?: string, CountryCode?: string, PostcodePrimaryLow?: string, }, StatusCode?: string, StatusDescription?: string, ReasonCode?: string, ReasonDescription?: string, Resolution?: {Code: string, Description?: string, }, RescheduledDeliveryDate?: string, RescheduledDeliveryTime?: string, ActivityLocation?: {AddressArtifactFormat: {PoliticalDivision2?: string, PoliticalDivision1?: string, CountryCode?: string, }, }, BillToAccount?: {Option: string, Number: string, }, AccessPointLocationID?: string, }, Delivery?: {PackageReferenceNumber?: {BarCodeIndicator?: string, Number?: string, Code?: string, Value: string, }, ShipmentReferenceNumber?: {BarCodeIndicator?: string, Number?: string, Code?: string, Value: string, }, ShipperNumber: string, TrackingNumber: string, Date: string, Time: string, DriverRelease?: string, ActivityLocation?: {AddressArtifactFormat: {PoliticalDivision2?: string, PoliticalDivision1?: string, CountryCode?: string, }, }, DeliveryLocation?: {AddressArtifactFormat: {ConsigneeName?: string, StreetNumberLow?: string, StreetPrefix?: string, StreetName?: string, StreetType?: string, StreetSuffix?: string, BuildingName?: string, AddressExtendedInformation?: {Type?: string, Low?: string, High?: string, }, PoliticalDivision3?: string, PoliticalDivision2?: string, PoliticalDivision1?: string, CountryCode?: string, PostcodePrimaryLow?: string, PostcodeExtendedLow?: string, ResidentialAddressIndicator: string, }, Code?: string, Description?: string, SignedForByName?: string, }, COD?: {CODAmount?: {CurrencyCode?: string, MonetaryValue?: string, }, }, BillToAccount?: {Option: string, Number: string, }, LastPickupDate?: string, AccessPointLocationID?: string, }, Generic?: {ActivityType: string, TrackingNumber: string, ShipperNumber?: string, ShipmentReferenceNumber?: {BarCodeIndicator?: string, Number?: string, Code?: string, Value: string, }, PackageReferenceNumber?: {BarCodeIndicator?: string, Number?: string, Code?: string, Value: string, }, Service?: {Code: string, Description?: string, }, Activity?: {Date?: string, Time?: string, }, BillToAccount?: {Option: string, Number: string, }, ShipTo?: {LocationID?: string, ReceivingAddressName?: string, Bookmark?: string, }, RescheduledDeliveryDate?: string, FailureNotification?: {FailedEmailAddress?: string, FailureNotificationCode?: {Code?: string, Description?: string, }, }, }, }, }, }, Bookmark?: string, }, }
/** 
 * UPS Quantum View is a suite of services that gives you and your customers details regarding UPS shipments.
 * Get Quantum View Response
 * @example "{\r\n \"AccessRequest\": {\r\n \"AccessLicenseNumber\": \"Your Access License Number\",\r\n \"UserId\": \"Your UserID\",\r\n \"Password\": \"Your Password\"\r\n },\r\n \"LocatorRequest\": {\r\n \"Request\": {\r\n \"RequestAction\": \"Locator\",\r\n \"RequestOption\": \"1\",\r\n \"TransactionReference\": {\r\n \"CustomerContext\": \"XOLT Sample Code\"\r\n }\r\n },\r\n \"OriginAddress\": {\r\n \"AddressKeyFormat\": {\r\n \"AddressLine\": \"Street Address\",\r\n \"PoliticalDivision2\": \"City\",\r\n \"PoliticalDivision1\": \"State\",\r\n \"PostcodePrimaryLow\": \"12345\",\r\n \"PostcodeExtendedLow\": \"1234\",\r\n \"CountryCode\": \"US\"\r\n }\r\n },\r\n \"Translate\": {\r\n \"Locale\": \"en_US\"\r\n },\r\n \"UnitOfMeasurement\": {\r\n \"Code\": \"MI\"\r\n },\r\n \"LocationSearchCriteria\": {\r\n \"SearchOption\": {\r\n \"OptionType\": {\r\n \"Code\": \"01\"\r\n },\r\n \"OptionCode\": {\r\n \"Code\": \"002\"\r\n }\r\n },\r\n \"MaximumListSize\": \"1\",\r\n \"SearchRadius\": \"50\"\r\n }\r\n }\r\n}\r\n"
*/
export const post_quantum_view = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_quantum_view_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/QVEvents`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_rate_type = any
/** 
 * The Rating API is used when rating or shopping a shipment.
 * The Rating API is used when rating or shopping a shipment.
 * @example {"RateRequest":{"Request":{"SubVersion":"1703","TransactionReference":{"CustomerContext":" "}},"Shipment":{"ShipmentRatingOptions":{"UserLevelDiscountIndicator":"TRUE"},"Shipper":{"Name":"Billy Blanks","ShipperNumber":" ","Address":{"AddressLine":"366 Robin LN SE","City":"Marietta","StateProvinceCode":"GA","PostalCode":"30067","CountryCode":"US"}},"ShipTo":{"Name":"Sarita Lynn","Address":{"AddressLine":"355 West San Fernando Street","City":"San Jose","StateProvinceCode":"CA","PostalCode":"95113","CountryCode":"US"}},"ShipFrom":{"Name":"Billy Blanks","Address":{"AddressLine":"366 Robin LN SE","City":"Marietta","StateProvinceCode":"GA","PostalCode":"30067","CountryCode":"US"}},"Service":{"Code":"03","Description":"Ground"},"ShipmentTotalWeight":{"UnitOfMeasurement":{"Code":"LBS","Description":"Pounds"},"Weight":"10"},"Package":{"PackagingType":{"Code":"02","Description":"Package"},"Dimensions":{"UnitOfMeasurement":{"Code":"IN"},"Length":"10","Width":"7","Height":"5"},"PackageWeight":{"UnitOfMeasurement":{"Code":"LBS"},"Weight":"7"}}}}}
*/
export const post_rate = async (
    base_url: string, 
    token: string, 
    path: {version: string,requestoption: string},  
    query: {additionalinfo: string},
    axios: Function
): Promise<{data: post_rate_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/${path.version}/rating/${path.requestoption}`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}
export type post_ship_accept_type = {ShipAcceptResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, }, }, ShipmentResults: {Disclaimer?: {Code: string, Description: string, }, InvoiceNumber?: string, ShipmentCharges?: {RateChart?: string, BaseServiceCharge?: {CurrencyCode: string, MonetaryValue: string, }, TransportationCharges: {CurrencyCode: string, MonetaryValue: string, }, AccessorialCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, SurCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, ItemizedCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, ServiceOptionsCharges: {CurrencyCode: string, MonetaryValue: string, }, TaxCharges?: {Type: string, MonetaryValue: string, }, TotalCharges: {CurrencyCode: string, MonetaryValue: string, }, TotalChargesWithTaxes?: {CurrencyCode: string, MonetaryValue: string, }, }, NegotiatedRateCharges?: {AccessorialCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, SurCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, ItemizedCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, TransportationCharges?: {CurrencyCode: string, MonetaryValue: string, }, TaxCharges?: {Type: string, MonetaryValue: string, }, TotalCharge?: {CurrencyCode: string, MonetaryValue: string, }, TotalChargesWithTaxes?: {CurrencyCode: string, MonetaryValue: string, }, }, FRSShipmentData?: {TransportationCharges: {GrossCharge: {CurrencyCode: string, MonetaryValue: string, }, DiscountAmount: {CurrencyCode: string, MonetaryValue: string, }, DiscountPercentage: string, NetCharge: {CurrencyCode: string, MonetaryValue: string, }, }, FreightDensityRate?: {Density: string, TotalCubicFeet: string, }, HandlingUnits?: {Quantity: string, Type: {Code: string, Description?: string, }, Dimensions: {UnitOfMeasurement: {Code: string, Description?: string, }, Length: string, Width: string, Height: string, }, AdjustedHeight?: {Value: string, UnitOfMeasurement: {Code: string, Description?: string, }, }, }, }, RatingMethod?: string, BillableWeightCalculationMethod?: string, BillingWeight: {UnitOfMeasurement: {Code: string, Description?: string, }, Weight: string, }, ShipmentIdentificationNumber: string, MIDualReturnShipmentKey?: string, PickupRequestNumber: string, PackageResults?: {TrackingNumber: string, BaseServiceCharge?: {CurrencyCode: string, MonetaryValue: string, }, ServiceOptionsCharges?: {CurrencyCode: string, MonetaryValue: string, }, NonMachineableCharges?: {CurrencyCode: string, MonetaryValue: string, }, NonDDUCharges?: {CurrencyCode: string, MonetaryValue: string, }, SurePostDasCharges?: {CurrencyCode: string, MonetaryValue: string, }, ShippingLabel?: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, GraphicImagePart: string, InternationalSignatureGraphicImage?: string, HTMLImage?: string, PDF417?: string, }, ShippingReturnSlip?: {Image?: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, }, ShippingReceipt?: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, USPSPICNumber?: string, CN22Number?: string, Accessorial?: {Code: string, Description?: string, }, SimpleRate?: {Code: string, }, SensorID: string, Form?: {Code: string, Description: string, Image?: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, FormGroupId?: string, FormGroupIdName?: string, }, ItemizedCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, NegotiatedCharges?: {ItemizedCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, }, }, ControlLogReceipt?: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, Form?: {Code: string, Description: string, Image?: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, FormGroupId?: string, FormGroupIdName?: string, }, CODTurnInPage?: {Image: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, }, HighValueReport?: {Image: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, }, LabelURL?: string, LocalLanguageLabelURL?: string, ReceiptURL?: string, LocalLanguageReceiptURL?: string, DGPaperImage?: string, MasterCartonID?: string, }, }, }
/** 
 * The Shipping Package API gives the application many ways to manage the shipment of packages to their 
destination
 * The Shipping API makes UPS shipping services available to client applications that communicate with UPS 
using the Internet
 * @example undefined
*/
export const post_ship_accept = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_ship_accept_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/Ship`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_ship_confirm_type = {ShipConfirmResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, }, }, ShipmentResults: {Disclaimer?: {Code: string, Description: string, }, ShipmentCharges?: {RateChart?: string, BaseServiceCharge?: {CurrencyCode: string, MonetaryValue: string, }, TransportationCharges: {CurrencyCode: string, MonetaryValue: string, }, AccessorialCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, SurCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, ItemizedCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, ServiceOptionsCharges: {CurrencyCode: string, MonetaryValue: string, }, TaxCharges?: {Type: string, MonetaryValue: string, }, TotalCharges: {CurrencyCode: string, MonetaryValue: string, }, TotalChargesWithTaxes?: {CurrencyCode: string, MonetaryValue: string, }, }, NegotiatedRateCharges?: {AccessorialCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, SurCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, ItemizedCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, TransportationCharges?: {CurrencyCode: string, MonetaryValue: string, }, TaxCharges?: {Type: string, MonetaryValue: string, }, TotalCharge?: {CurrencyCode: string, MonetaryValue: string, }, TotalChargesWithTaxes?: {CurrencyCode: string, MonetaryValue: string, }, }, FRSShipmentData?: {TransportationCharges: {GrossCharge: {CurrencyCode: string, MonetaryValue: string, }, DiscountAmount: {CurrencyCode: string, MonetaryValue: string, }, DiscountPercentage: string, NetCharge: {CurrencyCode: string, MonetaryValue: string, }, }, FreightDensityRate?: {Density: string, TotalCubicFeet: string, }, HandlingUnits?: {Quantity: string, Type: {Code: string, Description?: string, }, Dimensions: {UnitOfMeasurement: {Code: string, Description?: string, }, Length: string, Width: string, Height: string, }, AdjustedHeight?: {Value: string, UnitOfMeasurement: {Code: string, Description?: string, }, }, }, }, RatingMethod?: string, BillableWeightCalculationMethod?: string, BillingWeight: {UnitOfMeasurement: {Code: string, Description?: string, }, Weight: string, }, ShipmentIdentificationNumber: string, MIDualReturnShipmentKey?: string, ShipmentDigest?: string, }, }, }
/** 
 * The Shipping Package API gives the application many ways to manage the shipment of packages to their 
destination
 * The Shipping API makes UPS shipping services available to client applications that communicate with UPS 
using the Internet
 * @example undefined
*/
export const post_ship_confirm = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_ship_confirm_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/Ship`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_shipment_type = {ShipmentResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, }, }, ShipmentResults: {Disclaimer?: {Code: string, Description: string, }, InvoiceNumber?: string, ShipmentCharges?: {RateChart?: string, BaseServiceCharge?: {CurrencyCode: string, MonetaryValue: string, }, TransportationCharges: {CurrencyCode: string, MonetaryValue: string, }, AccessorialCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, SurCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, ItemizedCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, ServiceOptionsCharges: {CurrencyCode: string, MonetaryValue: string, }, TaxCharges?: {Type: string, MonetaryValue: string, }, TotalCharges: {CurrencyCode: string, MonetaryValue: string, }, TotalChargesWithTaxes?: {CurrencyCode: string, MonetaryValue: string, }, }, NegotiatedRateCharges?: {AccessorialCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, SurCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, ItemizedCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, TransportationCharges?: {CurrencyCode: string, MonetaryValue: string, }, TaxCharges?: {Type: string, MonetaryValue: string, }, TotalCharge?: {CurrencyCode: string, MonetaryValue: string, }, TotalChargesWithTaxes?: {CurrencyCode: string, MonetaryValue: string, }, }, FRSShipmentData?: {TransportationCharges: {GrossCharge: {CurrencyCode: string, MonetaryValue: string, }, DiscountAmount: {CurrencyCode: string, MonetaryValue: string, }, DiscountPercentage: string, NetCharge: {CurrencyCode: string, MonetaryValue: string, }, }, FreightDensityRate?: {Density: string, TotalCubicFeet: string, }, HandlingUnits?: {Quantity: string, Type: {Code: string, Description?: string, }, Dimensions: {UnitOfMeasurement: {Code: string, Description?: string, }, Length: string, Width: string, Height: string, }, AdjustedHeight?: {Value: string, UnitOfMeasurement: {Code: string, Description?: string, }, }, }, }, RatingMethod?: string, BillableWeightCalculationMethod?: string, BillingWeight: {UnitOfMeasurement: {Code: string, Description?: string, }, Weight: string, }, ShipmentIdentificationNumber?: string, MIDualReturnShipmentKey?: string, PickupRequestNumber?: string, PackageResults?: {TrackingNumber: string, BaseServiceCharge?: {CurrencyCode: string, MonetaryValue: string, }, ServiceOptionsCharges?: {CurrencyCode: string, MonetaryValue: string, }, NonMachineableCharges?: {CurrencyCode: string, MonetaryValue: string, }, NonDDUCharges?: {CurrencyCode: string, MonetaryValue: string, }, SurePostDasCharges?: {CurrencyCode: string, MonetaryValue: string, }, ShippingLabel?: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, GraphicImagePart: string, InternationalSignatureGraphicImage?: string, HTMLImage?: string, PDF417?: string, }, ShippingReturnSlip?: {Image: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, }, ShippingReceipt?: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, USPSPICNumber?: string, CN22Number?: string, Accessorial?: {Code: string, Description?: string, }, SimpleRate?: {Code: string, }, SensorID: string, Form?: {Code: string, Description: string, Image?: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, FormGroupId?: string, FormGroupIdName?: string, }, ItemizedCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, NegotiatedCharges?: {ItemizedCharges?: {Code: string, Description?: string, CurrencyCode: string, MonetaryValue: string, SubType?: string, }, }, }, ControlLogReceipt?: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, Form?: {Code: string, Description: string, Image?: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, FormGroupId?: string, FormGroupIdName?: string, }, CODTurnInPage?: {Image: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, }, HighValueReport?: {Image: {ImageFormat: {Code: string, Description?: string, }, GraphicImage: string, }, }, LabelURL?: string, LocalLanguageLabelURL?: string, ReceiptURL?: string, LocalLanguageReceiptURL?: string, DGPaperImage?: string, MasterCartonID?: string, }, }, }
/** 
 * The Shipping Package API gives the application many ways to manage the shipment of packages to their 
destination
 * The Shipping API makes UPS shipping services available to client applications that communicate with UPS 
using the Internet
 * @example {"ShipmentRequest":{"Shipment":{"Description":"1206 PTR","Shipper":{"Name":"ShipperName","AttentionName":"AttentionName","TaxIdentificationNumber":"TaxID","Phone":{"Number":"1234567890"},"ShipperNumber":"ShipperNumber","Address":{"AddressLine":"AddressLine","City":"City","StateProvinceCode":"StateProvince","PostalCode":"PostalCode","CountryCode":"CountryCode"}},"ShipTo":{"Name":"ShipToName","AttentionName":"AttentionName","Phone":{"Number":"1234567890"},"FaxNumber":"1234567999","TaxIdentificationNumber":"456999","Address":{"AddressLine":"AddressLine","City":"City","StateProvinceCode":"StateProvince","PostalCode":"PostalCode","CountryCode":"CountryCode"}},"ShipFrom":{"Name":"ShipperName","AttentionName":"AttentionName","Phone":{"Number":"1234567890"},"FaxNumber":"1234567999","TaxIdentificationNumber":"456999","Address":{"AddressLine":"AddressLine","City":"City","StateProvinceCode":"StateProvince","PostalCode":"PsotalCode","CountryCode":"CountryCode"}},"PaymentInformation":{"ShipmentCharge":{"Type":"01","BillShipper":{"AccountNumber":"AccountNumber"}}},"Service":{"Code":"01","Description":"Expedited"},"Package":[{"Description":"International Goods","Packaging":{"Code":"02"},"PackageWeight":{"UnitOfMeasurement":{"Code":"LBS"},"Weight":"10"},"PackageServiceOptions":""},{"Description":"International Goods","Packaging":{"Code":"02"},"PackageWeight":{"UnitOfMeasurement":{"Code":"LBS"},"Weight":"20"},"PackageServiceOptions":""}],"ItemizedChargesRequestedIndicator":"","RatingMethodRequestedIndicator":"","TaxInformationIndicator":"","ShipmentRatingOptions":{"NegotiatedRatesIndicator":""}},"LabelSpecification":{"LabelImageFormat":{"Code":"GIF"}}}}
*/
export const post_shipment = async (
    base_url: string, 
    token: string, 
    path: {version: string},  
    query: {additionaladdressvalidation: string},
    axios: Function
): Promise<{data: post_shipment_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/${path.version}/shipments`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}
export type post_time_in_transit_type = {TimeInTransitResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, TransactionIdentifier?: string, }, }, TransitResponse?: {ShipFrom: {Address: {Town?: string, City?: string, StateProvinceCode?: string, CountryCode: string, Country: string, PostalCode?: string, }, }, ShipTo: {Address: {Town?: string, City?: string, StateProvinceCode?: string, CountryCode: string, Country: string, PostalCode?: string, ResidentialAddressIndicator?: string, }, }, PickupDate: string, ShipmentWeight?: {UnitOfMeasurement: {Code: string, Description?: string, }, Weight: string, }, InvoiceLineTotal?: {CurrencyCode: string, MonetaryValue: string, }, DocumentsOnlyIndicator?: string, BillType?: string, MaximumListSize?: string, ServiceSummary: {Service: {Code: string, Description?: string, }, GuaranteedIndicator?: string, Disclaimer?: string, EstimatedArrival: {Arrival: {Date: string, Time?: string, }, BusinessDaysInTransit: string, Pickup: {Date: string, Time?: string, }, DayOfWeek: string, CustomerCenterCutoff?: string, DelayCount?: string, HolidayCount?: string, RestDays?: string, TotalTransitDays?: string, }, SaturdayDelivery?: string, SaturdayDeliveryDisclaimer?: string, SundayDelivery?: string, SundayDeliveryDisclaimer?: string, }, AutoDutyCode?: string, Disclaimer?: string, }, CandidateResponse?: {ShipFromList?: {Candidate: {Address: {Town?: string, City?: string, StateProvinceCode?: string, CountryCode: string, PostcodePrimaryLow?: string, PostcodePrimaryHigh?: string, }, }, }, ShipToList?: {Candidate: {Address: {Town?: string, City?: string, StateProvinceCode?: string, CountryCode: string, PostcodePrimaryLow?: string, PostcodePrimaryHigh?: string, }, }, }, }, }, }
/** 
 * The Time In Transit API is used to determine the length of time required to ship a particular package, and compare  delivery times for various UPS services.
 * Get Time and Transit Response
 * @example "{\r\n \"TimeInTransitRequest\": {\r\n \"Request\": {\r\n \"RequestOption\": \"TNT\",\r\n \"TransactionReference\": {\r\n \"CustomerContext\": \"\",\r\n \"TransactionIdentifier\": \"\"\r\n }\r\n },\r\n \"ShipFrom\": {\r\n \"Address\": {\r\n \"StateProvinceCode\": \"StateProvinceCode\",\r\n \"CountryCode\": \"CountryCode\",\r\n \"PostalCode\": \"PostalCode\"\r\n }\r\n },\r\n \"ShipTo\": {\r\n \"Address\": {\r\n \"StateProvinceCode\": \"StateProvinceCode\",\r\n \"CountryCode\": \"CountryCode\",\r\n \"PostalCode\": \"PostalCode\"\r\n }\r\n },\r\n \"Pickup\": {\r\n \"Date\": \"Date\"\r\n },\r\n \"ShipmentWeight\": {\r\n \"UnitOfMeasurement\": {\r\n \"Code\": \"Code\",\r\n \"Description\": \"Description\"\r\n },\r\n \"Weight\": \"Weight\"\r\n },\r\n \"MaximumListSize\": \"MaximumListSize\"\r\n }\r\n}\r\n"
*/
export const post_time_in_transit = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_time_in_transit_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/TimeInTransit`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_track_type = {TrackResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext: string, TransactionIdentifier?: string, }, }, Shipment: {InquiryNumber: {Code: string, Description: string, Value: string, }, ShipmentType?: {Code: string, Description: string, }, CandidateBookmark?: string, ShipperNumber?: string, ShipmentAddress: {Type: {Code: string, Description: string, }, Address: {AddressLine: string, City: string, StateProvinceCode: string, PostalCode: string, CountryCode: string, }, }, ShipmentWeight?: {UnitOfMeasurement: {Code: string, }, Weight: string, }, Service?: {Code: string, Description: string, }, ReferenceNumber?: {Code: string, Description: string, Value: string, }, CurrentStatus?: {Code: string, Description: string, }, PickupDate?: string, ServiceCenter?: {Type: {Code: string, Description: string, }, Address: {City: string, StateProvinceCode: string, }, }, DeliveryDateUnavailable?: {Type: string, Description: string, }, DeliveryDetail?: {Type: {Code: string, Description: string, }, Date: string, Time: string, }, Volume?: {UnitOfMeasurement: {Code: string, Description: string, }, Value: string, }, BillToName?: string, NumberOfPackagingUnit?: {Type: {Code: string, Description: string, }, Value: string, }, COD?: {Amount: {CurrencyCode: string, MonetaryValue: string, }, }, SignedForByName?: string, Activity?: {ActivityLocation?: {Address: {AddressLine: string, City: string, StateProvinceCode: string, PostalCode: string, CountryCode: string, }, TransportFacility?: {Type: string, Code: string, }, Code: string, Description: string, SignedForByName?: string, }, Description: string, Date: string, Time: string, Trailer: string, }, OriginPortDetail?: {OriginPort: string, EstimatedDeparture: {Date: string, Time: string, }, }, DestinationPortDetail?: {DestinationPort: string, EstimatedArrival: {Date: string, Time: string, }, }, DescriptionOfGoods?: string, CargoReady?: {Date: string, Time: string, }, Manifest?: {Date: string, Time: string, }, CarrierActivityInformation: {CarrierId: string, Description: string, Status: string, Arrival: {Date: string, Time: string, }, Departure: {Date: string, Time: string, }, OriginPort: string, DestinationPort: string, }, Document: {Type: {Code: string, Description: string, }, Content: string, Format: {Code?: string, Description: string, }, }, FileNumber: string, Appointment?: {Made: {Date: string, Time: string, }, Requested: {Date: string, Time: string, }, BeginTime: string, EndTime: string, }, Package?: {TrackingNumber: string, DeliveryIndicator: string, DeliveryDate: string, EstimatedDeliveryWindow?: {Date: string, StartTime: string, EndTime: string, }, SRSizeCode?: string, Redirect: {CompanyName: string, LocationID: string, PickupDate: string, }, DeliveryDetail: {Type: {Code: string, Description: string, }, Date: string, Time: string, }, PackageAddress?: {Type: {Code: string, Description: string, }, Address: {AddressLine: string, City: string, StateProvinceCode: string, PostalCode: string, CountryCode: string, }, }, PackageServiceOption?: {Type: {Code: string, Description: string, }, Value: string, }, COD?: {Amount: {CurrencyCode: string, MonetaryValue: string, }, Status: {Code: string, Description?: string, }, ControlNumber: string, }, Activity?: {AlternateTrackingInfo: {Type: string, Value: string, }, ActivityLocation?: {Address: {AddressLine: string, City: string, StateProvinceCode: string, PostalCode: string, CountryCode: string, }, TransportFacility?: {Type: string, Code: string, }, Code: string, Description: string, SignedForByName?: string, }, Status?: {Type: string, Description?: string, Code: string, }, Date: string, Time: string, DeliveryDateFromManifestIndicator?: string, NextScheduleActivity?: {Date: string, Time: string, }, GMTDate?: string, GMTTime?: string, GMTOffset?: string, Document?: {Type: {Code: string, Description: string, }, Content: string, Format: {Code?: string, Description: string, }, }, AdditionalAttribute?: {Code: string, Description: string, Value: string, }, }, Message?: {Code: string, Description: string, }, PackageWeight?: {UnitOfMeasurement: {Code: string, Description: string, }, Weight: string, }, ReferenceNumber?: {Code: string, Value: string, }, AlternateTrackingNumber?: string, AlternateTrackingInfo?: {Type: string, Value: string, }, DimensionalWeightScanIndicator?: string, PreauthorizedReturnInformation?: {ReturnEligibilityIndicator?: string, ReturnExpirationDate?: string, ReturnRequestURL?: string, OriginalTrackingNumber?: string, ReturnTrackingNumber?: string, }, }, QuantumViewNotification?: {Status: {Code: string, Description?: string, }, FailureDetail?: {Code: string, Description: string, TrackingNumber?: string, }, }, }, Disclaimer?: string, }, }
/** 
 * The Tracking API supports Package, Ground Freight and Air Freight shipments.
 * Get Tracking Response
 * @example "{\r\n }\r\n"
*/
export const post_track = async (
    base_url: string, 
    token: string, 
    path: {inquiryNumber: string},  
    query: {locale?: string},
    axios: Function
): Promise<{data: post_track_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/track/v1/details/${path.inquiryNumber}`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}
export type post_upload_type = any
/** 
 * The Paperless Document API web service allows the users to upload,delete and push to image repository their own customized trade documents for customs clearance to Forms History. 
 * The Paperless Document API web service allows the users to upload,delete and push to image repository their own customized trade documents for customs clearance to Forms History. 
 * @example {"UPSSecurity":{"UsernameToken":{"Username":"Your User Id","Password":"Your Password"},"ServiceAccessToken":{"AccessLicenseNumber":"Your Access License Number"}},"UploadRequest":{"ShipperNumber":"Your Shipper Number","Request":{"TransactionReference":{}},"UserCreatedForm":{"UserCreatedFormFileName":"TestFile.txt","UserCreatedFormFileFormat":"txt","UserCreatedFormDocumentType":"013","UserCreatedFormFile":"Tm90aWNlDQpJbiBhbGwgY29tbXVuaWNhdGlvbnMgd2l0aCBVUFMgY29uY2VybmluZyB0aGlzIGRvY3VtZW50LCBwbGVhc2UgcmVmZXIgdG8gdGhlIGRvY3VtZW50IGRhdGUgbG9jYXRlZCBvbiB0aGUgY292ZXIuDQpDb3B5cmlnaHQNClRoZSB1c2UsIGRpc2Nsb3N1cmUsIHJlcHJvZHVjdGlvbiwgbW9kaWZpY2F0aW9uLCB0cmFuc2Zlciwgb3IgdHJhbnNtaXR0YWwgb2YgdGhpcyB3b3JrIGZvciBhbnkgcHVycG9zZSBpbiBhbnkgZm9ybSBvciBieSBhbnkgbWVhbnMgd2l0aG91dCB0aGUgd3JpdHRlbiBwZXJtaXNzaW9uIG9mIFVuaXRlZCBQYXJjZWwgU2VydmljZSBpcyBzdHJpY3RseSBwcm9oaWJpdGVkLg0KwqkgQ29weXJpZ2h0IDIwMTYgVW5pdGVkIFBhcmNlbCBTZXJ2aWNlIG9mIEFtZXJpY2EsIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC4NClRyYWRlbWFya3MNClVQUyBPbkxpbmXCriBpcyBhIHJlZ2lzdGVyZWQgdHJhZGVtYXJrIG9mIFVuaXRlZCBQYXJjZWwgU2VydmljZSBvZiBBbWVyaWNhLCBJbmMuIEFsbCBvdGhlciB0cmFkZW1hcmtzIGFyZSB0aGUgcHJvcGVydHkgb2YgdGhlaXIgcmVzcGVjdGl2ZSBvd25lcnMuDQpTb21lIG9mIHRoZSBVUFMgY29ycG9yYXRlIGFwcGxpY2F0aW9ucyB1c2UgVS5TLiBjaXR5LCBzdGF0ZSwgYW5kIHBvc3RhbCBjb2RlIGluZm9ybWF0aW9uIG9idGFpbmVkIGJ5IFVuaXRlZCBQYXJjZWwgU2VydmljZSBvZiBBbWVyaWNhLCBJbmMuIHVuZGVyIGEgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlIGZyb20gdGhlIFVuaXRlZCBTdGF0ZXMgUG9zdGFsIFNlcnZpY2UuIA0K"}}}
*/
export const post_upload = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: post_upload_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/PaperlessDocumentAPI`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}
export type post_void_shipment_type = {VoidShipmentResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, TransactionIdentifier?: string, }, }, SummaryResult: {Status: {Code: string, Description: string, }, }, PackageLevelResult?: {TrackingNumber: string, Status: {Code: string, Description: string, }, }, }, }
/** 
 * The Void Shipping API is used to cancel the previously scheduled shipment
 * The Void Shipping API is used to cancel the previously scheduled shipment
 * @example {}
*/
export const post_void_shipment = async (
    base_url: string, 
    token: string, 
    path: {shipmentidentificationnumber: string},  
    query: {trackingnumber?: string},
    axios: Function
): Promise<{data: post_void_shipment_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/ship/v1/shipments/cancel/${path.shipmentidentificationnumber}`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}
export type post_x_a_v_type = {XAVResponse: {Response: {ResponseStatus: {Code: string, Description: string, }, Alert?: {Code: string, Description: string, }, TransactionReference?: {CustomerContext?: string, TransactionIdentifier?: string, }, }, AddressValidationSource?: string, ValidAddressIndicator?: string, AmbiguousAddressIndicator?: string, NoCandidatesIndicator?: string, AddressClassification?: {Code: string, Description: string, }, Candidate?: {AddressClassification?: {Code: string, Description: string, }, AddressKeyFormat: {ConsigneeName?: string, AttentionName?: string, AddressLine?: string, Region?: string, PoliticalDivision2?: string, PoliticalDivision1?: string, PostcodePrimaryLow?: string, PostcodeExtendedLow?: string, Urbanization?: string, CountryCode: string, }, }, }, }
/** 
 * The Address Validation Street Level API can be used to check addresses against the United States Postal Service database of valid addresses in the U.S. and Puerto Rico.
 * The Address Validation Street Level API can be used to check addresses against the United States Postal Service database of valid addresses in the U.S. and Puerto Rico.
 * @example "{ \r\n \"XAVRequest\": {\r\n \"AddressKeyFormat\": {\r\n \"ConsigneeName\": \"RITZ CAMERA CENTERS-1749\",\r\n \"BuildingName\": \"Innoplex\",\r\n \"AddressLine\": [\r\n \"26601 ALISO CREEK ROAD\",\r\n \"STE D\",\r\n \"ALISO VIEJO TOWN CENTER\"\r\n ],\r\n \"Region\": \"ROSWELL,GA,30076-1521\",\r\n \"PoliticalDivision2\": \"ALISO VIEJO\",\r\n \"PoliticalDivision1\": \"CA\",\r\n \"PostcodePrimaryLow\": \"92656\",\r\n \"PostcodeExtendedLow\": \"1521\",\r\n \"Urbanization\": \"porto arundal\",\r\n \"CountryCode\": \"US\"\r\n }\r\n } }\r\n"
*/
export const post_x_a_v = async (
    base_url: string, 
    token: string, 
    path: {requestoption: undefined},  
    query: {regionalrequestindicator?: string,maximumcandidatelistsize?: undefined},
    axios: Function
): Promise<{data: post_x_a_v_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/addressvalidation/v1/${path.requestoption}`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}