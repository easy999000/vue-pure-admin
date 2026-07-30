/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Account {
  /** @format int32 */
  AccountID?: number;
  AccountNumber?: string | null;
  /** @format date-time */
  CreateTime?: string;
  /** @format date-time */
  LastLoginTime?: string;
  Password?: string | null;
  /** @format int32 */
  Status?: number;
}

export interface AccountPageResult {
  /** @format int32 */
  AccountID?: number;
  AccountNumber?: string | null;
  /** @format date-time */
  CreateTime?: string;
  /** @format date-time */
  LastLoginTime?: string;
  /** @format date-time */
  Birthday?: string;
  Name?: string | null;
  Notes?: string | null;
  /** @format int32 */
  Sex?: number;
  Telephone?: string | null;
  /** @format int32 */
  Status?: number;
}

export interface AccountPageResultListResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: AccountPageResult[] | null;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface AccountPageResultPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: AccountPageResult[] | null;
}

export interface AccountPageResultPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: AccountPageResultPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface Accountsetting {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccentID?: number;
  Name?: string | null;
  Type?: string | null;
  Value?: string | null;
}

export interface AccountsettingResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: Accountsetting;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface ApiInfoPageParam {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  ID?: number | null;
  IsMenu?: boolean | null;
  Name?: string | null;
  Notes?: string | null;
  /** @format int32 */
  ParentID?: number | null;
  Action?: string | null;
  Area?: string | null;
  Controller?: string | null;
  Path?: string | null;
  /** @format int32 */
  Type?: number | null;
}

export interface Apiinfo {
  /** @format int32 */
  ID?: number;
  Action?: string | null;
  Area?: string | null;
  Controller?: string | null;
  IsMenu?: boolean;
  Name?: string | null;
  Notes?: string | null;
  /** @format int32 */
  ParentID?: number;
  Path?: string | null;
  /** @format int32 */
  Sort?: number;
  /** @format int32 */
  Type?: number | null;
  /** @format date-time */
  UpdateTime?: string;
  TypeName?: string | null;
}

export interface ApiinfoPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Apiinfo[] | null;
}

export interface ApiinfoPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: ApiinfoPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface ApiinfoResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: Apiinfo;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface ApprovalRecords {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  AccountName?: string | null;
  /** @format int32 */
  ApprovalID?: number;
  /** @format int32 */
  ApprovalStatus?: number;
  /** @format date-time */
  ApprovalTime?: string;
  /** @format int32 */
  FlowType?: number;
}

export interface ChangeMyPasswordDTO {
  /** @format int32 */
  AccountID?: number;
  OldPassword?: string | null;
  NewPassword?: string | null;
}

export interface ContractInfoParam {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  ID?: number | null;
  /** @format int32 */
  Status?: number | null;
  StatusList?: number[] | null;
  Title?: string | null;
  /** @format int32 */
  TypeID?: number | null;
  RoleNames?: string[] | null;
  /** @format int32 */
  AccountID?: number | null;
}

export interface Contractinfo {
  /** @format int32 */
  ID?: number;
  /**
   * 申请人
   * @format int32
   */
  AccountID?: number;
  Annex1?: string | null;
  Annex2?: string | null;
  /** @format int32 */
  AssessID1?: number | null;
  /** @format int32 */
  AssessID2?: number | null;
  /** @format int32 */
  AssessID3?: number | null;
  /** @format int32 */
  AssessID4?: number | null;
  /** @format int32 */
  AssessID5?: number | null;
  /** @format int32 */
  AssessID6?: number | null;
  /** @format date-time */
  AssessTime1?: string | null;
  /** @format date-time */
  AssessTime2?: string | null;
  /** @format date-time */
  AssessTime3?: string | null;
  /** @format date-time */
  AssessTime4?: string | null;
  /** @format date-time */
  AssessTime5?: string | null;
  /** @format date-time */
  AssessTime6?: string | null;
  /** @format date-time */
  CreateTime?: string;
  Mode?: string | null;
  Notes?: string | null;
  PartBBank?: string | null;
  PartBBankAccount?: string | null;
  PartBBankUser?: string | null;
  PartBName?: string | null;
  /** @format int32 */
  PayMode?: number | null;
  /**
   * 合同价格
   * @format double
   */
  Price?: number | null;
  /** 签约对象 */
  SignedWith?: string | null;
  /**
   * 签约时间
   * @format date-time
   */
  SigningTime?: string;
  /** @format int32 */
  Status?: number;
  /**
   * 税率
   * @format double
   */
  TaxRate?: number | null;
  /** 合同期限 */
  Term?: string | null;
  /** 标题 */
  Title?: string | null;
  /** @format int32 */
  TypeID?: number;
  TypeName?: string | null;
  StatusName?: string | null;
  ApprovalRoleName?: string | null;
  AccountName?: string | null;
  ApprovalRecordList?: ApprovalRecords[] | null;
}

export interface ContractinfoPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Contractinfo[] | null;
}

export interface ContractinfoPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: ContractinfoPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface ContractinfoResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: Contractinfo;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface Contracttype {
  /** @format int32 */
  ID?: number;
  Name?: string | null;
}

export interface ContracttypeListResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: Contracttype[] | null;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface CreditPayInfoParam {
  RoleNames?: string[] | null;
  /** @format int32 */
  AccountID?: number | null;
  /** @format int64 */
  ID?: number | null;
  /** @format date-time */
  CreateTime?: string | null;
  /** @format int32 */
  CreditType?: number | null;
  /** @format int32 */
  OrderID?: number | null;
  PartBBank?: string | null;
  PartBBankAccount?: string | null;
  PartBBankUser?: string | null;
  PartBName?: string | null;
  /** @format int32 */
  ProjectID?: number | null;
  /** @format int32 */
  Status?: number | null;
  StatusList?: number[] | null;
  Title?: string | null;
}

export interface Creditorder {
  /** @format int64 */
  ID?: number;
  /** @format int32 */
  AccountId?: number;
  /** @format int32 */
  BillID?: number;
  /** @format date-time */
  CreateTime?: string;
  /** @format int32 */
  CreditType?: number;
  /** @format double */
  PaidAmount?: number;
  PartBBank?: string | null;
  PartBBankAccount?: string | null;
  PartBBankUser?: string | null;
  PartBName?: string | null;
  /** @format int32 */
  ProjectID?: number;
  /** @format int32 */
  Status?: number;
  Title?: string | null;
  /** @format double */
  TotalAmount?: number;
  ProjectName?: string | null;
  ApprovalRoleName?: string | null;
  StatusName?: string | null;
  CreditTypeName?: string | null;
  /** @format double */
  UnpaidAmount?: number;
  /** @format double */
  TempAmount?: number;
}

export interface CreditorderPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Creditorder[] | null;
}

export interface CreditorderPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: CreditorderPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface Creditpayinfo {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  AssessID1?: number | null;
  /** @format int32 */
  AssessID2?: number | null;
  /** @format int32 */
  AssessID3?: number | null;
  /** @format int32 */
  AssessID4?: number | null;
  /** @format int32 */
  AssessID5?: number | null;
  /** @format int32 */
  AssessID6?: number | null;
  /** @format date-time */
  AssessTime1?: string | null;
  /** @format date-time */
  AssessTime2?: string | null;
  /** @format date-time */
  AssessTime3?: string | null;
  /** @format date-time */
  AssessTime4?: string | null;
  /** @format date-time */
  AssessTime5?: string | null;
  /** @format date-time */
  AssessTime6?: string | null;
  /** @format date-time */
  CreateTime?: string;
  PartBBank?: string | null;
  PartBBankAccount?: string | null;
  PartBBankUser?: string | null;
  PartBName?: string | null;
  /** @format int32 */
  ProjectID?: number;
  /** @format int32 */
  Status?: number;
  Title?: string | null;
  /** @format double */
  TotalAmount?: number;
  Items?: Creditpayitem[] | null;
  StatusName?: string | null;
  ProjectName?: string | null;
  AccountName?: string | null;
  /** @format double */
  PaidAmount?: number;
  ApprovalRecordList?: ApprovalRecords[] | null;
}

export interface CreditpayinfoPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Creditpayinfo[] | null;
}

export interface CreditpayinfoPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: CreditpayinfoPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface CreditpayinfoResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: Creditpayinfo;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface Creditpayitem {
  /** @format int32 */
  ID?: number;
  /** @format date-time */
  CreateTime?: string;
  /** @format int32 */
  InfoID?: number;
  /** @format int64 */
  OrderID?: number;
  /** @format double */
  PaidAmount?: number;
  /** @format int32 */
  ProjectID?: number;
  /** @format double */
  TotalAmount?: number;
  /** @format double */
  AlreadyAmount?: number;
  Title?: string | null;
  /** @format int32 */
  CreditType?: number;
  CreditTypeName?: string | null;
  PartBBank?: string | null;
  PartBBankAccount?: string | null;
  PartBBankUser?: string | null;
  PartBName?: string | null;
}

export interface Department {
  /** @format int32 */
  ID?: number;
  Name?: string | null;
  /** @format date-time */
  UpdateTime?: string;
}

export interface DepartmentPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Department[] | null;
}

export interface DepartmentPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: DepartmentPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface DepartmentResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: Department;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface EnquiryGroupPageParam {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int64 */
  ID?: number | null;
  Name?: string | null;
}

export interface EnquiryInfoDTO {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  QuotationAccountID?: number | null;
  /** @format date-time */
  CreateTime?: string | null;
  /** @format date-time */
  EndTime?: string | null;
  /** @format int32 */
  ProjectID?: number | null;
  ProjectName?: string | null;
  /** @format int32 */
  Status?: number | null;
  Title?: string | null;
  StatusName?: string | null;
  GroupList?: number[] | null;
  Items?: Enquiryitem[] | null;
  QuotationAccount?: Enquiryquotationaccountrelation[] | null;
  QuotationItems?: QuotationItemDTO[] | null;
}

export interface EnquiryInfoDTOResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: EnquiryInfoDTO;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface EnquiryItemsDTO {
  /** @format int64 */
  ID?: number;
  /** @format int32 */
  EnquiryInfoID?: number;
  /** @format int32 */
  MaterialID?: number;
  Notes?: string | null;
  /** @format double */
  Quantity?: number;
  Code?: string | null;
  Name?: string | null;
  Specifications?: string | null;
  /** @format int32 */
  Type?: number;
  Unit?: string | null;
  /** @format date-time */
  UpdateTime?: string;
  TypeStr?: string | null;
  QuotationItemList?: Quotationitem[] | null;
}

export interface Enquirygroup {
  /** @format int32 */
  ID?: number;
  Name?: string | null;
  Account?: Enquirygroupaccountrelation[] | null;
}

export interface EnquirygroupPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Enquirygroup[] | null;
}

export interface EnquirygroupPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: EnquirygroupPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface Enquirygroupaccountrelation {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  GroupID?: number;
  Account?: Account;
  EnquiryGroup?: Enquirygroup;
}

export interface Enquiryinfo {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  AssessID1?: number | null;
  /** @format int32 */
  AssessID2?: number | null;
  /** @format int32 */
  AssessID3?: number | null;
  /** @format date-time */
  AssessTime1?: string | null;
  /** @format date-time */
  AssessTime2?: string | null;
  /** @format date-time */
  AssessTime3?: string | null;
  /** @format date-time */
  CreateTime?: string;
  /** @format date-time */
  EndTime?: string;
  /** @format int32 */
  ProjectID?: number;
  /** @format int32 */
  Status?: number;
  Title?: string | null;
  Project?: Projectinfo;
  ProjectName?: string | null;
  ApprovalRoleName?: string | null;
  ProjectName2?: string | null;
  StatusName?: string | null;
  /** @format int32 */
  QuotationStatus?: number;
  QuotationStatusName?: string | null;
}

export interface EnquiryinfoPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Enquiryinfo[] | null;
}

export interface EnquiryinfoPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: EnquiryinfoPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface Enquiryitem {
  /** @format int64 */
  ID?: number;
  /** @format int32 */
  EnquiryInfoID?: number;
  /** @format int32 */
  MaterialID?: number;
  Notes?: string | null;
  /** @format double */
  Quantity?: number;
  Material?: Materialinfo;
  Code?: string | null;
  Name?: string | null;
  Specifications?: string | null;
  Unit?: string | null;
  /** @format int32 */
  Type?: number;
  TypeStr?: string | null;
}

export interface Enquiryquotationaccountrelation {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  EnquiryInfoID?: number;
  /** @format int32 */
  GroupID?: number;
  /** @format date-time */
  QuotationTime?: string | null;
  /** @format int32 */
  State?: number;
  Account?: Account;
  Group?: Enquirygroup;
  GroupName?: string | null;
}

export interface Int32Result {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  /** @format int32 */
  Data?: number;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface Int64Result {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  /** @format int64 */
  Data?: number;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface LaborInfoParam {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  RoleNames?: string[] | null;
  /** @format int32 */
  ID?: number | null;
  /** @format int32 */
  AccountID?: number | null;
  /** @format int32 */
  ProjectID?: number | null;
  ProjectIDList?: number[] | null;
  /** @format int32 */
  Status?: number | null;
  StatusList?: number[] | null;
  Title?: string | null;
  /** @format int32 */
  WinAccountID?: number | null;
}

export interface LaborPayParam {
  /** @format int32 */
  ID?: number;
  /** @format double */
  PayAmount?: number;
  /** @format int32 */
  AccountID?: number;
  ProjectIDList?: number[] | null;
  /** @format int32 */
  Status?: number | null;
  StatusList?: number[] | null;
  Items?: LaboraPayItem[] | null;
}

export interface LaboraPayInfo {
  /** @format int32 */
  Id?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format date-time */
  CreateTime?: string;
  /** @format int32 */
  IsSettlement?: number;
  /** @format int32 */
  LaboraId?: number;
  /** @format double */
  PayAmount?: number;
  /** @format int32 */
  ProjectID?: number;
  /** @format int32 */
  Status?: number;
  StatusName?: string | null;
  SettlementStatus?: string | null;
  ApprovalRoleName?: string | null;
  Title?: string | null;
  ProjectName?: string | null;
  /** @format double */
  FrozenAmount?: number;
  /** @format double */
  PaidAmount?: number;
  /** @format double */
  TotalAmount?: number;
  ApprovalRecordList?: ApprovalRecords[] | null;
  Items?: LaboraPayItem[] | null;
  TotalQuantity?: LaboraPayItem[] | null;
  /** @format int32 */
  TotalReviewQuantity?: number;
  /** @format double */
  TotalReviewAmount?: number;
  /** @format double */
  TotalReviewAmountPercent?: number;
}

export interface LaboraPayInfoPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: LaboraPayInfo[] | null;
}

export interface LaboraPayInfoPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: LaboraPayInfoPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface LaboraPayInfoResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: LaboraPayInfo;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface LaboraPayItem {
  /** @format int32 */
  Id?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  ApplicationQuantity?: number;
  /** @format int32 */
  LaboraInfoId?: number;
  /** @format int64 */
  LaboraItemId?: number;
  /** @format int32 */
  LaboraPayInfoId?: number;
  /**
   * 上期数量
   * @format int32
   */
  PreviousQuantity?: number;
  /** @format int32 */
  ProjectID?: number;
  /** @format int32 */
  ReviewQuantity?: number;
  /** @format double */
  UnitPrice?: number;
  JobCode?: string | null;
  JobName?: string | null;
  /** @format double */
  Quantity?: number;
  MaterialUnit?: string | null;
  /** @format int32 */
  CumulativeQuantity?: number;
  /** @format double */
  TotalCumulativeAmount?: number;
  /** @format double */
  TotalAmount?: number;
  /** @format double */
  TotalApplicationAmount?: number;
  /** @format double */
  TotalReviewAmount?: number;
  /** @format double */
  TotalPreviousAmount?: number;
}

export interface Laborinfo {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  Annex1?: string | null;
  Annex2?: string | null;
  /** @format int32 */
  AssessID1?: number | null;
  /** @format int32 */
  AssessID2?: number | null;
  /** @format int32 */
  AssessID3?: number | null;
  /** @format int32 */
  AssessID4?: number | null;
  /** @format int32 */
  AssessID5?: number | null;
  /** @format date-time */
  AssessTime1?: string | null;
  /** @format date-time */
  AssessTime2?: string | null;
  /** @format date-time */
  AssessTime3?: string | null;
  /** @format date-time */
  AssessTime4?: string | null;
  /** @format date-time */
  AssessTime5?: string | null;
  Content?: string | null;
  /** @format date-time */
  CreateTime?: string;
  /** @format double */
  FrozenAmount?: number;
  /** @format date-time */
  MeetingTime?: string;
  Notes?: string | null;
  /** @format double */
  PaidAmount?: number;
  PartBBank?: string | null;
  PartBBankAccount?: string | null;
  PartBBankUser?: string | null;
  PartBName?: string | null;
  Participants?: string | null;
  PartyB?: string | null;
  /** @format int32 */
  PayMode?: number;
  Place?: string | null;
  /** @format int32 */
  ProjectID?: number;
  /** @format int32 */
  Status?: number;
  Title?: string | null;
  /** @format double */
  TotalAmount?: number;
  Items?: Laboritem[] | null;
  ProjectName?: string | null;
  PartyA?: string | null;
  ApprovalRoleName?: string | null;
  StatusName?: string | null;
  PayModeName?: string | null;
  /** @format int32 */
  AccountStatus?: number;
  AccountStatusName?: string | null;
  ApprovalRecordList?: ApprovalRecords[] | null;
  /** @format double */
  PayAmount?: number;
}

export interface LaborinfoPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Laborinfo[] | null;
}

export interface LaborinfoPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: LaborinfoPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface LaborinfoResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: Laborinfo;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface Laborinfochange {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  Annex1?: string | null;
  Annex2?: string | null;
  /** @format int32 */
  AssessID1?: number | null;
  /** @format int32 */
  AssessID2?: number | null;
  /** @format int32 */
  AssessID3?: number | null;
  /** @format int32 */
  AssessID4?: number | null;
  /** @format int32 */
  AssessID5?: number | null;
  /** @format date-time */
  AssessTime1?: string | null;
  /** @format date-time */
  AssessTime2?: string | null;
  /** @format date-time */
  AssessTime3?: string | null;
  /** @format date-time */
  AssessTime4?: string | null;
  /** @format date-time */
  AssessTime5?: string | null;
  Content?: string | null;
  /** @format date-time */
  CreateTime?: string;
  /** @format double */
  FrozenAmount?: number;
  /** @format date-time */
  MeetingTime?: string;
  Notes?: string | null;
  /** @format double */
  PaidAmount?: number;
  PartBBank?: string | null;
  PartBBankAccount?: string | null;
  PartBBankUser?: string | null;
  PartBName?: string | null;
  Participants?: string | null;
  PartyB?: string | null;
  /** @format int32 */
  PayMode?: number;
  Place?: string | null;
  /** @format int32 */
  ProjectID?: number;
  /** @format int32 */
  SourceId?: number;
  /** @format int32 */
  Status?: number;
  Title?: string | null;
  /** @format double */
  TotalAmount?: number;
  Items?: Laboritemchange[] | null;
  ProjectName?: string | null;
  PartyA?: string | null;
  ApprovalRoleName?: string | null;
  StatusName?: string | null;
  PayModeName?: string | null;
  /** @format int32 */
  AccountStatus?: number;
  AccountStatusName?: string | null;
  ApprovalRecordList?: ApprovalRecords[] | null;
  /** @format double */
  PayAmount?: number;
}

export interface LaborinfochangePageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Laborinfochange[] | null;
}

export interface LaborinfochangePageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: LaborinfochangePageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface LaborinfochangeResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: Laborinfochange;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface Laboritem {
  /** @format int64 */
  ID?: number;
  /** @format double */
  Freight?: number;
  /** @format int32 */
  InfoID?: number;
  MaterialCode?: string | null;
  /** @format int32 */
  MaterialID?: number;
  MaterialName?: string | null;
  MaterialSpecifications?: string | null;
  MaterialUnit?: string | null;
  Notes?: string | null;
  /** @format int32 */
  PayMode?: number;
  /** @format int32 */
  ProjectID?: number;
  /** @format int64 */
  ProjectItemID?: number;
  /** @format double */
  Quantity?: number;
  /** @format double */
  Taxrate?: number;
  /** @format double */
  UnitPrice?: number;
  JobCode?: string | null;
  JobName?: string | null;
  /** @format double */
  PreQuantity?: number;
  /** @format double */
  PreviousQuantity?: number;
  PayModeStr?: string | null;
  /** @format double */
  TotalAmount?: number;
  /** @format int32 */
  PayQuantity?: number;
  /** @format double */
  TotalPayAmount?: number;
  /** @format double */
  PreviousQuantityAmount?: number;
}

export interface Laboritemchange {
  /** @format int64 */
  ID?: number;
  /** @format double */
  Freight?: number;
  /** @format int32 */
  InfoID?: number;
  MaterialCode?: string | null;
  /** @format int32 */
  MaterialID?: number;
  MaterialName?: string | null;
  MaterialSpecifications?: string | null;
  MaterialUnit?: string | null;
  Notes?: string | null;
  /** @format int32 */
  PayMode?: number;
  /** @format int32 */
  ProjectID?: number;
  /** @format int64 */
  ProjectItemID?: number;
  /** @format double */
  Quantity?: number;
  /** @format double */
  Taxrate?: number;
  /** @format double */
  UnitPrice?: number;
  JobCode?: string | null;
  JobName?: string | null;
  /** @format double */
  PreQuantity?: number;
  PayModeStr?: string | null;
  /** @format double */
  TotalAmount?: number;
}

export interface LeaseParam {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  ID?: number | null;
  /** @format int32 */
  AccountID?: number | null;
  RoleNames?: string[] | null;
  /** @format int32 */
  ProjectID?: number | null;
  ProjectIDList?: number[] | null;
  Title?: string | null;
  /** @format int32 */
  Status?: number | null;
  StatusList?: number[] | null;
  /** @format int32 */
  CompletionStatus?: number | null;
  CompletionStatusList?: number[] | null;
}

export interface Leaseinfo {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  Annex1?: string | null;
  Annex2?: string | null;
  /** @format int32 */
  CompletionStatus?: number;
  /**
   * 施工时间
   * @format date-time
   */
  ConstructionTime?: string | null;
  /** @format date-time */
  CreateTime?: string;
  Notes?: string | null;
  /** @format double */
  PaidAmount?: number;
  PartBBank?: string | null;
  PartBBankAccount?: string | null;
  PartBBankUser?: string | null;
  PartBName?: string | null;
  /** @format int32 */
  PayMode?: number;
  /** @format int32 */
  ProjectID?: number;
  /** @format int32 */
  Status?: number;
  Title?: string | null;
  /** @format double */
  TotalAmount?: number;
  Items?: Leaseitem[] | null;
  ProjectName?: string | null;
  ApprovalRoleName?: string | null;
  StatusName?: string | null;
  CompletionStatusName?: string | null;
  ApprovalRecordList?: ApprovalRecords[] | null;
  ApprovalCompletionRecordList?: ApprovalRecords[] | null;
}

export interface LeaseinfoPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Leaseinfo[] | null;
}

export interface LeaseinfoPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: LeaseinfoPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface LeaseinfoResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: Leaseinfo;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface Leaseitem {
  /** @format int64 */
  ID?: number;
  /** @format double */
  CompletionQuantity?: number;
  /** @format double */
  Freight?: number;
  /** @format int32 */
  InfoID?: number;
  MaterialCode?: string | null;
  /** @format int32 */
  MaterialID?: number;
  MaterialName?: string | null;
  MaterialSpecifications?: string | null;
  /** @format int32 */
  MaterialType?: number;
  MaterialUnit?: string | null;
  Notes?: string | null;
  /** @format int32 */
  PayMode?: number;
  /** @format int32 */
  ProjectID?: number;
  /** @format int64 */
  ProjectItemID?: number;
  /** @format double */
  Quantity?: number;
  /** @format double */
  Taxrate?: number;
  /** @format double */
  UnitPrice?: number;
  MaterialTypeStr?: string | null;
  JobItemCode?: string | null;
  JobItemName?: string | null;
  JobItemDescribe?: string | null;
  /** @format double */
  JobPreQuantity?: number;
  PayModeStr?: string | null;
  /** @format double */
  TotalAmount?: number;
}

export interface LoginDTO {
  Account?: string | null;
  Password?: string | null;
  VerificationCode?: string | null;
}

export interface MatchPriceDTO {
  /** @format int64 */
  ProcureID?: number;
  /** @format double */
  UnitPrice?: number;
  /** @format double */
  Freight?: number;
  /** @format double */
  Taxrate?: number;
}

export interface MatchPriceDTOListResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: MatchPriceDTO[] | null;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface MaterialInfoDTO {
  /** @format int32 */
  ID?: number | null;
  Name?: string | null;
  Code?: string | null;
  Specifications?: string | null;
  Unit?: string | null;
  /** @format date-time */
  UpdateTime?: string | null;
  /** @format int32 */
  Type?: number | null;
  TypeStr?: string | null;
  /** @format double */
  Freight?: number;
  /** @format double */
  Price?: number;
  /** @format double */
  Taxrate?: number;
}

export interface MaterialInfoDTOPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: MaterialInfoDTO[] | null;
}

export interface MaterialInfoDTOPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: MaterialInfoDTOPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface MaterialInfoDTOResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: MaterialInfoDTO;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface MaterialInfoPageParam {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  ID?: number | null;
  Name?: string | null;
  /** @format int32 */
  Type?: number | null;
  /** @format int32 */
  ProjectID?: number | null;
  TypeList?: number[] | null;
  Code?: string | null;
  Specifications?: string | null;
  Unit?: string | null;
  /** @format int32 */
  JobID?: number | null;
}

export interface Materialinfo {
  /** @format int32 */
  ID?: number;
  Code?: string | null;
  Name?: string | null;
  Specifications?: string | null;
  /** @format int32 */
  Type?: number;
  Unit?: string | null;
  /** @format date-time */
  UpdateTime?: string;
  TypeStr?: string | null;
  /** @format double */
  JobMaterialPreQuantity?: number;
  /** @format double */
  JobMaterialActualQuantity?: number;
  /** @format int64 */
  ProjectItemMaterialID?: number;
}

export interface MaterialinfoPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Materialinfo[] | null;
}

export interface MaterialinfoPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: MaterialinfoPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface MaterialinfoResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: Materialinfo;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface OfficeParam {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  ID?: number | null;
  /** @format int32 */
  AccountID?: number | null;
  roleNames?: string[] | null;
  Title?: string | null;
  /** @format int32 */
  Status?: number | null;
  StatusList?: number[] | null;
  StatusName?: string | null;
}

export interface Officeinfo {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  AssessID1?: number | null;
  /** @format int32 */
  AssessID2?: number | null;
  /** @format int32 */
  AssessID3?: number | null;
  /** @format int32 */
  AssessID4?: number | null;
  /** @format int32 */
  AssessID5?: number | null;
  /** @format int32 */
  AssessID6?: number | null;
  /** @format date-time */
  AssessTime1?: string | null;
  /** @format date-time */
  AssessTime2?: string | null;
  /** @format date-time */
  AssessTime3?: string | null;
  /** @format date-time */
  AssessTime4?: string | null;
  /** @format date-time */
  AssessTime5?: string | null;
  /** @format date-time */
  AssessTime6?: string | null;
  /** @format date-time */
  CreateTime?: string;
  Notes?: string | null;
  /** @format double */
  PaidAmount?: number;
  PartBBank?: string | null;
  PartBBankAccount?: string | null;
  PartBBankUser?: string | null;
  PartBName?: string | null;
  /** @format int32 */
  PayMode?: number;
  /** @format int32 */
  Status?: number;
  Title?: string | null;
  /** @format double */
  TotalAmount?: number;
  Items?: Officeitem[] | null;
  ApprovalRoleName?: string | null;
  StatusName?: string | null;
  ApprovalRecordList?: ApprovalRecords[] | null;
}

export interface OfficeinfoPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Officeinfo[] | null;
}

export interface OfficeinfoPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: OfficeinfoPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface OfficeinfoResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: Officeinfo;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface Officeitem {
  /** @format int64 */
  ID?: number;
  /** @format double */
  Freight?: number;
  /** @format int32 */
  InfoID?: number;
  MaterialCode?: string | null;
  /** @format int32 */
  MaterialID?: number;
  MaterialName?: string | null;
  MaterialSpecifications?: string | null;
  /** @format int32 */
  MaterialType?: number;
  MaterialUnit?: string | null;
  Notes?: string | null;
  /** @format int32 */
  PayMode?: number;
  /** @format double */
  Quantity?: number;
  /** @format double */
  Taxrate?: number;
  /** @format double */
  UnitPrice?: number;
  MaterialTypeStr?: string | null;
  PayModeStr?: string | null;
  /** @format double */
  TotalAmount?: number;
}

export interface OfficialInfoParam {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  ID?: number | null;
  /** @format int32 */
  Status?: number | null;
  StatusList?: number[] | null;
  Title?: string | null;
  /** @format int32 */
  TypeID?: number | null;
  RoleNames?: string[] | null;
  /** @format int32 */
  AccountID?: number | null;
}

export interface Officialinfo {
  /** @format int32 */
  ID?: number;
  /**
   * 申请人
   * @format int32
   */
  AccountID?: number;
  /** @format int32 */
  AssessID1?: number | null;
  /** @format int32 */
  AssessID2?: number | null;
  /** @format int32 */
  AssessID3?: number | null;
  /** @format int32 */
  AssessID4?: number | null;
  /** @format int32 */
  AssessID5?: number | null;
  /** @format date-time */
  AssessTime1?: string | null;
  /** @format date-time */
  AssessTime2?: string | null;
  /** @format date-time */
  AssessTime3?: string | null;
  /** @format date-time */
  AssessTime4?: string | null;
  /** @format date-time */
  AssessTime5?: string | null;
  /** @format date-time */
  CreateTime?: string;
  /** 送达单位 */
  DeliveryCompany?: string | null;
  /** 送达人 */
  DeliveryPerson?: string | null;
  FileName?: string | null;
  FileUsage?: string | null;
  Notes?: string | null;
  /** 签约对象 */
  SignedWith?: string | null;
  /**
   * 签约时间
   * @format date-time
   */
  SigningTime?: string;
  /** @format int32 */
  Status?: number;
  /** 标题 */
  Title?: string | null;
  /** @format int32 */
  TypeID?: number;
  TypeName?: string | null;
  StatusName?: string | null;
  ApprovalRoleName?: string | null;
  AccountName?: string | null;
  ApprovalRecordList?: ApprovalRecords[] | null;
}

export interface OfficialinfoPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Officialinfo[] | null;
}

export interface OfficialinfoPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: OfficialinfoPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface OfficialinfoResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: Officialinfo;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface ProcureMaterialApplyDTO {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number | null;
  Annex1?: string | null;
  Annex2?: string | null;
  PartBBank?: string | null;
  PartBBankAccount?: string | null;
  PartBBankUser?: string | null;
  PartBName?: string | null;
  /** @format int32 */
  PayMode?: number | null;
  /** @format int32 */
  ProjectID?: number | null;
  Title?: string | null;
  Items?: Procurematerialitem[] | null;
  /** @format double */
  TotalAmount?: number | null;
}

export interface ProcureParam {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  ID?: number | null;
  /** @format int32 */
  AccountID?: number | null;
  RoleNames?: string[] | null;
  /** @format int32 */
  ProjectID?: number | null;
  ProjectIDList?: number[] | null;
  Title?: string | null;
  /** @format int32 */
  Status?: number | null;
  StatusList?: number[] | null;
  StatusName?: string | null;
}

export interface Procurematerialinfo {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  Annex1?: string | null;
  Annex2?: string | null;
  /** @format int32 */
  AssessID1?: number | null;
  /** @format int32 */
  AssessID2?: number | null;
  /** @format int32 */
  AssessID3?: number | null;
  /** @format int32 */
  AssessID4?: number | null;
  /** @format int32 */
  AssessID5?: number | null;
  /** @format int32 */
  AssessID6?: number | null;
  /** @format date-time */
  AssessTime1?: string | null;
  /** @format date-time */
  AssessTime2?: string | null;
  /** @format date-time */
  AssessTime3?: string | null;
  /** @format date-time */
  AssessTime4?: string | null;
  /** @format date-time */
  AssessTime5?: string | null;
  /** @format date-time */
  AssessTime6?: string | null;
  /** @format date-time */
  CreateTime?: string;
  /** @format double */
  PaidAmount?: number;
  PartBBank?: string | null;
  PartBBankAccount?: string | null;
  PartBBankUser?: string | null;
  PartBName?: string | null;
  /** @format int32 */
  PayMode?: number;
  /** @format int32 */
  ProjectID?: number;
  /** @format int32 */
  Status?: number;
  Title?: string | null;
  /** @format double */
  TotalAmount?: number;
  Items?: Procurematerialitem[] | null;
  ProjectName?: string | null;
  ApprovalRoleName?: string | null;
  StatusName?: string | null;
  ApprovalRecordList?: ApprovalRecords[] | null;
}

export interface ProcurematerialinfoPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Procurematerialinfo[] | null;
}

export interface ProcurematerialinfoPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: ProcurematerialinfoPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface ProcurematerialinfoResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: Procurematerialinfo;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface Procurematerialitem {
  /** @format int64 */
  ID?: number;
  /** @format double */
  Freight?: number;
  /** @format int32 */
  InfoID?: number;
  MaterialCode?: string | null;
  /** @format int32 */
  MaterialID?: number;
  MaterialName?: string | null;
  MaterialSpecifications?: string | null;
  /** @format int32 */
  MaterialType?: number;
  MaterialUnit?: string | null;
  Notes?: string | null;
  /** @format int32 */
  PayMode?: number;
  /** @format int32 */
  ProjectID?: number;
  /** @format int64 */
  ProjectItemID?: number;
  /** @format int64 */
  ProjectItemMaterialID?: number;
  /** @format double */
  Quantity?: number;
  /** @format double */
  Taxrate?: number;
  /** @format double */
  UnitPrice?: number;
  MaterialTypeStr?: string | null;
  JobItemCode?: string | null;
  JobItemName?: string | null;
  JobItemDescribe?: string | null;
  /** @format double */
  JobMaterialActualQuantity?: number;
  /** @format double */
  JobMaterialPreQuantity?: number;
  /** @format double */
  JobPreQuantity?: number;
  /** @format double */
  EnquiryPrice?: number;
  PayModeStr?: string | null;
  /** @format double */
  TotalAmount?: number;
  /** @format double */
  LastQuotationPrice?: number | null;
  /** @format date-time */
  LastQuotationTime?: string | null;
}

export interface ProjectItemMaterialResult {
  /** @format int64 */
  ID?: number;
  /** @format double */
  ActualQuantity?: number;
  /** @format double */
  Loss?: number;
  /** @format int32 */
  MaterialID?: number;
  /** @format double */
  PreMaterialUnitPrice?: number;
  /** @format double */
  PreQuantity?: number;
  /** @format int32 */
  ProjectID?: number;
  /** @format int64 */
  ProjectItemID?: number;
  /** @format double */
  UnitPrice?: number;
  JobCode?: string | null;
  Code?: string | null;
  Name?: string | null;
  Specifications?: string | null;
  /** @format int32 */
  Type?: number;
  TypeStr?: string | null;
  Unit?: string | null;
  JobItemCode?: string | null;
  JobItemName?: string | null;
  JobItemDescribe?: string | null;
}

export interface ProjectItemMaterialResultPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: ProjectItemMaterialResult[] | null;
}

export interface ProjectItemMaterialResultPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: ProjectItemMaterialResultPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface ProjectItemPageParam {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int64 */
  ID?: number | null;
  Code?: string | null;
  Describe?: string | null;
  Name?: string | null;
  /** @format int32 */
  PhaseID?: number | null;
  /** @format int32 */
  ProjectID?: number | null;
  Unit?: string | null;
}

export interface ProjectItemStatistics {
  /** @format int64 */
  ID?: number;
  /** @format int32 */
  ProjectID?: number;
  /** @format int32 */
  MaterialID?: number;
  RowType?: string | null;
  SerialNumber?: string | null;
  Code?: string | null;
  Name?: string | null;
  Describe?: string | null;
  Notes?: string | null;
  /** @format double */
  PreQuantity?: number;
  Ext1?: string | null;
  /** @format double */
  Loss?: number;
  /** @format double */
  MaxQuantity?: number;
  Unit?: string | null;
  /** @format double */
  PreMaterialUnitPrice?: number;
  /** @format double */
  PreMaterialTotalPrice?: number;
  /** @format double */
  MaterialUnitPrice?: number;
  /** @format double */
  MaterialTotalPrice?: number;
  /** @format double */
  MaterialTotalPrice_baoxiao?: number;
  /** @format double */
  MaterialTotalPrice_guazhang?: number;
  /** @format double */
  PreAuxiliaryUnitPrice?: number;
  /** @format double */
  PreAuxiliaryTotalPrice?: number;
  /** @format double */
  AuxiliaryUnitPrice?: number;
  /** @format double */
  AuxiliaryTotalPrice?: number;
  /** @format double */
  AuxiliaryTotalPrice_baoxiao?: number;
  /** @format double */
  AuxiliaryTotalPrice_guazhang?: number;
  /** @format double */
  PreInstrumentUnitPrice?: number;
  /** @format double */
  PreInstrumentTotalPrice?: number;
  /** @format double */
  InstrumentUnitPrice?: number;
  /** @format double */
  InstrumentTotalPrice?: number;
  /** @format double */
  InstrumentTotalPrice_baoxiao?: number;
  /** @format double */
  InstrumentTotalPrice_guazhang?: number;
  /** @format double */
  PreLaborUnitPrice?: number;
  /** @format double */
  PreLaborTotalPrice?: number;
  /** @format double */
  LaborUnitPrice?: number;
  /** @format double */
  LaborTotalPrice?: number;
  /** @format double */
  LaborTotalPrice_baoxiao?: number;
  /** @format double */
  LaborTotalPrice_guazhang?: number;
  /** @format double */
  LeaseUnitPrice?: number;
  /** @format double */
  LeaseTotalPrice?: number;
  /** @format double */
  LeaseTotalPrice_baoxiao?: number;
  /** @format double */
  LeaseTotalPrice_guazhang?: number;
  /** @format double */
  CoordinationUnitPrice?: number;
  /** @format double */
  CoordinationTotalPrice?: number;
  /** @format double */
  CoordinationTotalPrice_baoxiao?: number;
  /** @format double */
  CoordinationTotalPrice_guazhang?: number;
  /** @format double */
  ManageRate?: number;
  /** @format double */
  ProfitRate?: number;
  /** @format double */
  ManagePrice?: number;
  /** @format double */
  Profit?: number;
  /** @format double */
  UnitPrice?: number;
  /** @format double */
  TotalPrice?: number;
  /** @format date-time */
  UpdateTime?: string;
}

export interface ProjectItemStatisticsListResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: ProjectItemStatistics[] | null;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface ProjectAccountRelation {
  /** @format int32 */
  Id?: number;
  /** @format int32 */
  AccountId?: number;
  /** @format int32 */
  ProjectId?: number;
  Name?: string | null;
}

export interface Projectinfo {
  /** @format int32 */
  ID?: number;
  /** @format date-time */
  EndDate?: string | null;
  /** @format double */
  ManageRate?: number;
  Name?: string | null;
  Notes?: string | null;
  /** @format double */
  ProfitRate?: number;
  /** @format date-time */
  StartDate?: string;
  AccountList?: ProjectAccountRelation[] | null;
}

export interface ProjectinfoListResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: Projectinfo[] | null;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface ProjectinfoPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Projectinfo[] | null;
}

export interface ProjectinfoPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: ProjectinfoPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface ProjectinfoResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: Projectinfo;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface Projectitem {
  /** @format int64 */
  ID?: number;
  Code?: string | null;
  Describe?: string | null;
  Ext1?: string | null;
  /** @format double */
  Loss?: number;
  /** @format double */
  MaxQuantity?: number;
  Name?: string | null;
  Notes?: string | null;
  /** @format int32 */
  PhaseID?: number | null;
  /** @format double */
  PreAuxiliaryUnitPrice?: number;
  /** @format double */
  PreInstrumentUnitPrice?: number;
  /** @format double */
  PreLaborUnitPrice?: number;
  /** @format double */
  PreMaterialUnitPrice?: number;
  /** @format double */
  PreQuantity?: number;
  /** @format int32 */
  ProjectID?: number;
  Unit?: string | null;
  /** @format date-time */
  UpdateTime?: string;
  UploadSerialNumber?: string | null;
  MaterialItems?: Projectitemmaterial[] | null;
  ProjectName?: string | null;
  PhaseName?: string | null;
}

export interface ProjectitemPageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Projectitem[] | null;
}

export interface ProjectitemPageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: ProjectitemPageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface ProjectitemResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: Projectitem;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface Projectitemmaterial {
  /** @format int64 */
  ID?: number;
  /** @format double */
  ActualQuantity?: number;
  /** @format double */
  Loss?: number;
  /** @format int32 */
  MaterialID?: number;
  /** @format double */
  PreMaterialUnitPrice?: number;
  /** @format double */
  PreQuantity?: number;
  /** @format int32 */
  ProjectID?: number;
  /** @format int64 */
  ProjectItemID?: number;
  /** @format double */
  UnitPrice?: number;
  JobCode?: string | null;
  Code?: string | null;
  Name?: string | null;
  Specifications?: string | null;
  /** @format int32 */
  Type?: number;
  TypeStr?: string | null;
  Unit?: string | null;
}

export interface Projectphase {
  /** @format int32 */
  ID?: number;
  Name?: string | null;
  /** @format int32 */
  ProjectID?: number;
  /** @format date-time */
  UpdateTime?: string;
  ProjectName?: string | null;
}

export interface ProjectphaseListResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: Projectphase[] | null;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface ProjectphasePageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Projectphase[] | null;
}

export interface ProjectphasePageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: ProjectphasePageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface ProjectphaseResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: Projectphase;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface PureMenuDTO {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  parentId?: number;
  path?: string | null;
  name?: string | null;
  redirect?: string | null;
  meta?: PureMetaDTO;
  children?: PureMenuDTO[] | null;
}

export interface PureMenuDTOListResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: PureMenuDTO[] | null;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface PureMetaDTO {
  title?: string | null;
  icon?: string | null;
  showLink?: boolean;
  /** @format float */
  rank?: number;
  showParent?: boolean;
  keepAlive?: boolean;
  activePath?: string | null;
}

export interface QuotationAssessDTO {
  /** @format int64 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format date-time */
  CreateTime?: string;
  /** @format date-time */
  EndTime?: string;
  /** @format int32 */
  ProjectID?: number;
  ProjectName?: string | null;
  /** @format int32 */
  Status?: number;
  StatusName?: string | null;
  Title?: string | null;
  /** @format date-time */
  AssessTime1?: string | null;
  /** @format date-time */
  AssessTime2?: string | null;
  /** @format date-time */
  AssessTime3?: string | null;
  /** @format int32 */
  AssessID1?: number | null;
  /** @format int32 */
  AssessID2?: number | null;
  /** @format int32 */
  AssessID3?: number | null;
  AssessName1?: string | null;
  AssessName2?: string | null;
  AssessName3?: string | null;
  Items?: EnquiryItemsDTO[] | null;
  ApprovalRecordList?: ApprovalRecords[] | null;
}

export interface QuotationAssessDTOResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: QuotationAssessDTO;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface QuotationAssessUpdateParam {
  /** @format int64 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  roleNames?: string[] | null;
  items?: Quotationitem[] | null;
}

export interface QuotationItemDTO {
  /** @format int64 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  EnquiryInfoID?: number;
  /** @format int64 */
  EnquiryItemID?: number;
  /** @format int32 */
  MaterialID?: number;
  /** @format int32 */
  ProjectID?: number;
  /** @format double */
  UnitPrice?: number;
  /** @format date-time */
  UpdateTime?: string;
  Telephone?: string | null;
  Contact?: string | null;
  Code?: string | null;
  MaterialName?: string | null;
  Specifications?: string | null;
  /** @format int32 */
  Type?: number;
  Unit?: string | null;
  TypeStr?: string | null;
  Notes?: string | null;
  /** @format double */
  Quantity?: number;
  /** @format double */
  Freight?: number;
  /** @format double */
  Taxrate?: number;
  /** @format int32 */
  AssessID1?: number | null;
  /** @format int32 */
  AssessID2?: number | null;
  /** @format int32 */
  AssessID3?: number | null;
  /** @format double */
  TotalAmount?: number;
}

export interface QuotationStatistics {
  /** @format int32 */
  AccountID?: number;
  UserName?: string | null;
  /** @format int32 */
  TotalNum?: number;
  /** @format int32 */
  SuccessNum?: number;
  /** @format int32 */
  State?: number;
  /** @format double */
  SuccessProportion?: number;
  SuccessProportionStr?: string | null;
}

export interface QuotationStatisticsListResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: QuotationStatistics[] | null;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface Quotationitem {
  /** @format int64 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  AssessID1?: number | null;
  /** @format int32 */
  AssessID2?: number | null;
  /** @format int32 */
  AssessID3?: number | null;
  AssessNotes?: string | null;
  /**
   * 0未被选中,1报价选中
   * @format int32
   */
  AssessState?: number;
  /** @format date-time */
  AssessTime1?: string | null;
  /** @format date-time */
  AssessTime2?: string | null;
  /** @format date-time */
  AssessTime3?: string | null;
  Contact?: string | null;
  /** @format int32 */
  EnquiryInfoID?: number;
  /** @format int64 */
  EnquiryItemID?: number;
  /** @format double */
  Freight?: number;
  /** @format int32 */
  MaterialID?: number;
  /** @format int32 */
  ProjectID?: number;
  /** @format double */
  Taxrate?: number;
  Telephone?: string | null;
  /** @format double */
  UnitPrice?: number;
  /** @format date-time */
  UpdateTime?: string;
  Check?: boolean;
  /** @format double */
  ParentQuantity?: number;
  /** @format double */
  TotalAmount?: number;
  AccountName?: string | null;
}

export interface Result {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: string | null;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface Role {
  /** @format int32 */
  RoleID?: number;
  Name?: string | null;
  /** @format date-time */
  Updatetime?: string;
  RoleAPIRelation1?: Roleapirelation[] | null;
}

export interface RolePageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Role[] | null;
}

export interface RolePageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: RolePageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface RoleUpdateParam {
  /** @format int32 */
  RoleID?: number;
  Name?: string | null;
  /** @format date-time */
  Updatetime?: string;
  RoleApiList?: Apiinfo[] | null;
}

export interface RoleUpdateParamResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: RoleUpdateParam;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface Roleapirelation {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  APIID?: number;
  /** @format int32 */
  RoleID?: number;
  Type?: boolean;
  APIInfo1?: Apiinfo;
}

export interface SysMessageResult {
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  ID?: number;
}

export interface SysMessageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: SysMessageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface Sysmessage {
  /** @format int64 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format date-time */
  CreateTime?: string;
  Msg?: string | null;
  /** @format int32 */
  Status?: number;
  StatusName?: string | null;
}

export interface SysmessagePageResult {
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
  /** @format int64 */
  PageCount?: number;
  Data?: Sysmessage[] | null;
}

export interface SysmessagePageResultResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: SysmessagePageResult;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface UpdateAccountDTO {
  /** @format int32 */
  AccountID?: number;
  AccountNumber?: string | null;
  /** @format date-time */
  Birthday?: string | null;
  Name?: string | null;
  Notes?: string | null;
  Sex?: boolean | null;
  Telephone?: string | null;
  test?: string | null;
  /** @format int32 */
  Status?: number | null;
  AccountRoles?: number[] | null;
  AccountDepartments?: number[] | null;
}

export interface UpdateAccountDTOResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: UpdateAccountDTO;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface UpdateApiInfoDTO {
  /** @format int32 */
  ID?: number;
  Action?: string | null;
  Area?: string | null;
  Controller?: string | null;
  IsMenu?: boolean;
  Name?: string | null;
  Notes?: string | null;
  /** @format int32 */
  ParentID?: number;
  /** @format int32 */
  Sort?: number;
  /** @format date-time */
  UpdateTime?: string;
  Path?: string | null;
  /** @format int32 */
  Type?: number;
}

export interface UpdateEnquiryGroupDTO {
  /** @format int32 */
  ID?: number | null;
  Name?: string | null;
  EnquiryGroupAccount?: number[] | null;
}

export interface UpdateEnquiryGroupDTOResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: UpdateEnquiryGroupDTO;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface UploadFileDTO {
  OldName?: string | null;
  NewFullPath?: string | null;
}

export interface UploadFileDTOResult {
  /** @format int32 */
  Code?: number;
  Message?: string | null;
  Data?: UploadFileDTO;
  Ext1?: string | null;
  Ext2?: string | null;
  Ext3?: any | null;
  Ext4?: any | null;
}

export interface UploadProjectItem {
  /** @format int64 */
  ID?: number;
  /** @format double */
  AuxiliaryUnitPrice?: number | null;
  Code?: string | null;
  Describe?: string | null;
  Ext1?: string | null;
  /** @format double */
  InstrumentUnitPrice?: number | null;
  /** @format double */
  LaborUnitPrice?: number | null;
  /** @format double */
  Loss?: number | null;
  /** @format double */
  ManagePrice?: number | null;
  /** @format double */
  MaterialUnitPrice?: number | null;
  /** @format double */
  MaxQuantity?: number | null;
  Name?: string | null;
  Notes?: string | null;
  /** @format double */
  PreQuantity?: number | null;
  /** @format double */
  Profit?: number | null;
  /** @format int32 */
  ProjectID?: number | null;
  /** @format int32 */
  PhaseID?: number | null;
  Unit?: string | null;
  /** @format double */
  UnitPrice?: number | null;
  /** @format date-time */
  UpdateTime?: string | null;
  MaterialItems?: Projectitemmaterial[] | null;
}

export interface GetAccount1GetAccountPageParams {
  /** @format int32 */
  AccountID?: number;
  Name?: string;
  Telephone?: string;
  /** @format int32 */
  Status?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetAccount1GetAccountModelParams {
  /** @format int32 */
  AccountID?: number;
  Name?: string;
  Telephone?: string;
  /** @format int32 */
  Status?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetCommonGetSysMsgPageParams {
  /** @format int32 */
  AccountID?: number;
  /** @format int64 */
  ID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetCommonGetSysMsgUnreadCountParams {
  /** @format int32 */
  AccountID?: number;
  /** @format int64 */
  ID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetCommonGetSettingParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccentID?: number;
  Name?: string;
  Type?: string;
  Value?: string;
}

export interface GetContractGetMyContractInfoPageParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int32 */
  TypeID?: number;
  RoleNames?: string[];
  /** @format int32 */
  AccountID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetContractGetContractInfoByIdParams {
  /** @format int32 */
  ID?: number;
  /**
   * 申请人
   * @format int32
   */
  AccountID?: number;
  Annex1?: string;
  Annex2?: string;
  /** @format int32 */
  AssessID1?: number;
  /** @format int32 */
  AssessID2?: number;
  /** @format int32 */
  AssessID3?: number;
  /** @format int32 */
  AssessID4?: number;
  /** @format int32 */
  AssessID5?: number;
  /** @format int32 */
  AssessID6?: number;
  /** @format date-time */
  AssessTime1?: string;
  /** @format date-time */
  AssessTime2?: string;
  /** @format date-time */
  AssessTime3?: string;
  /** @format date-time */
  AssessTime4?: string;
  /** @format date-time */
  AssessTime5?: string;
  /** @format date-time */
  AssessTime6?: string;
  /** @format date-time */
  CreateTime?: string;
  Mode?: string;
  Notes?: string;
  PartBBank?: string;
  PartBBankAccount?: string;
  PartBBankUser?: string;
  PartBName?: string;
  /** @format int32 */
  PayMode?: number;
  /**
   * 合同价格
   * @format double
   */
  Price?: number;
  /** 签约对象 */
  SignedWith?: string;
  /**
   * 签约时间
   * @format date-time
   */
  SigningTime?: string;
  /** @format int32 */
  Status?: number;
  /**
   * 税率
   * @format double
   */
  TaxRate?: number;
  /** 合同期限 */
  Term?: string;
  /** 标题 */
  Title?: string;
  /** @format int32 */
  TypeID?: number;
  TypeName?: string;
  StatusName?: string;
  ApprovalRoleName?: string;
  AccountName?: string;
  ApprovalRecordList?: ApprovalRecords[];
}

export interface GetContractGetContractInfoApprovePageParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int32 */
  TypeID?: number;
  RoleNames?: string[];
  /** @format int32 */
  AccountID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetContractGetContractInfoEndPageParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int32 */
  TypeID?: number;
  RoleNames?: string[];
  /** @format int32 */
  AccountID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetCreditGetCreditOrderPageParams {
  /** @format int64 */
  ID?: number;
  /** @format date-time */
  CreateTime?: string;
  /** @format int32 */
  CreditType?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  OrderID?: number;
  PartBBank?: string;
  PartBBankAccount?: string;
  PartBBankUser?: string;
  PartBName?: string;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetCreditGetCreditPayInfoPageParams {
  /** @format int64 */
  ID?: number;
  /** @format date-time */
  CreateTime?: string;
  /** @format int32 */
  CreditType?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  OrderID?: number;
  PartBBank?: string;
  PartBBankAccount?: string;
  PartBBankUser?: string;
  PartBName?: string;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetCreditGetCreditPayInfoApprovalPageParams {
  /** @format int64 */
  ID?: number;
  /** @format date-time */
  CreateTime?: string;
  /** @format int32 */
  CreditType?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  OrderID?: number;
  PartBBank?: string;
  PartBBankAccount?: string;
  PartBBankUser?: string;
  PartBName?: string;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetCreditGetCreditPayInfoFullParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  AssessID1?: number;
  /** @format int32 */
  AssessID2?: number;
  /** @format int32 */
  AssessID3?: number;
  /** @format int32 */
  AssessID4?: number;
  /** @format int32 */
  AssessID5?: number;
  /** @format int32 */
  AssessID6?: number;
  /** @format date-time */
  AssessTime1?: string;
  /** @format date-time */
  AssessTime2?: string;
  /** @format date-time */
  AssessTime3?: string;
  /** @format date-time */
  AssessTime4?: string;
  /** @format date-time */
  AssessTime5?: string;
  /** @format date-time */
  AssessTime6?: string;
  /** @format date-time */
  CreateTime?: string;
  PartBBank?: string;
  PartBBankAccount?: string;
  PartBBankUser?: string;
  PartBName?: string;
  /** @format int32 */
  ProjectID?: number;
  /** @format int32 */
  Status?: number;
  Title?: string;
  /** @format double */
  TotalAmount?: number;
  Items?: Creditpayitem[];
  StatusName?: string;
  ProjectName?: string;
  AccountName?: string;
  /** @format double */
  PaidAmount?: number;
  ApprovalRecordList?: ApprovalRecords[];
}

export interface GetCreditGetCreditPayInfoEndPageParams {
  /** @format int64 */
  ID?: number;
  /** @format date-time */
  CreateTime?: string;
  /** @format int32 */
  CreditType?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  OrderID?: number;
  PartBBank?: string;
  PartBBankAccount?: string;
  PartBBankUser?: string;
  PartBName?: string;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetEnquiryGetEnquiryGroupPageParams {
  /** @format int64 */
  ID?: number;
  Name?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetEnquiryGetEnquiryGroupByIdParams {
  /** @format int64 */
  ID?: number;
  Name?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetEnquiryGetMyEnquiryInfoPageParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  QuotationAccountID?: number;
  /** @format date-time */
  CreateTime?: string;
  /** @format date-time */
  EndTime?: string;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  PhaseID?: number;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  StatusName?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetEnquiryGetEnquiryInfoByIdParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  QuotationAccountID?: number;
  /** @format date-time */
  CreateTime?: string;
  /** @format date-time */
  EndTime?: string;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  PhaseID?: number;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  StatusName?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetEnquiryGetMyQuotationPageParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  QuotationAccountID?: number;
  /** @format date-time */
  CreateTime?: string;
  /** @format date-time */
  EndTime?: string;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  PhaseID?: number;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  StatusName?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetEnquiryGetQuotationByIdParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  QuotationAccountID?: number;
  /** @format date-time */
  CreateTime?: string;
  /** @format date-time */
  EndTime?: string;
  /** @format int32 */
  ProjectID?: number;
  ProjectName?: string;
  /** @format int32 */
  Status?: number;
  Title?: string;
  StatusName?: string;
  GroupList?: number[];
  Items?: Enquiryitem[];
  QuotationAccount?: Enquiryquotationaccountrelation[];
  QuotationItems?: QuotationItemDTO[];
}

export interface GetEnquiryGetQuotationAssessPageParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  QuotationAccountID?: number;
  /** @format date-time */
  CreateTime?: string;
  /** @format date-time */
  EndTime?: string;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  PhaseID?: number;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  StatusName?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetEnquiryGetQuotationAssessByIdParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  QuotationAccountID?: number;
  /** @format date-time */
  CreateTime?: string;
  /** @format date-time */
  EndTime?: string;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  PhaseID?: number;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  StatusName?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetEnquiryGetQuotationEndPageParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  QuotationAccountID?: number;
  /** @format date-time */
  CreateTime?: string;
  /** @format date-time */
  EndTime?: string;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  PhaseID?: number;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  StatusName?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetLaborGetLaborInfoPageApiParams {
  RoleNames?: string[];
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int32 */
  WinAccountID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetLaborGetLaborApprovePageApiParams {
  RoleNames?: string[];
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int32 */
  WinAccountID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetLaborGetLaborByIdParams {
  RoleNames?: string[];
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int32 */
  WinAccountID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetLaborGetLaborFullByIdParams {
  RoleNames?: string[];
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int32 */
  WinAccountID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetLaborGetLaborForPayParams {
  RoleNames?: string[];
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int32 */
  WinAccountID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetLaborGetWinLaborApiParams {
  RoleNames?: string[];
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int32 */
  WinAccountID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetLaborGetLaborPayApplyApiParams {
  RoleNames?: string[];
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int32 */
  WinAccountID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetLaborGetLaborInfoEndPageParams {
  RoleNames?: string[];
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int32 */
  WinAccountID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetLaborGetLaborPayApproveParams {
  RoleNames?: string[];
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int32 */
  WinAccountID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetLaborGetLaborPayApproveSuccessParams {
  RoleNames?: string[];
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int32 */
  WinAccountID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetLaborGetLaborPayParams {
  /** @format int32 */
  ID?: number;
  /** @format double */
  PayAmount?: number;
  /** @format int32 */
  AccountID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Items?: LaboraPayItem[];
}

export interface GetLaborGetLaborPayEndPageParams {
  RoleNames?: string[];
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int32 */
  WinAccountID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetLaborGetLaborChangeFullByIdParams {
  RoleNames?: string[];
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int32 */
  WinAccountID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetLeaseGetMyLeasePageParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  RoleNames?: string[];
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  Title?: string;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  /** @format int32 */
  CompletionStatus?: number;
  CompletionStatusList?: number[];
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetLeaseGetLeasePageFinishParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  RoleNames?: string[];
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  Title?: string;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  /** @format int32 */
  CompletionStatus?: number;
  CompletionStatusList?: number[];
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetLeaseGetLeaseApprovePageParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  RoleNames?: string[];
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  Title?: string;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  /** @format int32 */
  CompletionStatus?: number;
  CompletionStatusList?: number[];
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetLeaseGetLeaseFullByIdParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  RoleNames?: string[];
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  Title?: string;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  /** @format int32 */
  CompletionStatus?: number;
  CompletionStatusList?: number[];
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetLeaseGetLeaseCompletionApproveApiParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  RoleNames?: string[];
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  Title?: string;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  /** @format int32 */
  CompletionStatus?: number;
  CompletionStatusList?: number[];
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetMaterialGetMaterialInfoPageParams {
  /** @format int32 */
  ID?: number;
  Name?: string;
  /** @format int32 */
  Type?: number;
  /** @format int32 */
  ProjectID?: number;
  TypeList?: number[];
  Code?: string;
  Specifications?: string;
  Unit?: string;
  /** @format int32 */
  JobID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetMaterialGetMaterialInfoPageByJobIdParams {
  /** @format int32 */
  ID?: number;
  Name?: string;
  /** @format int32 */
  Type?: number;
  /** @format int32 */
  ProjectID?: number;
  TypeList?: number[];
  Code?: string;
  Specifications?: string;
  Unit?: string;
  /** @format int32 */
  JobID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetMaterialGetMaterialPricePageParams {
  /** @format int32 */
  ID?: number;
  Name?: string;
  /** @format int32 */
  Type?: number;
  /** @format int32 */
  ProjectID?: number;
  TypeList?: number[];
  Code?: string;
  Specifications?: string;
  Unit?: string;
  /** @format int32 */
  JobID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetMaterialGetMaterialInfoByIdParams {
  /** @format int32 */
  ID?: number;
  Name?: string;
  /** @format int32 */
  Type?: number;
  /** @format int32 */
  ProjectID?: number;
  TypeList?: number[];
  Code?: string;
  Specifications?: string;
  Unit?: string;
  /** @format int32 */
  JobID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetOfficeGetOfficeInfoByIdParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  roleNames?: string[];
  Title?: string;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  StatusName?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetOfficeGetOfficePageParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  roleNames?: string[];
  Title?: string;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  StatusName?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetOfficeGetOfficeApprovePageApiParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  roleNames?: string[];
  Title?: string;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  StatusName?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetOfficeGetOfficeApproveEndPageParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  roleNames?: string[];
  Title?: string;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  StatusName?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetOfficialGetOfficialInfoPageParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int32 */
  TypeID?: number;
  RoleNames?: string[];
  /** @format int32 */
  AccountID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetOfficialGetOfficialInfoByIdParams {
  /** @format int32 */
  ID?: number;
  /**
   * 申请人
   * @format int32
   */
  AccountID?: number;
  /** @format int32 */
  AssessID1?: number;
  /** @format int32 */
  AssessID2?: number;
  /** @format int32 */
  AssessID3?: number;
  /** @format int32 */
  AssessID4?: number;
  /** @format int32 */
  AssessID5?: number;
  /** @format date-time */
  AssessTime1?: string;
  /** @format date-time */
  AssessTime2?: string;
  /** @format date-time */
  AssessTime3?: string;
  /** @format date-time */
  AssessTime4?: string;
  /** @format date-time */
  AssessTime5?: string;
  /** @format date-time */
  CreateTime?: string;
  /** 送达单位 */
  DeliveryCompany?: string;
  /** 送达人 */
  DeliveryPerson?: string;
  FileName?: string;
  FileUsage?: string;
  Notes?: string;
  /** 签约对象 */
  SignedWith?: string;
  /**
   * 签约时间
   * @format date-time
   */
  SigningTime?: string;
  /** @format int32 */
  Status?: number;
  /** 标题 */
  Title?: string;
  /** @format int32 */
  TypeID?: number;
  TypeName?: string;
  StatusName?: string;
  ApprovalRoleName?: string;
  AccountName?: string;
  ApprovalRecordList?: ApprovalRecords[];
}

export interface GetOfficialGetOfficialInfoApprovePageParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int32 */
  TypeID?: number;
  RoleNames?: string[];
  /** @format int32 */
  AccountID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetOfficialGetOfficialInfoEndPageParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  /** @format int32 */
  TypeID?: number;
  RoleNames?: string[];
  /** @format int32 */
  AccountID?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetProcureGetProcureMaterialByIdParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  RoleNames?: string[];
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  Title?: string;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  StatusName?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetProcureGetProcureMaterialByIdWithPriceParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  RoleNames?: string[];
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  Title?: string;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  StatusName?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetProcureGetMyProcureMaterialPageParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  RoleNames?: string[];
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  Title?: string;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  StatusName?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetProcureGetProcureMaterialPricePageApiParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  RoleNames?: string[];
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  Title?: string;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  StatusName?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetProcureGetProcureMaterialPriceApiParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  RoleNames?: string[];
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  Title?: string;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  StatusName?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetProcureGetProcureMaterialApprovePageApiParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  RoleNames?: string[];
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  Title?: string;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  StatusName?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetProcureGetProcurePriceEndApiParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  RoleNames?: string[];
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  Title?: string;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  StatusName?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetProjectGetProjectPageParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  PhaseID?: number;
  Name?: string;
  Notes?: string;
  /** @format date-time */
  StartDateStart?: string;
  /** @format date-time */
  StartDateEnd?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetProjectGetProjectByIdParams {
  /** @format int32 */
  ID?: number;
  /** @format date-time */
  EndDate?: string;
  /** @format double */
  ManageRate?: number;
  Name?: string;
  Notes?: string;
  /** @format double */
  ProfitRate?: number;
  /** @format date-time */
  StartDate?: string;
  AccountList?: ProjectAccountRelation[];
}

export interface GetProjectGetProjectPhaseAllParams {
  /** @format int32 */
  ID?: number;
  Name?: string;
  /** @format int32 */
  ProjectID?: number;
  /** @format date-time */
  UpdateTime?: string;
  ProjectName?: string;
}

export interface GetProjectGetProjectItemPageParams {
  /** @format int64 */
  ID?: number;
  Code?: string;
  Describe?: string;
  Name?: string;
  /** @format int32 */
  PhaseID?: number;
  /** @format int32 */
  ProjectID?: number;
  Unit?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetProjectGetProjectItemMaterialPageParams {
  /** @format int64 */
  ID?: number;
  Code?: string;
  Describe?: string;
  Name?: string;
  /** @format int32 */
  PhaseID?: number;
  /** @format int32 */
  ProjectID?: number;
  Unit?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetProjectGetProjectItemByIdParams {
  /** @format int64 */
  ID?: number;
  Code?: string;
  Describe?: string;
  Ext1?: string;
  /** @format double */
  Loss?: number;
  /** @format double */
  MaxQuantity?: number;
  Name?: string;
  Notes?: string;
  /** @format int32 */
  PhaseID?: number;
  /** @format double */
  PreAuxiliaryUnitPrice?: number;
  /** @format double */
  PreInstrumentUnitPrice?: number;
  /** @format double */
  PreLaborUnitPrice?: number;
  /** @format double */
  PreMaterialUnitPrice?: number;
  /** @format double */
  PreQuantity?: number;
  /** @format int32 */
  ProjectID?: number;
  Unit?: string;
  /** @format date-time */
  UpdateTime?: string;
  UploadSerialNumber?: string;
  MaterialItems?: Projectitemmaterial[];
  ProjectName?: string;
  PhaseName?: string;
}

export interface GetProjectGetFullProjectItemByIdParams {
  /** @format int64 */
  ID?: number;
  Code?: string;
  Describe?: string;
  Ext1?: string;
  /** @format double */
  Loss?: number;
  /** @format double */
  MaxQuantity?: number;
  Name?: string;
  Notes?: string;
  /** @format int32 */
  PhaseID?: number;
  /** @format double */
  PreAuxiliaryUnitPrice?: number;
  /** @format double */
  PreInstrumentUnitPrice?: number;
  /** @format double */
  PreLaborUnitPrice?: number;
  /** @format double */
  PreMaterialUnitPrice?: number;
  /** @format double */
  PreQuantity?: number;
  /** @format int32 */
  ProjectID?: number;
  Unit?: string;
  /** @format date-time */
  UpdateTime?: string;
  UploadSerialNumber?: string;
  MaterialItems?: Projectitemmaterial[];
  ProjectName?: string;
  PhaseName?: string;
}

export interface GetProjectGetProjectPhasePageParams {
  /** @format int64 */
  ID?: number;
  Code?: string;
  Describe?: string;
  Name?: string;
  /** @format int32 */
  PhaseID?: number;
  /** @format int32 */
  ProjectID?: number;
  Unit?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetProjectGetProjectPhaseByIdParams {
  /** @format int64 */
  ID?: number;
  Code?: string;
  Describe?: string;
  Ext1?: string;
  /** @format double */
  Loss?: number;
  /** @format double */
  MaxQuantity?: number;
  Name?: string;
  Notes?: string;
  /** @format int32 */
  PhaseID?: number;
  /** @format double */
  PreAuxiliaryUnitPrice?: number;
  /** @format double */
  PreInstrumentUnitPrice?: number;
  /** @format double */
  PreLaborUnitPrice?: number;
  /** @format double */
  PreMaterialUnitPrice?: number;
  /** @format double */
  PreQuantity?: number;
  /** @format int32 */
  ProjectID?: number;
  Unit?: string;
  /** @format date-time */
  UpdateTime?: string;
  UploadSerialNumber?: string;
  MaterialItems?: Projectitemmaterial[];
  ProjectName?: string;
  PhaseName?: string;
}

export interface GetProjectGetProjectStatisticsParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  PhaseID?: number;
  Name?: string;
  Notes?: string;
  /** @format date-time */
  StartDateStart?: string;
  /** @format date-time */
  StartDateEnd?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetProjectGetQuotationStatisticsParams {
  /** @format int32 */
  ID?: number;
  /** @format int32 */
  AccountID?: number;
  /** @format int32 */
  QuotationAccountID?: number;
  /** @format date-time */
  CreateTime?: string;
  /** @format date-time */
  EndTime?: string;
  /** @format int32 */
  ProjectID?: number;
  ProjectIDList?: number[];
  /** @format int32 */
  PhaseID?: number;
  /** @format int32 */
  Status?: number;
  StatusList?: number[];
  Title?: string;
  StatusName?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetSystemGetRolePageParams {
  /** @format int32 */
  RoleID?: number;
  Name?: string;
  /** @format date-time */
  UpdatetimeMin?: string;
  /** @format date-time */
  UpdatetimeMax?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetSystemGetApiInfoPageParams {
  /** @format int32 */
  ID?: number;
  IsMenu?: boolean;
  Name?: string;
  Notes?: string;
  /** @format int32 */
  ParentID?: number;
  Action?: string;
  Area?: string;
  Controller?: string;
  Path?: string;
  /** @format int32 */
  Type?: number;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetSystemGetApiInfoByIdParams {
  /** @format int32 */
  id?: number;
}

export interface GetSystemGetDepartmentPageParams {
  /** @format int32 */
  ID?: number;
  Name?: string;
  /** @format date-time */
  UpdatetimeMin?: string;
  /** @format date-time */
  UpdatetimeMax?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

export interface GetSystemGetDepartmentByIdParams {
  /** @format int32 */
  ID?: number;
  Name?: string;
  /** @format date-time */
  UpdatetimeMin?: string;
  /** @format date-time */
  UpdatetimeMax?: string;
  /** @format int64 */
  PageCount?: number;
  /** @format int32 */
  PageNumber?: number;
  /** @format int32 */
  PageSize?: number;
  /** @format int64 */
  Count?: number;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  HeadersDefaults,
  ResponseType
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<
  AxiosRequestConfig,
  "data" | "params" | "url" | "responseType"
> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<
  AxiosRequestConfig,
  "data" | "cancelToken"
> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain"
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || ""
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance
      .request({
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type ? { "Content-Type": type } : {})
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path
      })
      .then(response => response.data);
  };
}

/**
 * @title My API
 * @version v1
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Account1
     * @name GetAccount1GetAccountPage
     * @request GET:/api/Account1/GetAccountPage
     */
    get_Account1_GetAccountPage: (
      query: GetAccount1GetAccountPageParams,
      params: RequestParams = {}
    ) =>
      this.request<AccountPageResultPageResultResult, any>({
        path: `/api/Account1/GetAccountPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Account1
     * @name GetAccount1GetAccountSelectList
     * @request GET:/api/Account1/GetAccountSelectList
     */
    get_Account1_GetAccountSelectList: (params: RequestParams = {}) =>
      this.request<AccountPageResultListResult, any>({
        path: `/api/Account1/GetAccountSelectList`,
        method: "GET",
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Account1
     * @name PostAccount1UpdateAccount
     * @request POST:/api/Account1/UpdateAccount
     */
    post_Account1_UpdateAccount: (
      data: UpdateAccountDTO,
      params: RequestParams = {}
    ) =>
      this.request<UpdateAccountDTOResult, any>({
        path: `/api/Account1/UpdateAccount`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Account1
     * @name GetAccount1GetAccountModel
     * @request GET:/api/Account1/GetAccountModel
     */
    get_Account1_GetAccountModel: (
      query: GetAccount1GetAccountModelParams,
      params: RequestParams = {}
    ) =>
      this.request<UpdateAccountDTOResult, any>({
        path: `/api/Account1/GetAccountModel`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Account1
     * @name PostAccount1DisableAccount
     * @request POST:/api/Account1/DisableAccount
     */
    post_Account1_DisableAccount: (data: Account, params: RequestParams = {}) =>
      this.request<Result, any>({
        path: `/api/Account1/DisableAccount`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Account1
     * @name PostAccount1ChangePassword
     * @request POST:/api/Account1/ChangePassword
     */
    post_Account1_ChangePassword: (data: Account, params: RequestParams = {}) =>
      this.request<Result, any>({
        path: `/api/Account1/ChangePassword`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Common
     * @name PostCommonChangeMyPassword
     * @request POST:/api/Common/ChangeMyPassword
     */
    post_Common_ChangeMyPassword: (
      data: ChangeMyPasswordDTO,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Common/ChangeMyPassword`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Common
     * @name PostCommonReadMessage
     * @request POST:/api/Common/ReadMessage
     */
    post_Common_ReadMessage: (data: number[], params: RequestParams = {}) =>
      this.request<Result, any>({
        path: `/api/Common/ReadMessage`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Common
     * @name GetCommonGetSysMsgPage
     * @request GET:/api/Common/GetSysMsgPage
     */
    get_Common_GetSysMsgPage: (
      query: GetCommonGetSysMsgPageParams,
      params: RequestParams = {}
    ) =>
      this.request<SysmessagePageResultResult, any>({
        path: `/api/Common/GetSysMsgPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Common
     * @name GetCommonGetSysMsgUnreadCount
     * @request GET:/api/Common/GetSysMsgUnreadCount
     */
    get_Common_GetSysMsgUnreadCount: (
      query: GetCommonGetSysMsgUnreadCountParams,
      params: RequestParams = {}
    ) =>
      this.request<SysMessageResultResult, any>({
        path: `/api/Common/GetSysMsgUnreadCount`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Common
     * @name GetCommonGetSetting
     * @request GET:/api/Common/GetSetting
     */
    get_Common_GetSetting: (
      query: GetCommonGetSettingParams,
      params: RequestParams = {}
    ) =>
      this.request<AccountsettingResult, any>({
        path: `/api/Common/GetSetting`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Common
     * @name PostCommonSetSetting
     * @request POST:/api/Common/SetSetting
     */
    post_Common_SetSetting: (
      data: Accountsetting,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Common/SetSetting`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Common
     * @name PostCommonUploadFile
     * @request POST:/api/Common/UploadFile
     */
    post_Common_UploadFile: (
      data: {
        /** @format binary */
        file?: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<UploadFileDTOResult, any>({
        path: `/api/Common/UploadFile`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Contract
     * @name GetContractGetMyContractInfoPage
     * @request GET:/api/Contract/GetMyContractInfoPage
     */
    get_Contract_GetMyContractInfoPage: (
      query: GetContractGetMyContractInfoPageParams,
      params: RequestParams = {}
    ) =>
      this.request<ContractinfoPageResultResult, any>({
        path: `/api/Contract/GetMyContractInfoPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Contract
     * @name GetContractGetContractTypeList
     * @request GET:/api/Contract/GetContractTypeList
     */
    get_Contract_GetContractTypeList: (params: RequestParams = {}) =>
      this.request<ContracttypeListResult, any>({
        path: `/api/Contract/GetContractTypeList`,
        method: "GET",
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Contract
     * @name GetContractGetContractInfoById
     * @request GET:/api/Contract/GetContractInfoByID
     */
    get_Contract_GetContractInfoByID: (
      query: GetContractGetContractInfoByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<ContractinfoResult, any>({
        path: `/api/Contract/GetContractInfoByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Contract
     * @name PostContractUpdateContractInfo
     * @request POST:/api/Contract/UpdateContractInfo
     */
    post_Contract_UpdateContractInfo: (
      data: Contractinfo,
      params: RequestParams = {}
    ) =>
      this.request<ContractinfoResult, any>({
        path: `/api/Contract/UpdateContractInfo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Contract
     * @name GetContractGetContractInfoApprovePage
     * @request GET:/api/Contract/GetContractInfoApprovePage
     */
    get_Contract_GetContractInfoApprovePage: (
      query: GetContractGetContractInfoApprovePageParams,
      params: RequestParams = {}
    ) =>
      this.request<ContractinfoPageResultResult, any>({
        path: `/api/Contract/GetContractInfoApprovePage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Contract
     * @name GetContractGetContractInfoEndPage
     * @request GET:/api/Contract/GetContractInfoEndPage
     */
    get_Contract_GetContractInfoEndPage: (
      query: GetContractGetContractInfoEndPageParams,
      params: RequestParams = {}
    ) =>
      this.request<ContractinfoPageResultResult, any>({
        path: `/api/Contract/GetContractInfoEndPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Contract
     * @name PostContractContractInfoApprove
     * @request POST:/api/Contract/ContractInfoApprove
     */
    post_Contract_ContractInfoApprove: (
      data: ContractInfoParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Contract/ContractInfoApprove`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Contract
     * @name PostContractContractInfoReject
     * @request POST:/api/Contract/ContractInfoReject
     */
    post_Contract_ContractInfoReject: (
      data: ContractInfoParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Contract/ContractInfoReject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Credit
     * @name GetCreditGetCreditOrderPage
     * @request GET:/api/Credit/GetCreditOrderPage
     */
    get_Credit_GetCreditOrderPage: (
      query: GetCreditGetCreditOrderPageParams,
      params: RequestParams = {}
    ) =>
      this.request<CreditorderPageResultResult, any>({
        path: `/api/Credit/GetCreditOrderPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Credit
     * @name GetCreditGetCreditPayInfoPage
     * @request GET:/api/Credit/GetCreditPayInfoPage
     */
    get_Credit_GetCreditPayInfoPage: (
      query: GetCreditGetCreditPayInfoPageParams,
      params: RequestParams = {}
    ) =>
      this.request<CreditpayinfoPageResultResult, any>({
        path: `/api/Credit/GetCreditPayInfoPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Credit
     * @name GetCreditGetCreditPayInfoApprovalPage
     * @request GET:/api/Credit/GetCreditPayInfoApprovalPage
     */
    get_Credit_GetCreditPayInfoApprovalPage: (
      query: GetCreditGetCreditPayInfoApprovalPageParams,
      params: RequestParams = {}
    ) =>
      this.request<CreditpayinfoPageResultResult, any>({
        path: `/api/Credit/GetCreditPayInfoApprovalPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Credit
     * @name PostCreditCreditPayInfoApply
     * @request POST:/api/Credit/CreditPayInfoApply
     */
    post_Credit_CreditPayInfoApply: (
      data: Creditpayinfo,
      params: RequestParams = {}
    ) =>
      this.request<CreditpayinfoResult, any>({
        path: `/api/Credit/CreditPayInfoApply`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Credit
     * @name GetCreditGetCreditPayInfoFull
     * @request GET:/api/Credit/GetCreditPayInfoFull
     */
    get_Credit_GetCreditPayInfoFull: (
      query: GetCreditGetCreditPayInfoFullParams,
      params: RequestParams = {}
    ) =>
      this.request<CreditpayinfoResult, any>({
        path: `/api/Credit/GetCreditPayInfoFull`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Credit
     * @name PostCreditCreditPayInfoApprove
     * @request POST:/api/Credit/CreditPayInfoApprove
     */
    post_Credit_CreditPayInfoApprove: (
      data: CreditPayInfoParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Credit/CreditPayInfoApprove`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Credit
     * @name PostCreditCreditPayInfoReject
     * @request POST:/api/Credit/CreditPayInfoReject
     */
    post_Credit_CreditPayInfoReject: (
      data: CreditPayInfoParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Credit/CreditPayInfoReject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Credit
     * @name GetCreditGetCreditPayInfoEndPage
     * @request GET:/api/Credit/GetCreditPayInfoEndPage
     */
    get_Credit_GetCreditPayInfoEndPage: (
      query: GetCreditGetCreditPayInfoEndPageParams,
      params: RequestParams = {}
    ) =>
      this.request<CreditpayinfoPageResultResult, any>({
        path: `/api/Credit/GetCreditPayInfoEndPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Enquiry
     * @name GetEnquiryGetEnquiryGroupPage
     * @request GET:/api/Enquiry/GetEnquiryGroupPage
     */
    get_Enquiry_GetEnquiryGroupPage: (
      query: GetEnquiryGetEnquiryGroupPageParams,
      params: RequestParams = {}
    ) =>
      this.request<EnquirygroupPageResultResult, any>({
        path: `/api/Enquiry/GetEnquiryGroupPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Enquiry
     * @name GetEnquiryGetEnquiryGroupById
     * @request GET:/api/Enquiry/GetEnquiryGroupByID
     */
    get_Enquiry_GetEnquiryGroupByID: (
      query: GetEnquiryGetEnquiryGroupByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<UpdateEnquiryGroupDTOResult, any>({
        path: `/api/Enquiry/GetEnquiryGroupByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Enquiry
     * @name PostEnquiryDelEnquiryGroupById
     * @request POST:/api/Enquiry/DelEnquiryGroupByID
     */
    post_Enquiry_DelEnquiryGroupByID: (
      data: EnquiryGroupPageParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Enquiry/DelEnquiryGroupByID`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Enquiry
     * @name PostEnquiryUpdateEnquiryGroup
     * @request POST:/api/Enquiry/UpdateEnquiryGroup
     */
    post_Enquiry_UpdateEnquiryGroup: (
      data: UpdateEnquiryGroupDTO,
      params: RequestParams = {}
    ) =>
      this.request<UpdateEnquiryGroupDTOResult, any>({
        path: `/api/Enquiry/UpdateEnquiryGroup`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Enquiry
     * @name GetEnquiryGetMyEnquiryInfoPage
     * @request GET:/api/Enquiry/GetMyEnquiryInfoPage
     */
    get_Enquiry_GetMyEnquiryInfoPage: (
      query: GetEnquiryGetMyEnquiryInfoPageParams,
      params: RequestParams = {}
    ) =>
      this.request<EnquiryinfoPageResultResult, any>({
        path: `/api/Enquiry/GetMyEnquiryInfoPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Enquiry
     * @name PostEnquiryUpdateEnquiryInfo
     * @request POST:/api/Enquiry/UpdateEnquiryInfo
     */
    post_Enquiry_UpdateEnquiryInfo: (
      data: EnquiryInfoDTO,
      params: RequestParams = {}
    ) =>
      this.request<EnquiryInfoDTOResult, any>({
        path: `/api/Enquiry/UpdateEnquiryInfo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Enquiry
     * @name GetEnquiryGetEnquiryInfoById
     * @request GET:/api/Enquiry/GetEnquiryInfoByID
     */
    get_Enquiry_GetEnquiryInfoByID: (
      query: GetEnquiryGetEnquiryInfoByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<EnquiryInfoDTOResult, any>({
        path: `/api/Enquiry/GetEnquiryInfoByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Enquiry
     * @name GetEnquiryGetMyQuotationPage
     * @request GET:/api/Enquiry/GetMyQuotationPage
     */
    get_Enquiry_GetMyQuotationPage: (
      query: GetEnquiryGetMyQuotationPageParams,
      params: RequestParams = {}
    ) =>
      this.request<EnquiryinfoPageResultResult, any>({
        path: `/api/Enquiry/GetMyQuotationPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Enquiry
     * @name PostEnquiryQuotationUpdate
     * @request POST:/api/Enquiry/QuotationUpdate
     */
    post_Enquiry_QuotationUpdate: (
      data: EnquiryInfoDTO,
      params: RequestParams = {}
    ) =>
      this.request<EnquiryInfoDTOResult, any>({
        path: `/api/Enquiry/QuotationUpdate`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Enquiry
     * @name GetEnquiryGetQuotationById
     * @request GET:/api/Enquiry/GetQuotationByID
     */
    get_Enquiry_GetQuotationByID: (
      query: GetEnquiryGetQuotationByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<EnquiryInfoDTOResult, any>({
        path: `/api/Enquiry/GetQuotationByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Enquiry
     * @name GetEnquiryGetQuotationAssessPage
     * @request GET:/api/Enquiry/GetQuotationAssessPage
     */
    get_Enquiry_GetQuotationAssessPage: (
      query: GetEnquiryGetQuotationAssessPageParams,
      params: RequestParams = {}
    ) =>
      this.request<EnquiryinfoPageResultResult, any>({
        path: `/api/Enquiry/GetQuotationAssessPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Enquiry
     * @name GetEnquiryGetQuotationAssessById
     * @request GET:/api/Enquiry/GetQuotationAssessByID
     */
    get_Enquiry_GetQuotationAssessByID: (
      query: GetEnquiryGetQuotationAssessByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<QuotationAssessDTOResult, any>({
        path: `/api/Enquiry/GetQuotationAssessByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Enquiry
     * @name PostEnquiryEndQuotation
     * @request POST:/api/Enquiry/EndQuotation
     */
    post_Enquiry_EndQuotation: (
      data: QuotationAssessUpdateParam,
      params: RequestParams = {}
    ) =>
      this.request<Int32Result, any>({
        path: `/api/Enquiry/EndQuotation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Enquiry
     * @name PostEnquiryQuotationAssessUpdate
     * @request POST:/api/Enquiry/QuotationAssessUpdate
     */
    post_Enquiry_QuotationAssessUpdate: (
      data: QuotationAssessUpdateParam,
      params: RequestParams = {}
    ) =>
      this.request<EnquiryInfoDTOResult, any>({
        path: `/api/Enquiry/QuotationAssessUpdate`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Enquiry
     * @name PostEnquiryQuotationAssessReject
     * @request POST:/api/Enquiry/QuotationAssessReject
     */
    post_Enquiry_QuotationAssessReject: (
      data: QuotationAssessUpdateParam,
      params: RequestParams = {}
    ) =>
      this.request<EnquiryInfoDTOResult, any>({
        path: `/api/Enquiry/QuotationAssessReject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Enquiry
     * @name GetEnquiryGetQuotationEndPage
     * @request GET:/api/Enquiry/GetQuotationEndPage
     */
    get_Enquiry_GetQuotationEndPage: (
      query: GetEnquiryGetQuotationEndPageParams,
      params: RequestParams = {}
    ) =>
      this.request<EnquiryinfoPageResultResult, any>({
        path: `/api/Enquiry/GetQuotationEndPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Home
     * @name GetHomeIndex
     * @request GET:/api/Home/Index
     */
    get_Home_Index: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Home/Index`,
        method: "GET",
        ...params
      }),

    /**
     * No description
     *
     * @tags Home
     * @name PostHomeLogin
     * @request POST:/api/Home/Login
     */
    post_Home_Login: (data: LoginDTO, params: RequestParams = {}) =>
      this.request<Int32Result, any>({
        path: `/api/Home/Login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Home
     * @name GetHomeLogOut
     * @request GET:/api/Home/LogOut
     */
    get_Home_LogOut: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Home/LogOut`,
        method: "GET",
        ...params
      }),

    /**
     * No description
     *
     * @tags Home
     * @name GetHomeLoginVerifyImg
     * @request GET:/api/home/LoginVerifyImg
     */
    get_Home_LoginVerifyImg: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/home/LoginVerifyImg`,
        method: "GET",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name GetLaborGetLaborInfoPageApi
     * @request GET:/api/Labor/GetLaborInfoPageAPI
     */
    get_Labor_GetLaborInfoPageAPI: (
      query: GetLaborGetLaborInfoPageApiParams,
      params: RequestParams = {}
    ) =>
      this.request<LaborinfoPageResultResult, any>({
        path: `/api/Labor/GetLaborInfoPageAPI`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name GetLaborGetLaborApprovePageApi
     * @request GET:/api/Labor/GetLaborApprovePageAPI
     */
    get_Labor_GetLaborApprovePageAPI: (
      query: GetLaborGetLaborApprovePageApiParams,
      params: RequestParams = {}
    ) =>
      this.request<LaborinfoPageResultResult, any>({
        path: `/api/Labor/GetLaborApprovePageAPI`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name PostLaborLaborUpdateApi
     * @request POST:/api/Labor/LaborUpdateAPI
     */
    post_Labor_LaborUpdateAPI: (data: Laborinfo, params: RequestParams = {}) =>
      this.request<LaborinfoResult, any>({
        path: `/api/Labor/LaborUpdateAPI`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name PostLaborLaborInfoApprove
     * @request POST:/api/Labor/LaborInfoApprove
     */
    post_Labor_LaborInfoApprove: (
      data: LaborInfoParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Labor/LaborInfoApprove`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name PostLaborLaborInfoReject
     * @request POST:/api/Labor/LaborInfoReject
     */
    post_Labor_LaborInfoReject: (
      data: LaborInfoParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Labor/LaborInfoReject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name GetLaborGetLaborById
     * @request GET:/api/Labor/GetLaborByID
     */
    get_Labor_GetLaborByID: (
      query: GetLaborGetLaborByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<LaborinfoResult, any>({
        path: `/api/Labor/GetLaborByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name GetLaborGetLaborFullById
     * @request GET:/api/Labor/GetLaborFullByID
     */
    get_Labor_GetLaborFullByID: (
      query: GetLaborGetLaborFullByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<LaborinfoResult, any>({
        path: `/api/Labor/GetLaborFullByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name GetLaborGetLaborForPay
     * @request GET:/api/Labor/GetLaborForPay
     */
    get_Labor_GetLaborForPay: (
      query: GetLaborGetLaborForPayParams,
      params: RequestParams = {}
    ) =>
      this.request<LaborinfoResult, any>({
        path: `/api/Labor/GetLaborForPay`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name GetLaborGetWinLaborApi
     * @request GET:/api/Labor/GetWinLaborAPI
     */
    get_Labor_GetWinLaborAPI: (
      query: GetLaborGetWinLaborApiParams,
      params: RequestParams = {}
    ) =>
      this.request<LaborinfoPageResultResult, any>({
        path: `/api/Labor/GetWinLaborAPI`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name GetLaborGetLaborPayApplyApi
     * @request GET:/api/Labor/GetLaborPayApplyAPI
     */
    get_Labor_GetLaborPayApplyAPI: (
      query: GetLaborGetLaborPayApplyApiParams,
      params: RequestParams = {}
    ) =>
      this.request<LaborinfoPageResultResult, any>({
        path: `/api/Labor/GetLaborPayApplyAPI`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name PostLaborConfirmFinLabor
     * @request POST:/api/Labor/ConfirmFinLabor
     */
    post_Labor_ConfirmFinLabor: (
      data: LaborInfoParam,
      params: RequestParams = {}
    ) =>
      this.request<Int32Result, any>({
        path: `/api/Labor/ConfirmFinLabor`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name GetLaborGetLaborInfoEndPage
     * @request GET:/api/Labor/GetLaborInfoEndPage
     */
    get_Labor_GetLaborInfoEndPage: (
      query: GetLaborGetLaborInfoEndPageParams,
      params: RequestParams = {}
    ) =>
      this.request<LaborinfoPageResultResult, any>({
        path: `/api/Labor/GetLaborInfoEndPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name PostLaborLaborPayApproval
     * @request POST:/api/Labor/LaborPayApproval
     */
    post_Labor_LaborPayApproval: (
      data: LaborPayParam,
      params: RequestParams = {}
    ) =>
      this.request<LaborinfoResult, any>({
        path: `/api/Labor/LaborPayApproval`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name GetLaborGetLaborPayApprove
     * @request GET:/api/Labor/GetLaborPayApprove
     */
    get_Labor_GetLaborPayApprove: (
      query: GetLaborGetLaborPayApproveParams,
      params: RequestParams = {}
    ) =>
      this.request<LaboraPayInfoPageResultResult, any>({
        path: `/api/Labor/GetLaborPayApprove`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name GetLaborGetLaborPayApproveSuccess
     * @request GET:/api/Labor/GetLaborPayApproveSuccess
     */
    get_Labor_GetLaborPayApproveSuccess: (
      query: GetLaborGetLaborPayApproveSuccessParams,
      params: RequestParams = {}
    ) =>
      this.request<LaboraPayInfoPageResultResult, any>({
        path: `/api/Labor/GetLaborPayApproveSuccess`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name PostLaborLaborPayApprove
     * @request POST:/api/Labor/LaborPayApprove
     */
    post_Labor_LaborPayApprove: (
      data: LaboraPayInfo,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Labor/LaborPayApprove`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name PostLaborLaborPayReject
     * @request POST:/api/Labor/LaborPayReject
     */
    post_Labor_LaborPayReject: (
      data: LaborInfoParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Labor/LaborPayReject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name GetLaborGetLaborPay
     * @request GET:/api/Labor/GetLaborPay
     */
    get_Labor_GetLaborPay: (
      query: GetLaborGetLaborPayParams,
      params: RequestParams = {}
    ) =>
      this.request<LaboraPayInfoResult, any>({
        path: `/api/Labor/GetLaborPay`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name GetLaborGetLaborPayEndPage
     * @request GET:/api/Labor/GetLaborPayEndPage
     */
    get_Labor_GetLaborPayEndPage: (
      query: GetLaborGetLaborPayEndPageParams,
      params: RequestParams = {}
    ) =>
      this.request<LaboraPayInfoPageResultResult, any>({
        path: `/api/Labor/GetLaborPayEndPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name PostLaborUpdateLaborPaySettlement
     * @request POST:/api/Labor/UpdateLaborPaySettlement
     */
    post_Labor_UpdateLaborPaySettlement: (
      data: LaboraPayInfo,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Labor/UpdateLaborPaySettlement`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name PostLaborLaborChangeUpdateApi
     * @request POST:/api/Labor/LaborChangeUpdateAPI
     */
    post_Labor_LaborChangeUpdateAPI: (
      data: Laborinfochange,
      params: RequestParams = {}
    ) =>
      this.request<LaborinfoResult, any>({
        path: `/api/Labor/LaborChangeUpdateAPI`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name PostLaborGetLaborChangeApproveApi
     * @request POST:/api/Labor/GetLaborChangeApproveAPI
     */
    post_Labor_GetLaborChangeApproveAPI: (
      data: LaborInfoParam,
      params: RequestParams = {}
    ) =>
      this.request<LaborinfochangePageResultResult, any>({
        path: `/api/Labor/GetLaborChangeApproveAPI`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name GetLaborGetLaborChangeFullById
     * @request GET:/api/Labor/GetLaborChangeFullByID
     */
    get_Labor_GetLaborChangeFullByID: (
      query: GetLaborGetLaborChangeFullByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<LaborinfochangeResult, any>({
        path: `/api/Labor/GetLaborChangeFullByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name PostLaborLaborChangeApprove
     * @request POST:/api/Labor/LaborChangeApprove
     */
    post_Labor_LaborChangeApprove: (
      data: LaborInfoParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Labor/LaborChangeApprove`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Labor
     * @name PostLaborLaborChangeReject
     * @request POST:/api/Labor/LaborChangeReject
     */
    post_Labor_LaborChangeReject: (
      data: LaborInfoParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Labor/LaborChangeReject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Lease
     * @name GetLeaseGetMyLeasePage
     * @request GET:/api/Lease/GetMyLeasePage
     */
    get_Lease_GetMyLeasePage: (
      query: GetLeaseGetMyLeasePageParams,
      params: RequestParams = {}
    ) =>
      this.request<LeaseinfoPageResultResult, any>({
        path: `/api/Lease/GetMyLeasePage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Lease
     * @name GetLeaseGetLeasePageFinish
     * @request GET:/api/Lease/GetLeasePageFinish
     */
    get_Lease_GetLeasePageFinish: (
      query: GetLeaseGetLeasePageFinishParams,
      params: RequestParams = {}
    ) =>
      this.request<LeaseinfoPageResultResult, any>({
        path: `/api/Lease/GetLeasePageFinish`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Lease
     * @name GetLeaseGetLeaseApprovePage
     * @request GET:/api/Lease/GetLeaseApprovePage
     */
    get_Lease_GetLeaseApprovePage: (
      query: GetLeaseGetLeaseApprovePageParams,
      params: RequestParams = {}
    ) =>
      this.request<LeaseinfoPageResultResult, any>({
        path: `/api/Lease/GetLeaseApprovePage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Lease
     * @name PostLeaseLeaseApproveApi
     * @request POST:/api/Lease/LeaseApproveApi
     */
    post_Lease_LeaseApproveApi: (
      data: LeaseParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Lease/LeaseApproveApi`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Lease
     * @name PostLeaseLeaseFinishWork
     * @request POST:/api/Lease/LeaseFinishWork
     */
    post_Lease_LeaseFinishWork: (
      data: LeaseParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Lease/LeaseFinishWork`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Lease
     * @name PostLeaseLeaseRejectApi
     * @request POST:/api/Lease/LeaseRejectApi
     */
    post_Lease_LeaseRejectApi: (data: LeaseParam, params: RequestParams = {}) =>
      this.request<Result, any>({
        path: `/api/Lease/LeaseRejectApi`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Lease
     * @name GetLeaseGetLeaseFullById
     * @request GET:/api/Lease/GetLeaseFullById
     */
    get_Lease_GetLeaseFullById: (
      query: GetLeaseGetLeaseFullByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<LeaseinfoResult, any>({
        path: `/api/Lease/GetLeaseFullById`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Lease
     * @name PostLeaseLeaseApplyApi
     * @request POST:/api/Lease/LeaseApplyApi
     */
    post_Lease_LeaseApplyApi: (data: Leaseinfo, params: RequestParams = {}) =>
      this.request<LeaseinfoResult, any>({
        path: `/api/Lease/LeaseApplyApi`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Lease
     * @name PostLeaseLeaseCompletionApply
     * @request POST:/api/Lease/LeaseCompletionApply
     */
    post_Lease_LeaseCompletionApply: (
      data: Leaseinfo,
      params: RequestParams = {}
    ) =>
      this.request<LeaseinfoResult, any>({
        path: `/api/Lease/LeaseCompletionApply`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Lease
     * @name GetLeaseGetLeaseCompletionApproveApi
     * @request GET:/api/Lease/GetLeaseCompletionApproveApi
     */
    get_Lease_GetLeaseCompletionApproveApi: (
      query: GetLeaseGetLeaseCompletionApproveApiParams,
      params: RequestParams = {}
    ) =>
      this.request<LeaseinfoPageResultResult, any>({
        path: `/api/Lease/GetLeaseCompletionApproveApi`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Lease
     * @name PostLeaseLeaseCompletionApproveApi
     * @request POST:/api/Lease/LeaseCompletionApproveApi
     */
    post_Lease_LeaseCompletionApproveApi: (
      data: LeaseParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Lease/LeaseCompletionApproveApi`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Lease
     * @name PostLeaseLeaseCompletionRejectApi
     * @request POST:/api/Lease/LeaseCompletionRejectApi
     */
    post_Lease_LeaseCompletionRejectApi: (
      data: LeaseParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Lease/LeaseCompletionRejectApi`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Main
     * @name PostMainLogin
     * @request POST:/api/Main/Login
     */
    post_Main_Login: (data: LoginDTO, params: RequestParams = {}) =>
      this.request<Int32Result, any>({
        path: `/api/Main/Login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Main
     * @name GetMainLogOut
     * @request GET:/api/Main/LogOut
     */
    get_Main_LogOut: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Main/LogOut`,
        method: "GET",
        ...params
      }),

    /**
     * No description
     *
     * @tags Main
     * @name GetMainLoginVerifyImg
     * @request GET:/api/Main/LoginVerifyImg
     */
    get_Main_LoginVerifyImg: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Main/LoginVerifyImg`,
        method: "GET",
        ...params
      }),

    /**
     * No description
     *
     * @tags Material
     * @name GetMaterialGetMaterialInfoPage
     * @request GET:/api/Material/GetMaterialInfoPage
     */
    get_Material_GetMaterialInfoPage: (
      query: GetMaterialGetMaterialInfoPageParams,
      params: RequestParams = {}
    ) =>
      this.request<MaterialInfoDTOPageResultResult, any>({
        path: `/api/Material/GetMaterialInfoPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Material
     * @name GetMaterialGetMaterialInfoPageByJobId
     * @request GET:/api/Material/GetMaterialInfoPageByJobID
     */
    get_Material_GetMaterialInfoPageByJobID: (
      query: GetMaterialGetMaterialInfoPageByJobIdParams,
      params: RequestParams = {}
    ) =>
      this.request<MaterialinfoPageResultResult, any>({
        path: `/api/Material/GetMaterialInfoPageByJobID`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Material
     * @name GetMaterialGetMaterialPricePage
     * @request GET:/api/Material/GetMaterialPricePage
     */
    get_Material_GetMaterialPricePage: (
      query: GetMaterialGetMaterialPricePageParams,
      params: RequestParams = {}
    ) =>
      this.request<MaterialInfoDTOPageResultResult, any>({
        path: `/api/Material/GetMaterialPricePage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Material
     * @name GetMaterialGetMaterialInfoById
     * @request GET:/api/Material/GetMaterialInfoByID
     */
    get_Material_GetMaterialInfoByID: (
      query: GetMaterialGetMaterialInfoByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<MaterialinfoResult, any>({
        path: `/api/Material/GetMaterialInfoByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Material
     * @name PostMaterialDelMaterialInfoById
     * @request POST:/api/Material/DelMaterialInfoByID
     */
    post_Material_DelMaterialInfoByID: (
      data: MaterialInfoPageParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Material/DelMaterialInfoByID`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Material
     * @name PostMaterialUpdateMaterialInfo
     * @request POST:/api/Material/UpdateMaterialInfo
     */
    post_Material_UpdateMaterialInfo: (
      data: MaterialInfoDTO,
      params: RequestParams = {}
    ) =>
      this.request<MaterialInfoDTOResult, any>({
        path: `/api/Material/UpdateMaterialInfo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Material
     * @name PostMaterialUploadMaterialInfoItem
     * @request POST:/api/Material/UploadMaterialInfoItem
     */
    post_Material_UploadMaterialInfoItem: (
      data: {
        /** @format binary */
        file?: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<Int32Result, any>({
        path: `/api/Material/UploadMaterialInfoItem`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Office
     * @name GetOfficeGetOfficeInfoById
     * @request GET:/api/Office/GetOfficeInfoByID
     */
    get_Office_GetOfficeInfoByID: (
      query: GetOfficeGetOfficeInfoByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<OfficeinfoResult, any>({
        path: `/api/Office/GetOfficeInfoByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Office
     * @name GetOfficeGetOfficePage
     * @request GET:/api/Office/GetOfficePage
     */
    get_Office_GetOfficePage: (
      query: GetOfficeGetOfficePageParams,
      params: RequestParams = {}
    ) =>
      this.request<OfficeinfoPageResultResult, any>({
        path: `/api/Office/GetOfficePage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Office
     * @name PostOfficeOfficeApply
     * @request POST:/api/Office/OfficeApply
     */
    post_Office_OfficeApply: (data: Officeinfo, params: RequestParams = {}) =>
      this.request<OfficeinfoResult, any>({
        path: `/api/Office/OfficeApply`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Office
     * @name PostOfficeOfficeApproveApi
     * @request POST:/api/Office/OfficeApproveApi
     */
    post_Office_OfficeApproveApi: (
      data: OfficeParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Office/OfficeApproveApi`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Office
     * @name PostOfficeOfficeRejectApi
     * @request POST:/api/Office/OfficeRejectApi
     */
    post_Office_OfficeRejectApi: (
      data: OfficeParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Office/OfficeRejectApi`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Office
     * @name GetOfficeGetOfficeApprovePageApi
     * @request GET:/api/Office/GetOfficeApprovePageApi
     */
    get_Office_GetOfficeApprovePageApi: (
      query: GetOfficeGetOfficeApprovePageApiParams,
      params: RequestParams = {}
    ) =>
      this.request<OfficeinfoPageResultResult, any>({
        path: `/api/Office/GetOfficeApprovePageApi`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Office
     * @name GetOfficeGetOfficeApproveEndPage
     * @request GET:/api/Office/GetOfficeApproveEndPage
     */
    get_Office_GetOfficeApproveEndPage: (
      query: GetOfficeGetOfficeApproveEndPageParams,
      params: RequestParams = {}
    ) =>
      this.request<OfficeinfoPageResultResult, any>({
        path: `/api/Office/GetOfficeApproveEndPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Official
     * @name GetOfficialGetOfficialInfoPage
     * @request GET:/api/Official/GetOfficialInfoPage
     */
    get_Official_GetOfficialInfoPage: (
      query: GetOfficialGetOfficialInfoPageParams,
      params: RequestParams = {}
    ) =>
      this.request<OfficialinfoPageResultResult, any>({
        path: `/api/Official/GetOfficialInfoPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Official
     * @name GetOfficialGetOfficialInfoById
     * @request GET:/api/Official/GetOfficialInfoByID
     */
    get_Official_GetOfficialInfoByID: (
      query: GetOfficialGetOfficialInfoByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<OfficialinfoResult, any>({
        path: `/api/Official/GetOfficialInfoByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Official
     * @name PostOfficialUpdateOfficialInfo
     * @request POST:/api/Official/UpdateOfficialInfo
     */
    post_Official_UpdateOfficialInfo: (
      data: Officialinfo,
      params: RequestParams = {}
    ) =>
      this.request<OfficialinfoResult, any>({
        path: `/api/Official/UpdateOfficialInfo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Official
     * @name GetOfficialGetOfficialInfoApprovePage
     * @request GET:/api/Official/GetOfficialInfoApprovePage
     */
    get_Official_GetOfficialInfoApprovePage: (
      query: GetOfficialGetOfficialInfoApprovePageParams,
      params: RequestParams = {}
    ) =>
      this.request<OfficialinfoPageResultResult, any>({
        path: `/api/Official/GetOfficialInfoApprovePage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Official
     * @name PostOfficialOfficialInfoApprove
     * @request POST:/api/Official/OfficialInfoApprove
     */
    post_Official_OfficialInfoApprove: (
      data: OfficialInfoParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Official/OfficialInfoApprove`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Official
     * @name PostOfficialOfficialInfoReject
     * @request POST:/api/Official/OfficialInfoReject
     */
    post_Official_OfficialInfoReject: (
      data: OfficialInfoParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Official/OfficialInfoReject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Official
     * @name GetOfficialGetOfficialInfoEndPage
     * @request GET:/api/Official/GetOfficialInfoEndPage
     */
    get_Official_GetOfficialInfoEndPage: (
      query: GetOfficialGetOfficialInfoEndPageParams,
      params: RequestParams = {}
    ) =>
      this.request<OfficialinfoPageResultResult, any>({
        path: `/api/Official/GetOfficialInfoEndPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Procure
     * @name PostProcureProcureMaterialPriceUpdateApi
     * @request POST:/api/Procure/ProcureMaterialPriceUpdateApi
     */
    post_Procure_ProcureMaterialPriceUpdateApi: (
      data: Procurematerialinfo,
      params: RequestParams = {}
    ) =>
      this.request<ProcurematerialinfoResult, any>({
        path: `/api/Procure/ProcureMaterialPriceUpdateApi`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Procure
     * @name GetProcureGetProcureMaterialById
     * @request GET:/api/Procure/GetProcureMaterialByID
     */
    get_Procure_GetProcureMaterialByID: (
      query: GetProcureGetProcureMaterialByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<ProcurematerialinfoResult, any>({
        path: `/api/Procure/GetProcureMaterialByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Procure
     * @name GetProcureGetProcureMaterialByIdWithPrice
     * @request GET:/api/Procure/GetProcureMaterialByID_WithPrice
     */
    get_Procure_GetProcureMaterialByID_WithPrice: (
      query: GetProcureGetProcureMaterialByIdWithPriceParams,
      params: RequestParams = {}
    ) =>
      this.request<ProcurematerialinfoResult, any>({
        path: `/api/Procure/GetProcureMaterialByID_WithPrice`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Procure
     * @name PostProcureMatchPrice
     * @request POST:/api/Procure/MatchPrice
     */
    post_Procure_MatchPrice: (data: ProcureParam, params: RequestParams = {}) =>
      this.request<MatchPriceDTOListResult, any>({
        path: `/api/Procure/MatchPrice`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Procure
     * @name GetProcureGetMyProcureMaterialPage
     * @request GET:/api/Procure/GetMyProcureMaterialPage
     */
    get_Procure_GetMyProcureMaterialPage: (
      query: GetProcureGetMyProcureMaterialPageParams,
      params: RequestParams = {}
    ) =>
      this.request<ProcurematerialinfoPageResultResult, any>({
        path: `/api/Procure/GetMyProcureMaterialPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Procure
     * @name GetProcureGetProcureMaterialPricePageApi
     * @request GET:/api/Procure/GetProcureMaterialPricePageApi
     */
    get_Procure_GetProcureMaterialPricePageApi: (
      query: GetProcureGetProcureMaterialPricePageApiParams,
      params: RequestParams = {}
    ) =>
      this.request<ProcurematerialinfoPageResultResult, any>({
        path: `/api/Procure/GetProcureMaterialPricePageApi`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Procure
     * @name GetProcureGetProcureMaterialPriceApi
     * @request GET:/api/Procure/GetProcureMaterialPriceApi
     */
    get_Procure_GetProcureMaterialPriceApi: (
      query: GetProcureGetProcureMaterialPriceApiParams,
      params: RequestParams = {}
    ) =>
      this.request<ProcurematerialinfoPageResultResult, any>({
        path: `/api/Procure/GetProcureMaterialPriceApi`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Procure
     * @name PostProcureProcureMaterialApply
     * @request POST:/api/Procure/ProcureMaterialApply
     */
    post_Procure_ProcureMaterialApply: (
      data: ProcureMaterialApplyDTO,
      params: RequestParams = {}
    ) =>
      this.request<ProcurematerialinfoResult, any>({
        path: `/api/Procure/ProcureMaterialApply`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Procure
     * @name PostProcureProcureMaterialApproveApi
     * @request POST:/api/Procure/ProcureMaterialApproveApi
     */
    post_Procure_ProcureMaterialApproveApi: (
      data: ProcureParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Procure/ProcureMaterialApproveApi`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Procure
     * @name PostProcureProcureMaterialReject
     * @request POST:/api/Procure/ProcureMaterialReject
     */
    post_Procure_ProcureMaterialReject: (
      data: ProcureParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Procure/ProcureMaterialReject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Procure
     * @name GetProcureGetProcureMaterialApprovePageApi
     * @request GET:/api/Procure/GetProcureMaterialApprovePageApi
     */
    get_Procure_GetProcureMaterialApprovePageApi: (
      query: GetProcureGetProcureMaterialApprovePageApiParams,
      params: RequestParams = {}
    ) =>
      this.request<ProcurematerialinfoPageResultResult, any>({
        path: `/api/Procure/GetProcureMaterialApprovePageApi`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Procure
     * @name GetProcureGetProcurePriceEndApi
     * @request GET:/api/Procure/GetProcurePriceEndApi
     */
    get_Procure_GetProcurePriceEndApi: (
      query: GetProcureGetProcurePriceEndApiParams,
      params: RequestParams = {}
    ) =>
      this.request<ProcurematerialinfoPageResultResult, any>({
        path: `/api/Procure/GetProcurePriceEndApi`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name GetProjectGetProjectPage
     * @request GET:/api/Project/GetProjectPage
     */
    get_Project_GetProjectPage: (
      query: GetProjectGetProjectPageParams,
      params: RequestParams = {}
    ) =>
      this.request<ProjectinfoPageResultResult, any>({
        path: `/api/Project/GetProjectPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name PostProjectProjectUpdate
     * @request POST:/api/Project/ProjectUpdate
     */
    post_Project_ProjectUpdate: (
      data: Projectinfo,
      params: RequestParams = {}
    ) =>
      this.request<ProjectinfoResult, any>({
        path: `/api/Project/ProjectUpdate`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name GetProjectGetProjectById
     * @request GET:/api/Project/GetProjectByID
     */
    get_Project_GetProjectByID: (
      query: GetProjectGetProjectByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<ProjectinfoResult, any>({
        path: `/api/Project/GetProjectByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name GetProjectGetAccountProjectList
     * @request GET:/api/Project/GetAccountProjectList
     */
    get_Project_GetAccountProjectList: (params: RequestParams = {}) =>
      this.request<ProjectinfoListResult, any>({
        path: `/api/Project/GetAccountProjectList`,
        method: "GET",
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name GetProjectGetProjectPhaseAll
     * @request GET:/api/Project/GetProjectPhaseAll
     */
    get_Project_GetProjectPhaseAll: (
      query: GetProjectGetProjectPhaseAllParams,
      params: RequestParams = {}
    ) =>
      this.request<ProjectphaseListResult, any>({
        path: `/api/Project/GetProjectPhaseAll`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name GetProjectGetProjectItemPage
     * @request GET:/api/Project/GetProjectItemPage
     */
    get_Project_GetProjectItemPage: (
      query: GetProjectGetProjectItemPageParams,
      params: RequestParams = {}
    ) =>
      this.request<ProjectitemPageResultResult, any>({
        path: `/api/Project/GetProjectItemPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name GetProjectGetProjectItemMaterialPage
     * @request GET:/api/Project/GetProjectItemMaterialPage
     */
    get_Project_GetProjectItemMaterialPage: (
      query: GetProjectGetProjectItemMaterialPageParams,
      params: RequestParams = {}
    ) =>
      this.request<ProjectItemMaterialResultPageResultResult, any>({
        path: `/api/Project/GetProjectItemMaterialPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name PostProjectUploadProjectItem
     * @request POST:/api/Project/UploadProjectItem
     */
    post_Project_UploadProjectItem: (
      data: {
        /** @format int64 */
        ID?: number;
        Code?: string;
        Describe?: string;
        Ext1?: string;
        /** @format double */
        Loss?: number;
        /** @format double */
        MaxQuantity?: number;
        Name?: string;
        Notes?: string;
        /** @format int32 */
        PhaseID?: number;
        /** @format double */
        PreAuxiliaryUnitPrice?: number;
        /** @format double */
        PreInstrumentUnitPrice?: number;
        /** @format double */
        PreLaborUnitPrice?: number;
        /** @format double */
        PreMaterialUnitPrice?: number;
        /** @format double */
        PreQuantity?: number;
        /** @format int32 */
        ProjectID?: number;
        Unit?: string;
        /** @format date-time */
        UpdateTime?: string;
        UploadSerialNumber?: string;
        MaterialItems?: Projectitemmaterial[];
        ProjectName?: string;
        PhaseName?: string;
        /** @format binary */
        file?: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<Int32Result, any>({
        path: `/api/Project/UploadProjectItem`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name PostProjectUploadProjectItemMaterial
     * @request POST:/api/Project/UploadProjectItemMaterial
     */
    post_Project_UploadProjectItemMaterial: (
      data: {
        /** @format int32 */
        ProjectID?: number;
        Items?: Projectitemmaterial[];
        /** @format binary */
        file?: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<Int32Result, any>({
        path: `/api/Project/UploadProjectItemMaterial`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name GetProjectGetProjectItemById
     * @request GET:/api/Project/GetProjectItemByID
     */
    get_Project_GetProjectItemByID: (
      query: GetProjectGetProjectItemByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<ProjectitemResult, any>({
        path: `/api/Project/GetProjectItemByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name PostProjectDelProjectItemById
     * @request POST:/api/Project/DelProjectItemByID
     */
    post_Project_DelProjectItemByID: (
      data: ProjectItemPageParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Project/DelProjectItemByID`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name GetProjectGetFullProjectItemById
     * @request GET:/api/Project/GetFullProjectItemByID
     */
    get_Project_GetFullProjectItemByID: (
      query: GetProjectGetFullProjectItemByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<ProjectitemResult, any>({
        path: `/api/Project/GetFullProjectItemByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name PostProjectUpdateProjectItem
     * @request POST:/api/Project/UpdateProjectItem
     */
    post_Project_UpdateProjectItem: (
      data: UploadProjectItem,
      params: RequestParams = {}
    ) =>
      this.request<ProjectitemResult, any>({
        path: `/api/Project/UpdateProjectItem`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name GetProjectGetProjectPhasePage
     * @request GET:/api/Project/GetProjectPhasePage
     */
    get_Project_GetProjectPhasePage: (
      query: GetProjectGetProjectPhasePageParams,
      params: RequestParams = {}
    ) =>
      this.request<ProjectphasePageResultResult, any>({
        path: `/api/Project/GetProjectPhasePage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name GetProjectGetProjectPhaseById
     * @request GET:/api/Project/GetProjectPhaseByID
     */
    get_Project_GetProjectPhaseByID: (
      query: GetProjectGetProjectPhaseByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<ProjectphaseResult, any>({
        path: `/api/Project/GetProjectPhaseByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name PostProjectDelProjectPhaseById
     * @request POST:/api/Project/DelProjectPhaseByID
     */
    post_Project_DelProjectPhaseByID: (
      data: Projectphase,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/Project/DelProjectPhaseByID`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name PostProjectUpdateProjectPhase
     * @request POST:/api/Project/UpdateProjectPhase
     */
    post_Project_UpdateProjectPhase: (
      data: Projectphase,
      params: RequestParams = {}
    ) =>
      this.request<ProjectphaseResult, any>({
        path: `/api/Project/UpdateProjectPhase`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name GetProjectGetProjectStatistics
     * @request GET:/api/Project/GetProjectStatistics
     */
    get_Project_GetProjectStatistics: (
      query: GetProjectGetProjectStatisticsParams,
      params: RequestParams = {}
    ) =>
      this.request<ProjectItemStatisticsListResult, any>({
        path: `/api/Project/GetProjectStatistics`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Project
     * @name GetProjectGetQuotationStatistics
     * @request GET:/api/Project/GetQuotationStatistics
     */
    get_Project_GetQuotationStatistics: (
      query: GetProjectGetQuotationStatisticsParams,
      params: RequestParams = {}
    ) =>
      this.request<QuotationStatisticsListResult, any>({
        path: `/api/Project/GetQuotationStatistics`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags System
     * @name GetSystemGetAccountMenuTree
     * @request GET:/api/System/GetAccountMenuTree
     */
    get_System_GetAccountMenuTree: (params: RequestParams = {}) =>
      this.request<PureMenuDTOListResult, any>({
        path: `/api/System/GetAccountMenuTree`,
        method: "GET",
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags System
     * @name GetSystemGetRolePage
     * @request GET:/api/System/GetRolePage
     */
    get_System_GetRolePage: (
      query: GetSystemGetRolePageParams,
      params: RequestParams = {}
    ) =>
      this.request<RolePageResultResult, any>({
        path: `/api/System/GetRolePage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags System
     * @name PostSystemUpdateRole
     * @request POST:/api/System/UpdateRole
     */
    post_System_UpdateRole: (
      data: RoleUpdateParam,
      params: RequestParams = {}
    ) =>
      this.request<RoleUpdateParamResult, any>({
        path: `/api/System/UpdateRole`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags System
     * @name PostSystemDelRole
     * @request POST:/api/System/DelRole
     */
    post_System_DelRole: (data: RoleUpdateParam, params: RequestParams = {}) =>
      this.request<Result, any>({
        path: `/api/System/DelRole`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags System
     * @name GetSystemGetApiInfoPage
     * @request GET:/api/System/GetApiInfoPage
     */
    get_System_GetApiInfoPage: (
      query: GetSystemGetApiInfoPageParams,
      params: RequestParams = {}
    ) =>
      this.request<ApiinfoPageResultResult, any>({
        path: `/api/System/GetApiInfoPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags System
     * @name GetSystemGetApiInfoById
     * @request GET:/api/System/GetApiInfoById
     */
    get_System_GetApiInfoById: (
      query: GetSystemGetApiInfoByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<ApiinfoResult, any>({
        path: `/api/System/GetApiInfoById`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags System
     * @name PostSystemDelApiInfo
     * @request POST:/api/System/DelApiInfo
     */
    post_System_DelApiInfo: (
      data: ApiInfoPageParam,
      params: RequestParams = {}
    ) =>
      this.request<Result, any>({
        path: `/api/System/DelApiInfo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags System
     * @name PostSystemUpdateApiInfo
     * @request POST:/api/System/UpdateApiInfo
     */
    post_System_UpdateApiInfo: (
      data: UpdateApiInfoDTO,
      params: RequestParams = {}
    ) =>
      this.request<Int64Result, any>({
        path: `/api/System/UpdateApiInfo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags System
     * @name GetSystemGetDepartmentPage
     * @request GET:/api/System/GetDepartmentPage
     */
    get_System_GetDepartmentPage: (
      query: GetSystemGetDepartmentPageParams,
      params: RequestParams = {}
    ) =>
      this.request<DepartmentPageResultResult, any>({
        path: `/api/System/GetDepartmentPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags System
     * @name GetSystemGetDepartmentById
     * @request GET:/api/System/GetDepartmentById
     */
    get_System_GetDepartmentById: (
      query: GetSystemGetDepartmentByIdParams,
      params: RequestParams = {}
    ) =>
      this.request<DepartmentResult, any>({
        path: `/api/System/GetDepartmentById`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags System
     * @name PostSystemUpdateDepartment
     * @request POST:/api/System/UpdateDepartment
     */
    post_System_UpdateDepartment: (
      data: Department,
      params: RequestParams = {}
    ) =>
      this.request<DepartmentResult, any>({
        path: `/api/System/UpdateDepartment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      })
  };
}
