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
  accountID?: number;
  accountNumber?: string | null;
  /** @format date-time */
  createTime?: string;
  /** @format date-time */
  lastLoginTime?: string;
  password?: string | null;
  /** @format int32 */
  status?: number;
}

export interface AccountPageResult {
  /** @format int32 */
  accountID?: number;
  accountNumber?: string | null;
  /** @format date-time */
  createTime?: string;
  /** @format date-time */
  lastLoginTime?: string;
  /** @format date-time */
  birthday?: string;
  name?: string | null;
  notes?: string | null;
  /** @format int32 */
  sex?: number;
  telephone?: string | null;
  /** @format int32 */
  status?: number;
}

export interface AccountPageResultListResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: AccountPageResult[] | null;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface AccountPageResultPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: AccountPageResult[] | null;
}

export interface AccountPageResultPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: AccountPageResultPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface Accountsetting {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accentID?: number;
  name?: string | null;
  type?: string | null;
  value?: string | null;
}

export interface AccountsettingResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: Accountsetting;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface ApiInfoPageParam {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  /** @format int32 */
  id?: number | null;
  isMenu?: boolean | null;
  name?: string | null;
  notes?: string | null;
  /** @format int32 */
  parentID?: number | null;
  action?: string | null;
  area?: string | null;
  controller?: string | null;
  path?: string | null;
  /** @format int32 */
  type?: number | null;
}

export interface Apiinfo {
  /** @format int32 */
  id?: number;
  action?: string | null;
  area?: string | null;
  controller?: string | null;
  isMenu?: boolean;
  name?: string | null;
  notes?: string | null;
  /** @format int32 */
  parentID?: number;
  path?: string | null;
  /** @format int32 */
  sort?: number;
  /** @format int32 */
  type?: number | null;
  /** @format date-time */
  updateTime?: string;
  typeName?: string | null;
}

export interface ApiinfoPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Apiinfo[] | null;
}

export interface ApiinfoPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: ApiinfoPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface ApiinfoResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: Apiinfo;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface ApprovalRecords {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountID?: number;
  accountName?: string | null;
  /** @format int32 */
  approvalID?: number;
  /** @format int32 */
  approvalStatus?: number;
  /** @format date-time */
  approvalTime?: string;
  /** @format int32 */
  flowType?: number;
}

export interface ChangeMyPasswordDTO {
  /** @format int32 */
  accountID?: number;
  oldPassword?: string | null;
  newPassword?: string | null;
}

export interface ContractInfoParam {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  status?: number | null;
  statusList?: number[] | null;
  title?: string | null;
  /** @format int32 */
  typeID?: number | null;
  roleNames?: string[] | null;
  /** @format int32 */
  accountID?: number | null;
}

export interface Contractinfo {
  /** @format int32 */
  id?: number;
  /**
   * 申请人
   * @format int32
   */
  accountID?: number;
  annex1?: string | null;
  annex2?: string | null;
  /** @format int32 */
  assessID1?: number | null;
  /** @format int32 */
  assessID2?: number | null;
  /** @format int32 */
  assessID3?: number | null;
  /** @format int32 */
  assessID4?: number | null;
  /** @format int32 */
  assessID5?: number | null;
  /** @format int32 */
  assessID6?: number | null;
  /** @format date-time */
  assessTime1?: string | null;
  /** @format date-time */
  assessTime2?: string | null;
  /** @format date-time */
  assessTime3?: string | null;
  /** @format date-time */
  assessTime4?: string | null;
  /** @format date-time */
  assessTime5?: string | null;
  /** @format date-time */
  assessTime6?: string | null;
  /** @format date-time */
  createTime?: string;
  mode?: string | null;
  notes?: string | null;
  partBBank?: string | null;
  partBBankAccount?: string | null;
  partBBankUser?: string | null;
  partBName?: string | null;
  /** @format int32 */
  payMode?: number | null;
  /**
   * 合同价格
   * @format double
   */
  price?: number | null;
  /** 签约对象 */
  signedWith?: string | null;
  /**
   * 签约时间
   * @format date-time
   */
  signingTime?: string;
  /** @format int32 */
  status?: number;
  /**
   * 税率
   * @format double
   */
  taxRate?: number | null;
  /** 合同期限 */
  term?: string | null;
  /** 标题 */
  title?: string | null;
  /** @format int32 */
  typeID?: number;
  typeName?: string | null;
  statusName?: string | null;
  approvalRoleName?: string | null;
  accountName?: string | null;
  approvalRecordList?: ApprovalRecords[] | null;
}

export interface ContractinfoPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Contractinfo[] | null;
}

export interface ContractinfoPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: ContractinfoPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface ContractinfoResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: Contractinfo;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface Contracttype {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface ContracttypeListResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: Contracttype[] | null;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface CreditPayInfoParam {
  roleNames?: string[] | null;
  /** @format int32 */
  accountID?: number | null;
  /** @format int64 */
  id?: number | null;
  /** @format date-time */
  createTime?: string | null;
  /** @format int32 */
  creditType?: number | null;
  /** @format int32 */
  orderID?: number | null;
  partBBank?: string | null;
  partBBankAccount?: string | null;
  partBBankUser?: string | null;
  partBName?: string | null;
  /** @format int32 */
  projectID?: number | null;
  /** @format int32 */
  status?: number | null;
  statusList?: number[] | null;
  title?: string | null;
}

export interface Creditorder {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  accountId?: number;
  /** @format int32 */
  billID?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  creditType?: number;
  /** @format double */
  paidAmount?: number;
  partBBank?: string | null;
  partBBankAccount?: string | null;
  partBBankUser?: string | null;
  partBName?: string | null;
  /** @format int32 */
  projectID?: number;
  /** @format int32 */
  status?: number;
  title?: string | null;
  /** @format double */
  totalAmount?: number;
  projectName?: string | null;
  approvalRoleName?: string | null;
  statusName?: string | null;
  creditTypeName?: string | null;
  /** @format double */
  unpaidAmount?: number;
  /** @format double */
  tempAmount?: number;
}

export interface CreditorderPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Creditorder[] | null;
}

export interface CreditorderPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: CreditorderPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface Creditpayinfo {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountID?: number;
  /** @format int32 */
  assessID1?: number | null;
  /** @format int32 */
  assessID2?: number | null;
  /** @format int32 */
  assessID3?: number | null;
  /** @format int32 */
  assessID4?: number | null;
  /** @format int32 */
  assessID5?: number | null;
  /** @format int32 */
  assessID6?: number | null;
  /** @format date-time */
  assessTime1?: string | null;
  /** @format date-time */
  assessTime2?: string | null;
  /** @format date-time */
  assessTime3?: string | null;
  /** @format date-time */
  assessTime4?: string | null;
  /** @format date-time */
  assessTime5?: string | null;
  /** @format date-time */
  assessTime6?: string | null;
  /** @format date-time */
  createTime?: string;
  partBBank?: string | null;
  partBBankAccount?: string | null;
  partBBankUser?: string | null;
  partBName?: string | null;
  /** @format int32 */
  projectID?: number;
  /** @format int32 */
  status?: number;
  title?: string | null;
  /** @format double */
  totalAmount?: number;
  items?: Creditpayitem[] | null;
  statusName?: string | null;
  projectName?: string | null;
  accountName?: string | null;
  /** @format double */
  paidAmount?: number;
  approvalRecordList?: ApprovalRecords[] | null;
}

export interface CreditpayinfoPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Creditpayinfo[] | null;
}

export interface CreditpayinfoPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: CreditpayinfoPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface CreditpayinfoResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: Creditpayinfo;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface Creditpayitem {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  infoID?: number;
  /** @format int64 */
  orderID?: number;
  /** @format double */
  paidAmount?: number;
  /** @format int32 */
  projectID?: number;
  /** @format double */
  totalAmount?: number;
  /** @format double */
  alreadyAmount?: number;
  title?: string | null;
  /** @format int32 */
  creditType?: number;
  creditTypeName?: string | null;
  partBBank?: string | null;
  partBBankAccount?: string | null;
  partBBankUser?: string | null;
  partBName?: string | null;
}

export interface Department {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format date-time */
  updateTime?: string;
}

export interface DepartmentPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Department[] | null;
}

export interface DepartmentPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: DepartmentPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface DepartmentResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: Department;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface EnquiryGroupPageParam {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  /** @format int64 */
  id?: number | null;
  name?: string | null;
}

export interface EnquiryInfoDTO {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountID?: number;
  /** @format int32 */
  quotationAccountID?: number | null;
  /** @format date-time */
  createTime?: string | null;
  /** @format date-time */
  endTime?: string | null;
  /** @format int32 */
  projectID?: number | null;
  projectName?: string | null;
  /** @format int32 */
  status?: number | null;
  title?: string | null;
  statusName?: string | null;
  groupList?: number[] | null;
  items?: Enquiryitem[] | null;
  quotationAccount?: Enquiryquotationaccountrelation[] | null;
  quotationItems?: QuotationItemDTO[] | null;
}

export interface EnquiryInfoDTOResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: EnquiryInfoDTO;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface EnquiryItemsDTO {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  enquiryInfoID?: number;
  /** @format int32 */
  materialID?: number;
  notes?: string | null;
  /** @format double */
  quantity?: number;
  code?: string | null;
  name?: string | null;
  specifications?: string | null;
  /** @format int32 */
  type?: number;
  unit?: string | null;
  /** @format date-time */
  updateTime?: string;
  typeStr?: string | null;
  quotationItemList?: Quotationitem[] | null;
}

export interface Enquirygroup {
  /** @format int32 */
  id?: number;
  name?: string | null;
  account?: Enquirygroupaccountrelation[] | null;
}

export interface EnquirygroupPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Enquirygroup[] | null;
}

export interface EnquirygroupPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: EnquirygroupPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface Enquirygroupaccountrelation {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountID?: number;
  /** @format int32 */
  groupID?: number;
  account?: Account;
  enquiryGroup?: Enquirygroup;
}

export interface Enquiryinfo {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountID?: number;
  /** @format int32 */
  assessID1?: number | null;
  /** @format int32 */
  assessID2?: number | null;
  /** @format int32 */
  assessID3?: number | null;
  /** @format date-time */
  assessTime1?: string | null;
  /** @format date-time */
  assessTime2?: string | null;
  /** @format date-time */
  assessTime3?: string | null;
  /** @format date-time */
  createTime?: string;
  /** @format date-time */
  endTime?: string;
  /** @format int32 */
  projectID?: number;
  /** @format int32 */
  status?: number;
  title?: string | null;
  project?: Projectinfo;
  projectName?: string | null;
  approvalRoleName?: string | null;
  projectName2?: string | null;
  statusName?: string | null;
  /** @format int32 */
  quotationStatus?: number;
  quotationStatusName?: string | null;
}

export interface EnquiryinfoPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Enquiryinfo[] | null;
}

export interface EnquiryinfoPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: EnquiryinfoPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface Enquiryitem {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  enquiryInfoID?: number;
  /** @format int32 */
  materialID?: number;
  notes?: string | null;
  /** @format double */
  quantity?: number;
  material?: Materialinfo;
  code?: string | null;
  name?: string | null;
  specifications?: string | null;
  unit?: string | null;
  /** @format int32 */
  type?: number;
  typeStr?: string | null;
}

export interface Enquiryquotationaccountrelation {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountID?: number;
  /** @format int32 */
  enquiryInfoID?: number;
  /** @format int32 */
  groupID?: number;
  /** @format date-time */
  quotationTime?: string | null;
  /** @format int32 */
  state?: number;
  account?: Account;
  group?: Enquirygroup;
  groupName?: string | null;
}

export interface Int32Result {
  /** @format int32 */
  code?: number;
  message?: string | null;
  /** @format int32 */
  data?: number;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface Int64Result {
  /** @format int32 */
  code?: number;
  message?: string | null;
  /** @format int64 */
  data?: number;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface LaborInfoParam {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  roleNames?: string[] | null;
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  accountID?: number | null;
  /** @format int32 */
  projectID?: number | null;
  projectIDList?: number[] | null;
  /** @format int32 */
  status?: number | null;
  statusList?: number[] | null;
  title?: string | null;
  /** @format int32 */
  winAccountID?: number | null;
}

export interface LaborPayParam {
  /** @format int32 */
  id?: number;
  /** @format double */
  payAmount?: number;
  /** @format int32 */
  accountID?: number;
  projectIDList?: number[] | null;
  /** @format int32 */
  status?: number | null;
  statusList?: number[] | null;
  items?: LaboraPayItem[] | null;
}

export interface LaboraPayInfo {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountID?: number;
  /** @format date-time */
  createTime?: string;
  /** @format int32 */
  isSettlement?: number;
  /** @format int32 */
  laboraId?: number;
  /** @format double */
  payAmount?: number;
  /** @format int32 */
  projectID?: number;
  /** @format int32 */
  status?: number;
  statusName?: string | null;
  settlementStatus?: string | null;
  approvalRoleName?: string | null;
  title?: string | null;
  projectName?: string | null;
  /** @format double */
  frozenAmount?: number;
  /** @format double */
  paidAmount?: number;
  /** @format double */
  totalAmount?: number;
  approvalRecordList?: ApprovalRecords[] | null;
  items?: LaboraPayItem[] | null;
  totalQuantity?: LaboraPayItem[] | null;
  /** @format int32 */
  totalReviewQuantity?: number;
  /** @format double */
  totalReviewAmount?: number;
  /** @format double */
  totalReviewAmountPercent?: number;
}

export interface LaboraPayInfoPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: LaboraPayInfo[] | null;
}

export interface LaboraPayInfoPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: LaboraPayInfoPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface LaboraPayInfoResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: LaboraPayInfo;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface LaboraPayItem {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountID?: number;
  /** @format int32 */
  applicationQuantity?: number;
  /** @format int32 */
  laboraInfoId?: number;
  /** @format int64 */
  laboraItemId?: number;
  /** @format int32 */
  laboraPayInfoId?: number;
  /**
   * 上期数量
   * @format int32
   */
  previousQuantity?: number;
  /** @format int32 */
  projectID?: number;
  /** @format int32 */
  reviewQuantity?: number;
  /** @format double */
  unitPrice?: number;
  jobCode?: string | null;
  jobName?: string | null;
  /** @format double */
  quantity?: number;
  materialUnit?: string | null;
  /** @format int32 */
  cumulativeQuantity?: number;
  /** @format double */
  totalCumulativeAmount?: number;
  /** @format double */
  totalAmount?: number;
  /** @format double */
  totalApplicationAmount?: number;
  /** @format double */
  totalReviewAmount?: number;
  /** @format double */
  totalPreviousAmount?: number;
}

export interface Laborinfo {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountID?: number;
  annex1?: string | null;
  annex2?: string | null;
  /** @format int32 */
  assessID1?: number | null;
  /** @format int32 */
  assessID2?: number | null;
  /** @format int32 */
  assessID3?: number | null;
  /** @format int32 */
  assessID4?: number | null;
  /** @format int32 */
  assessID5?: number | null;
  /** @format date-time */
  assessTime1?: string | null;
  /** @format date-time */
  assessTime2?: string | null;
  /** @format date-time */
  assessTime3?: string | null;
  /** @format date-time */
  assessTime4?: string | null;
  /** @format date-time */
  assessTime5?: string | null;
  content?: string | null;
  /** @format date-time */
  createTime?: string;
  /** @format double */
  frozenAmount?: number;
  /** @format date-time */
  meetingTime?: string;
  notes?: string | null;
  /** @format double */
  paidAmount?: number;
  partBBank?: string | null;
  partBBankAccount?: string | null;
  partBBankUser?: string | null;
  partBName?: string | null;
  participants?: string | null;
  partyB?: string | null;
  /** @format int32 */
  payMode?: number;
  place?: string | null;
  /** @format int32 */
  projectID?: number;
  /** @format int32 */
  status?: number;
  title?: string | null;
  /** @format double */
  totalAmount?: number;
  items?: Laboritem[] | null;
  projectName?: string | null;
  partyA?: string | null;
  approvalRoleName?: string | null;
  statusName?: string | null;
  payModeName?: string | null;
  /** @format int32 */
  accountStatus?: number;
  accountStatusName?: string | null;
  approvalRecordList?: ApprovalRecords[] | null;
  /** @format double */
  payAmount?: number;
}

export interface LaborinfoPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Laborinfo[] | null;
}

export interface LaborinfoPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: LaborinfoPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface LaborinfoResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: Laborinfo;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface Laborinfochange {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountID?: number;
  annex1?: string | null;
  annex2?: string | null;
  /** @format int32 */
  assessID1?: number | null;
  /** @format int32 */
  assessID2?: number | null;
  /** @format int32 */
  assessID3?: number | null;
  /** @format int32 */
  assessID4?: number | null;
  /** @format int32 */
  assessID5?: number | null;
  /** @format date-time */
  assessTime1?: string | null;
  /** @format date-time */
  assessTime2?: string | null;
  /** @format date-time */
  assessTime3?: string | null;
  /** @format date-time */
  assessTime4?: string | null;
  /** @format date-time */
  assessTime5?: string | null;
  content?: string | null;
  /** @format date-time */
  createTime?: string;
  /** @format double */
  frozenAmount?: number;
  /** @format date-time */
  meetingTime?: string;
  notes?: string | null;
  /** @format double */
  paidAmount?: number;
  partBBank?: string | null;
  partBBankAccount?: string | null;
  partBBankUser?: string | null;
  partBName?: string | null;
  participants?: string | null;
  partyB?: string | null;
  /** @format int32 */
  payMode?: number;
  place?: string | null;
  /** @format int32 */
  projectID?: number;
  /** @format int32 */
  sourceId?: number;
  /** @format int32 */
  status?: number;
  title?: string | null;
  /** @format double */
  totalAmount?: number;
  items?: Laboritemchange[] | null;
  projectName?: string | null;
  partyA?: string | null;
  approvalRoleName?: string | null;
  statusName?: string | null;
  payModeName?: string | null;
  /** @format int32 */
  accountStatus?: number;
  accountStatusName?: string | null;
  approvalRecordList?: ApprovalRecords[] | null;
  /** @format double */
  payAmount?: number;
}

export interface LaborinfochangePageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Laborinfochange[] | null;
}

export interface LaborinfochangePageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: LaborinfochangePageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface LaborinfochangeResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: Laborinfochange;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface Laboritem {
  /** @format int64 */
  id?: number;
  /** @format double */
  freight?: number;
  /** @format int32 */
  infoID?: number;
  materialCode?: string | null;
  /** @format int32 */
  materialID?: number;
  materialName?: string | null;
  materialSpecifications?: string | null;
  materialUnit?: string | null;
  notes?: string | null;
  /** @format int32 */
  payMode?: number;
  /** @format int32 */
  projectID?: number;
  /** @format int64 */
  projectItemID?: number;
  /** @format double */
  quantity?: number;
  /** @format double */
  taxrate?: number;
  /** @format double */
  unitPrice?: number;
  jobCode?: string | null;
  jobName?: string | null;
  /** @format double */
  preQuantity?: number;
  /** @format double */
  previousQuantity?: number;
  payModeStr?: string | null;
  /** @format double */
  totalAmount?: number;
  /** @format int32 */
  payQuantity?: number;
  /** @format double */
  totalPayAmount?: number;
  /** @format double */
  previousQuantityAmount?: number;
}

export interface Laboritemchange {
  /** @format int64 */
  id?: number;
  /** @format double */
  freight?: number;
  /** @format int32 */
  infoID?: number;
  materialCode?: string | null;
  /** @format int32 */
  materialID?: number;
  materialName?: string | null;
  materialSpecifications?: string | null;
  materialUnit?: string | null;
  notes?: string | null;
  /** @format int32 */
  payMode?: number;
  /** @format int32 */
  projectID?: number;
  /** @format int64 */
  projectItemID?: number;
  /** @format double */
  quantity?: number;
  /** @format double */
  taxrate?: number;
  /** @format double */
  unitPrice?: number;
  jobCode?: string | null;
  jobName?: string | null;
  /** @format double */
  preQuantity?: number;
  payModeStr?: string | null;
  /** @format double */
  totalAmount?: number;
}

export interface LeaseParam {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  accountID?: number | null;
  roleNames?: string[] | null;
  /** @format int32 */
  projectID?: number | null;
  projectIDList?: number[] | null;
  title?: string | null;
  /** @format int32 */
  status?: number | null;
  statusList?: number[] | null;
  /** @format int32 */
  completionStatus?: number | null;
  completionStatusList?: number[] | null;
}

export interface Leaseinfo {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountID?: number;
  annex1?: string | null;
  annex2?: string | null;
  /** @format int32 */
  completionStatus?: number;
  /**
   * 施工时间
   * @format date-time
   */
  constructionTime?: string | null;
  /** @format date-time */
  createTime?: string;
  notes?: string | null;
  /** @format double */
  paidAmount?: number;
  partBBank?: string | null;
  partBBankAccount?: string | null;
  partBBankUser?: string | null;
  partBName?: string | null;
  /** @format int32 */
  payMode?: number;
  /** @format int32 */
  projectID?: number;
  /** @format int32 */
  status?: number;
  title?: string | null;
  /** @format double */
  totalAmount?: number;
  items?: Leaseitem[] | null;
  projectName?: string | null;
  approvalRoleName?: string | null;
  statusName?: string | null;
  completionStatusName?: string | null;
  approvalRecordList?: ApprovalRecords[] | null;
  approvalCompletionRecordList?: ApprovalRecords[] | null;
}

export interface LeaseinfoPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Leaseinfo[] | null;
}

export interface LeaseinfoPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: LeaseinfoPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface LeaseinfoResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: Leaseinfo;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface Leaseitem {
  /** @format int64 */
  id?: number;
  /** @format double */
  completionQuantity?: number;
  /** @format double */
  freight?: number;
  /** @format int32 */
  infoID?: number;
  materialCode?: string | null;
  /** @format int32 */
  materialID?: number;
  materialName?: string | null;
  materialSpecifications?: string | null;
  /** @format int32 */
  materialType?: number;
  materialUnit?: string | null;
  notes?: string | null;
  /** @format int32 */
  payMode?: number;
  /** @format int32 */
  projectID?: number;
  /** @format int64 */
  projectItemID?: number;
  /** @format double */
  quantity?: number;
  /** @format double */
  taxrate?: number;
  /** @format double */
  unitPrice?: number;
  materialTypeStr?: string | null;
  jobItemCode?: string | null;
  jobItemName?: string | null;
  jobItemDescribe?: string | null;
  /** @format double */
  jobPreQuantity?: number;
  payModeStr?: string | null;
  /** @format double */
  totalAmount?: number;
}

export interface LoginDTO {
  account?: string | null;
  password?: string | null;
  verificationCode?: string | null;
}

export interface MatchPriceDTO {
  /** @format int64 */
  procureID?: number;
  /** @format double */
  unitPrice?: number;
  /** @format double */
  freight?: number;
  /** @format double */
  taxrate?: number;
}

export interface MatchPriceDTOListResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: MatchPriceDTO[] | null;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface MaterialInfoDTO {
  /** @format int32 */
  id?: number | null;
  name?: string | null;
  code?: string | null;
  specifications?: string | null;
  unit?: string | null;
  /** @format date-time */
  updateTime?: string | null;
  /** @format int32 */
  type?: number | null;
  typeStr?: string | null;
  /** @format double */
  freight?: number;
  /** @format double */
  price?: number;
  /** @format double */
  taxrate?: number;
}

export interface MaterialInfoDTOPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: MaterialInfoDTO[] | null;
}

export interface MaterialInfoDTOPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: MaterialInfoDTOPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface MaterialInfoDTOResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: MaterialInfoDTO;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface MaterialInfoPageParam {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  /** @format int32 */
  id?: number | null;
  name?: string | null;
  /** @format int32 */
  type?: number | null;
  /** @format int32 */
  projectID?: number | null;
  typeList?: number[] | null;
  code?: string | null;
  specifications?: string | null;
  unit?: string | null;
  /** @format int32 */
  jobID?: number | null;
}

export interface Materialinfo {
  /** @format int32 */
  id?: number;
  code?: string | null;
  name?: string | null;
  specifications?: string | null;
  /** @format int32 */
  type?: number;
  unit?: string | null;
  /** @format date-time */
  updateTime?: string;
  typeStr?: string | null;
  /** @format double */
  jobMaterialPreQuantity?: number;
  /** @format double */
  jobMaterialActualQuantity?: number;
  /** @format int64 */
  projectItemMaterialID?: number;
}

export interface MaterialinfoPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Materialinfo[] | null;
}

export interface MaterialinfoPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: MaterialinfoPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface MaterialinfoResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: Materialinfo;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface OfficeParam {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  accountID?: number | null;
  roleNames?: string[] | null;
  title?: string | null;
  /** @format int32 */
  status?: number | null;
  statusList?: number[] | null;
  statusName?: string | null;
}

export interface Officeinfo {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountID?: number;
  /** @format int32 */
  assessID1?: number | null;
  /** @format int32 */
  assessID2?: number | null;
  /** @format int32 */
  assessID3?: number | null;
  /** @format int32 */
  assessID4?: number | null;
  /** @format int32 */
  assessID5?: number | null;
  /** @format int32 */
  assessID6?: number | null;
  /** @format date-time */
  assessTime1?: string | null;
  /** @format date-time */
  assessTime2?: string | null;
  /** @format date-time */
  assessTime3?: string | null;
  /** @format date-time */
  assessTime4?: string | null;
  /** @format date-time */
  assessTime5?: string | null;
  /** @format date-time */
  assessTime6?: string | null;
  /** @format date-time */
  createTime?: string;
  notes?: string | null;
  /** @format double */
  paidAmount?: number;
  partBBank?: string | null;
  partBBankAccount?: string | null;
  partBBankUser?: string | null;
  partBName?: string | null;
  /** @format int32 */
  payMode?: number;
  /** @format int32 */
  status?: number;
  title?: string | null;
  /** @format double */
  totalAmount?: number;
  items?: Officeitem[] | null;
  approvalRoleName?: string | null;
  statusName?: string | null;
  approvalRecordList?: ApprovalRecords[] | null;
}

export interface OfficeinfoPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Officeinfo[] | null;
}

export interface OfficeinfoPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: OfficeinfoPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface OfficeinfoResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: Officeinfo;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface Officeitem {
  /** @format int64 */
  id?: number;
  /** @format double */
  freight?: number;
  /** @format int32 */
  infoID?: number;
  materialCode?: string | null;
  /** @format int32 */
  materialID?: number;
  materialName?: string | null;
  materialSpecifications?: string | null;
  /** @format int32 */
  materialType?: number;
  materialUnit?: string | null;
  notes?: string | null;
  /** @format int32 */
  payMode?: number;
  /** @format double */
  quantity?: number;
  /** @format double */
  taxrate?: number;
  /** @format double */
  unitPrice?: number;
  materialTypeStr?: string | null;
  payModeStr?: string | null;
  /** @format double */
  totalAmount?: number;
}

export interface OfficialInfoParam {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  status?: number | null;
  statusList?: number[] | null;
  title?: string | null;
  /** @format int32 */
  typeID?: number | null;
  roleNames?: string[] | null;
  /** @format int32 */
  accountID?: number | null;
}

export interface Officialinfo {
  /** @format int32 */
  id?: number;
  /**
   * 申请人
   * @format int32
   */
  accountID?: number;
  /** @format int32 */
  assessID1?: number | null;
  /** @format int32 */
  assessID2?: number | null;
  /** @format int32 */
  assessID3?: number | null;
  /** @format int32 */
  assessID4?: number | null;
  /** @format int32 */
  assessID5?: number | null;
  /** @format date-time */
  assessTime1?: string | null;
  /** @format date-time */
  assessTime2?: string | null;
  /** @format date-time */
  assessTime3?: string | null;
  /** @format date-time */
  assessTime4?: string | null;
  /** @format date-time */
  assessTime5?: string | null;
  /** @format date-time */
  createTime?: string;
  /** 送达单位 */
  deliveryCompany?: string | null;
  /** 送达人 */
  deliveryPerson?: string | null;
  fileName?: string | null;
  fileUsage?: string | null;
  notes?: string | null;
  /** 签约对象 */
  signedWith?: string | null;
  /**
   * 签约时间
   * @format date-time
   */
  signingTime?: string;
  /** @format int32 */
  status?: number;
  /** 标题 */
  title?: string | null;
  /** @format int32 */
  typeID?: number;
  typeName?: string | null;
  statusName?: string | null;
  approvalRoleName?: string | null;
  accountName?: string | null;
  approvalRecordList?: ApprovalRecords[] | null;
}

export interface OfficialinfoPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Officialinfo[] | null;
}

export interface OfficialinfoPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: OfficialinfoPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface OfficialinfoResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: Officialinfo;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface ProcureMaterialApplyDTO {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountID?: number | null;
  annex1?: string | null;
  annex2?: string | null;
  partBBank?: string | null;
  partBBankAccount?: string | null;
  partBBankUser?: string | null;
  partBName?: string | null;
  /** @format int32 */
  payMode?: number | null;
  /** @format int32 */
  projectID?: number | null;
  title?: string | null;
  items?: Procurematerialitem[] | null;
  /** @format double */
  totalAmount?: number | null;
}

export interface ProcureParam {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  /** @format int32 */
  id?: number | null;
  /** @format int32 */
  accountID?: number | null;
  roleNames?: string[] | null;
  /** @format int32 */
  projectID?: number | null;
  projectIDList?: number[] | null;
  title?: string | null;
  /** @format int32 */
  status?: number | null;
  statusList?: number[] | null;
  statusName?: string | null;
}

export interface Procurematerialinfo {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountID?: number;
  annex1?: string | null;
  annex2?: string | null;
  /** @format int32 */
  assessID1?: number | null;
  /** @format int32 */
  assessID2?: number | null;
  /** @format int32 */
  assessID3?: number | null;
  /** @format int32 */
  assessID4?: number | null;
  /** @format int32 */
  assessID5?: number | null;
  /** @format int32 */
  assessID6?: number | null;
  /** @format date-time */
  assessTime1?: string | null;
  /** @format date-time */
  assessTime2?: string | null;
  /** @format date-time */
  assessTime3?: string | null;
  /** @format date-time */
  assessTime4?: string | null;
  /** @format date-time */
  assessTime5?: string | null;
  /** @format date-time */
  assessTime6?: string | null;
  /** @format date-time */
  createTime?: string;
  /** @format double */
  paidAmount?: number;
  partBBank?: string | null;
  partBBankAccount?: string | null;
  partBBankUser?: string | null;
  partBName?: string | null;
  /** @format int32 */
  payMode?: number;
  /** @format int32 */
  projectID?: number;
  /** @format int32 */
  status?: number;
  title?: string | null;
  /** @format double */
  totalAmount?: number;
  items?: Procurematerialitem[] | null;
  projectName?: string | null;
  approvalRoleName?: string | null;
  statusName?: string | null;
  approvalRecordList?: ApprovalRecords[] | null;
}

export interface ProcurematerialinfoPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Procurematerialinfo[] | null;
}

export interface ProcurematerialinfoPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: ProcurematerialinfoPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface ProcurematerialinfoResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: Procurematerialinfo;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface Procurematerialitem {
  /** @format int64 */
  id?: number;
  /** @format double */
  freight?: number;
  /** @format int32 */
  infoID?: number;
  materialCode?: string | null;
  /** @format int32 */
  materialID?: number;
  materialName?: string | null;
  materialSpecifications?: string | null;
  /** @format int32 */
  materialType?: number;
  materialUnit?: string | null;
  notes?: string | null;
  /** @format int32 */
  payMode?: number;
  /** @format int32 */
  projectID?: number;
  /** @format int64 */
  projectItemID?: number;
  /** @format int64 */
  projectItemMaterialID?: number;
  /** @format double */
  quantity?: number;
  /** @format double */
  taxrate?: number;
  /** @format double */
  unitPrice?: number;
  materialTypeStr?: string | null;
  jobItemCode?: string | null;
  jobItemName?: string | null;
  jobItemDescribe?: string | null;
  /** @format double */
  jobMaterialActualQuantity?: number;
  /** @format double */
  jobMaterialPreQuantity?: number;
  /** @format double */
  jobPreQuantity?: number;
  /** @format double */
  enquiryPrice?: number;
  payModeStr?: string | null;
  /** @format double */
  totalAmount?: number;
  /** @format double */
  lastQuotationPrice?: number | null;
  /** @format date-time */
  lastQuotationTime?: string | null;
}

export interface ProjectItemMaterialResult {
  /** @format int64 */
  id?: number;
  /** @format double */
  actualQuantity?: number;
  /** @format double */
  loss?: number;
  /** @format int32 */
  materialID?: number;
  /** @format double */
  preMaterialUnitPrice?: number;
  /** @format double */
  preQuantity?: number;
  /** @format int32 */
  projectID?: number;
  /** @format int64 */
  projectItemID?: number;
  /** @format double */
  unitPrice?: number;
  jobCode?: string | null;
  code?: string | null;
  name?: string | null;
  specifications?: string | null;
  /** @format int32 */
  type?: number;
  typeStr?: string | null;
  unit?: string | null;
  jobItemCode?: string | null;
  jobItemName?: string | null;
  jobItemDescribe?: string | null;
}

export interface ProjectItemMaterialResultPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: ProjectItemMaterialResult[] | null;
}

export interface ProjectItemMaterialResultPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: ProjectItemMaterialResultPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface ProjectItemPageParam {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  /** @format int64 */
  id?: number | null;
  code?: string | null;
  describe?: string | null;
  name?: string | null;
  /** @format int32 */
  phaseID?: number | null;
  /** @format int32 */
  projectID?: number | null;
  unit?: string | null;
}

export interface ProjectItemStatistics {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  projectID?: number;
  /** @format int32 */
  materialID?: number;
  rowType?: string | null;
  serialNumber?: string | null;
  code?: string | null;
  name?: string | null;
  describe?: string | null;
  notes?: string | null;
  /** @format double */
  preQuantity?: number;
  ext1?: string | null;
  /** @format double */
  loss?: number;
  /** @format double */
  maxQuantity?: number;
  unit?: string | null;
  /** @format double */
  preMaterialUnitPrice?: number;
  /** @format double */
  preMaterialTotalPrice?: number;
  /** @format double */
  materialUnitPrice?: number;
  /** @format double */
  materialTotalPrice?: number;
  /** @format double */
  materialTotalPrice_baoxiao?: number;
  /** @format double */
  materialTotalPrice_guazhang?: number;
  /** @format double */
  preAuxiliaryUnitPrice?: number;
  /** @format double */
  preAuxiliaryTotalPrice?: number;
  /** @format double */
  auxiliaryUnitPrice?: number;
  /** @format double */
  auxiliaryTotalPrice?: number;
  /** @format double */
  auxiliaryTotalPrice_baoxiao?: number;
  /** @format double */
  auxiliaryTotalPrice_guazhang?: number;
  /** @format double */
  preInstrumentUnitPrice?: number;
  /** @format double */
  preInstrumentTotalPrice?: number;
  /** @format double */
  instrumentUnitPrice?: number;
  /** @format double */
  instrumentTotalPrice?: number;
  /** @format double */
  instrumentTotalPrice_baoxiao?: number;
  /** @format double */
  instrumentTotalPrice_guazhang?: number;
  /** @format double */
  preLaborUnitPrice?: number;
  /** @format double */
  preLaborTotalPrice?: number;
  /** @format double */
  laborUnitPrice?: number;
  /** @format double */
  laborTotalPrice?: number;
  /** @format double */
  laborTotalPrice_baoxiao?: number;
  /** @format double */
  laborTotalPrice_guazhang?: number;
  /** @format double */
  leaseUnitPrice?: number;
  /** @format double */
  leaseTotalPrice?: number;
  /** @format double */
  leaseTotalPrice_baoxiao?: number;
  /** @format double */
  leaseTotalPrice_guazhang?: number;
  /** @format double */
  coordinationUnitPrice?: number;
  /** @format double */
  coordinationTotalPrice?: number;
  /** @format double */
  coordinationTotalPrice_baoxiao?: number;
  /** @format double */
  coordinationTotalPrice_guazhang?: number;
  /** @format double */
  manageRate?: number;
  /** @format double */
  profitRate?: number;
  /** @format double */
  managePrice?: number;
  /** @format double */
  profit?: number;
  /** @format double */
  unitPrice?: number;
  /** @format double */
  totalPrice?: number;
  /** @format date-time */
  updateTime?: string;
}

export interface ProjectItemStatisticsListResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: ProjectItemStatistics[] | null;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface ProjectAccountRelation {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountId?: number;
  /** @format int32 */
  projectId?: number;
  name?: string | null;
}

export interface Projectinfo {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  endDate?: string | null;
  /** @format double */
  manageRate?: number;
  name?: string | null;
  notes?: string | null;
  /** @format double */
  profitRate?: number;
  /** @format date-time */
  startDate?: string;
  accountList?: ProjectAccountRelation[] | null;
}

export interface ProjectinfoListResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: Projectinfo[] | null;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface ProjectinfoPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Projectinfo[] | null;
}

export interface ProjectinfoPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: ProjectinfoPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface ProjectinfoResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: Projectinfo;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface Projectitem {
  /** @format int64 */
  id?: number;
  code?: string | null;
  describe?: string | null;
  ext1?: string | null;
  /** @format double */
  loss?: number;
  /** @format double */
  maxQuantity?: number;
  name?: string | null;
  notes?: string | null;
  /** @format int32 */
  phaseID?: number | null;
  /** @format double */
  preAuxiliaryUnitPrice?: number;
  /** @format double */
  preInstrumentUnitPrice?: number;
  /** @format double */
  preLaborUnitPrice?: number;
  /** @format double */
  preMaterialUnitPrice?: number;
  /** @format double */
  preQuantity?: number;
  /** @format int32 */
  projectID?: number;
  unit?: string | null;
  /** @format date-time */
  updateTime?: string;
  uploadSerialNumber?: string | null;
  materialItems?: Projectitemmaterial[] | null;
  projectName?: string | null;
  phaseName?: string | null;
}

export interface ProjectitemPageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Projectitem[] | null;
}

export interface ProjectitemPageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: ProjectitemPageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface ProjectitemResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: Projectitem;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface Projectitemmaterial {
  /** @format int64 */
  id?: number;
  /** @format double */
  actualQuantity?: number;
  /** @format double */
  loss?: number;
  /** @format int32 */
  materialID?: number;
  /** @format double */
  preMaterialUnitPrice?: number;
  /** @format double */
  preQuantity?: number;
  /** @format int32 */
  projectID?: number;
  /** @format int64 */
  projectItemID?: number;
  /** @format double */
  unitPrice?: number;
  jobCode?: string | null;
  code?: string | null;
  name?: string | null;
  specifications?: string | null;
  /** @format int32 */
  type?: number;
  typeStr?: string | null;
  unit?: string | null;
}

export interface Projectphase {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  projectID?: number;
  /** @format date-time */
  updateTime?: string;
  projectName?: string | null;
}

export interface ProjectphaseListResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: Projectphase[] | null;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface ProjectphasePageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Projectphase[] | null;
}

export interface ProjectphasePageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: ProjectphasePageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface ProjectphaseResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: Projectphase;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface PureMenuDTO {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  parentID?: number;
  path?: string | null;
  name?: string | null;
  redirect?: string | null;
  meta?: PureMetaDTO;
  children?: PureMenuDTO[] | null;
}

export interface PureMenuDTOListResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: PureMenuDTO[] | null;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
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
  id?: number;
  /** @format int32 */
  accountID?: number;
  /** @format date-time */
  createTime?: string;
  /** @format date-time */
  endTime?: string;
  /** @format int32 */
  projectID?: number;
  projectName?: string | null;
  /** @format int32 */
  status?: number;
  statusName?: string | null;
  title?: string | null;
  /** @format date-time */
  assessTime1?: string | null;
  /** @format date-time */
  assessTime2?: string | null;
  /** @format date-time */
  assessTime3?: string | null;
  /** @format int32 */
  assessID1?: number | null;
  /** @format int32 */
  assessID2?: number | null;
  /** @format int32 */
  assessID3?: number | null;
  assessName1?: string | null;
  assessName2?: string | null;
  assessName3?: string | null;
  items?: EnquiryItemsDTO[] | null;
  approvalRecordList?: ApprovalRecords[] | null;
}

export interface QuotationAssessDTOResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: QuotationAssessDTO;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface QuotationAssessUpdateParam {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  accountID?: number;
  roleNames?: string[] | null;
  items?: Quotationitem[] | null;
}

export interface QuotationItemDTO {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  accountID?: number;
  /** @format int32 */
  enquiryInfoID?: number;
  /** @format int64 */
  enquiryItemID?: number;
  /** @format int32 */
  materialID?: number;
  /** @format int32 */
  projectID?: number;
  /** @format double */
  unitPrice?: number;
  /** @format date-time */
  updateTime?: string;
  telephone?: string | null;
  contact?: string | null;
  code?: string | null;
  materialName?: string | null;
  specifications?: string | null;
  /** @format int32 */
  type?: number;
  unit?: string | null;
  typeStr?: string | null;
  notes?: string | null;
  /** @format double */
  quantity?: number;
  /** @format double */
  freight?: number;
  /** @format double */
  taxrate?: number;
  /** @format int32 */
  assessID1?: number | null;
  /** @format int32 */
  assessID2?: number | null;
  /** @format int32 */
  assessID3?: number | null;
  /** @format double */
  totalAmount?: number;
}

export interface QuotationStatistics {
  /** @format int32 */
  accountID?: number;
  userName?: string | null;
  /** @format int32 */
  totalNum?: number;
  /** @format int32 */
  successNum?: number;
  /** @format int32 */
  state?: number;
  /** @format double */
  successProportion?: number;
  successProportionStr?: string | null;
}

export interface QuotationStatisticsListResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: QuotationStatistics[] | null;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface Quotationitem {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  accountID?: number;
  /** @format int32 */
  assessID1?: number | null;
  /** @format int32 */
  assessID2?: number | null;
  /** @format int32 */
  assessID3?: number | null;
  assessNotes?: string | null;
  /**
   * 0未被选中,1报价选中
   * @format int32
   */
  assessState?: number;
  /** @format date-time */
  assessTime1?: string | null;
  /** @format date-time */
  assessTime2?: string | null;
  /** @format date-time */
  assessTime3?: string | null;
  contact?: string | null;
  /** @format int32 */
  enquiryInfoID?: number;
  /** @format int64 */
  enquiryItemID?: number;
  /** @format double */
  freight?: number;
  /** @format int32 */
  materialID?: number;
  /** @format int32 */
  projectID?: number;
  /** @format double */
  taxrate?: number;
  telephone?: string | null;
  /** @format double */
  unitPrice?: number;
  /** @format date-time */
  updateTime?: string;
  check?: boolean;
  /** @format double */
  parentQuantity?: number;
  /** @format double */
  totalAmount?: number;
  accountName?: string | null;
}

export interface Result {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: string | null;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface Role {
  /** @format int32 */
  roleID?: number;
  name?: string | null;
  /** @format date-time */
  updatetime?: string;
  roleAPIRelation1?: Roleapirelation[] | null;
}

export interface RolePageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Role[] | null;
}

export interface RolePageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: RolePageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface RoleUpdateParam {
  /** @format int32 */
  roleID?: number;
  name?: string | null;
  /** @format date-time */
  updatetime?: string;
  roleApiList?: Apiinfo[] | null;
}

export interface RoleUpdateParamResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: RoleUpdateParam;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface Roleapirelation {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  apiid?: number;
  /** @format int32 */
  roleID?: number;
  type?: boolean;
  apiInfo1?: Apiinfo;
}

export interface SysMessageResult {
  /** @format int64 */
  count?: number;
  /** @format int64 */
  id?: number;
}

export interface SysMessageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: SysMessageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface Sysmessage {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  accountID?: number;
  /** @format date-time */
  createTime?: string;
  msg?: string | null;
  /** @format int32 */
  status?: number;
  statusName?: string | null;
}

export interface SysmessagePageResult {
  /** @format int32 */
  pageNumber?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  pageCount?: number;
  data?: Sysmessage[] | null;
}

export interface SysmessagePageResultResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: SysmessagePageResult;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface UpdateAccountDTO {
  /** @format int32 */
  accountID?: number;
  accountNumber?: string | null;
  /** @format date-time */
  birthday?: string | null;
  name?: string | null;
  notes?: string | null;
  sex?: boolean | null;
  telephone?: string | null;
  test?: string | null;
  /** @format int32 */
  status?: number | null;
  accountRoles?: number[] | null;
  accountDepartments?: number[] | null;
}

export interface UpdateAccountDTOResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: UpdateAccountDTO;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface UpdateApiInfoDTO {
  /** @format int32 */
  id?: number;
  action?: string | null;
  area?: string | null;
  controller?: string | null;
  isMenu?: boolean;
  name?: string | null;
  notes?: string | null;
  /** @format int32 */
  parentID?: number;
  /** @format int32 */
  sort?: number;
  /** @format date-time */
  updateTime?: string;
  path?: string | null;
  /** @format int32 */
  type?: number;
}

export interface UpdateEnquiryGroupDTO {
  /** @format int32 */
  id?: number | null;
  name?: string | null;
  enquiryGroupAccount?: number[] | null;
}

export interface UpdateEnquiryGroupDTOResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: UpdateEnquiryGroupDTO;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface UploadFileDTO {
  oldName?: string | null;
  newFullPath?: string | null;
}

export interface UploadFileDTOResult {
  /** @format int32 */
  code?: number;
  message?: string | null;
  data?: UploadFileDTO;
  ext1?: string | null;
  ext2?: string | null;
  ext3?: any | null;
  ext4?: any | null;
}

export interface UploadProjectItem {
  /** @format int64 */
  id?: number;
  /** @format double */
  auxiliaryUnitPrice?: number | null;
  code?: string | null;
  describe?: string | null;
  ext1?: string | null;
  /** @format double */
  instrumentUnitPrice?: number | null;
  /** @format double */
  laborUnitPrice?: number | null;
  /** @format double */
  loss?: number | null;
  /** @format double */
  managePrice?: number | null;
  /** @format double */
  materialUnitPrice?: number | null;
  /** @format double */
  maxQuantity?: number | null;
  name?: string | null;
  notes?: string | null;
  /** @format double */
  preQuantity?: number | null;
  /** @format double */
  profit?: number | null;
  /** @format int32 */
  projectID?: number | null;
  /** @format int32 */
  phaseID?: number | null;
  unit?: string | null;
  /** @format double */
  unitPrice?: number | null;
  /** @format date-time */
  updateTime?: string | null;
  materialItems?: Projectitemmaterial[] | null;
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
  roleNames?: string[];
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
  roleNames?: string[];
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
  roleNames?: string[];
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
  roleNames?: string[];
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
  roleNames?: string[];
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
  roleNames?: string[];
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
  roleNames?: string[];
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
  roleNames?: string[];
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
  roleNames?: string[];
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
  roleNames?: string[];
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
  roleNames?: string[];
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
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
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

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
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
      baseURL: axiosConfig.baseURL || "",
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
    params2?: AxiosRequestConfig,
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
        ...((params2 && params2.headers) || {}),
      },
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
          isFileType ? formItem : this.stringifyFormItem(formItem),
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
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
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

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title My API
 * @version v1
 */
export class Api<
  SecurityDataType extends unknown,
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
      params: RequestParams = {},
    ) =>
      this.request<AccountPageResultPageResultResult, any>({
        path: `/api/Account1/GetAccountPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<UpdateAccountDTOResult, any>({
        path: `/api/Account1/UpdateAccount`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<UpdateAccountDTOResult, any>({
        path: `/api/Account1/GetAccountModel`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
        ...params,
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
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Common/ChangeMyPassword`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<SysmessagePageResultResult, any>({
        path: `/api/Common/GetSysMsgPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<SysMessageResultResult, any>({
        path: `/api/Common/GetSysMsgUnreadCount`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<AccountsettingResult, any>({
        path: `/api/Common/GetSetting`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Common/SetSetting`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<UploadFileDTOResult, any>({
        path: `/api/Common/UploadFile`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ContractinfoPageResultResult, any>({
        path: `/api/Contract/GetMyContractInfoPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ContractinfoResult, any>({
        path: `/api/Contract/GetContractInfoByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ContractinfoResult, any>({
        path: `/api/Contract/UpdateContractInfo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ContractinfoPageResultResult, any>({
        path: `/api/Contract/GetContractInfoApprovePage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ContractinfoPageResultResult, any>({
        path: `/api/Contract/GetContractInfoEndPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Contract/ContractInfoApprove`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Contract/ContractInfoReject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<CreditorderPageResultResult, any>({
        path: `/api/Credit/GetCreditOrderPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<CreditpayinfoPageResultResult, any>({
        path: `/api/Credit/GetCreditPayInfoPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<CreditpayinfoPageResultResult, any>({
        path: `/api/Credit/GetCreditPayInfoApprovalPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<CreditpayinfoResult, any>({
        path: `/api/Credit/CreditPayInfoApply`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<CreditpayinfoResult, any>({
        path: `/api/Credit/GetCreditPayInfoFull`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Credit/CreditPayInfoApprove`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Credit/CreditPayInfoReject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<CreditpayinfoPageResultResult, any>({
        path: `/api/Credit/GetCreditPayInfoEndPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<EnquirygroupPageResultResult, any>({
        path: `/api/Enquiry/GetEnquiryGroupPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<UpdateEnquiryGroupDTOResult, any>({
        path: `/api/Enquiry/GetEnquiryGroupByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Enquiry/DelEnquiryGroupByID`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<UpdateEnquiryGroupDTOResult, any>({
        path: `/api/Enquiry/UpdateEnquiryGroup`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<EnquiryinfoPageResultResult, any>({
        path: `/api/Enquiry/GetMyEnquiryInfoPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<EnquiryInfoDTOResult, any>({
        path: `/api/Enquiry/UpdateEnquiryInfo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<EnquiryInfoDTOResult, any>({
        path: `/api/Enquiry/GetEnquiryInfoByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<EnquiryinfoPageResultResult, any>({
        path: `/api/Enquiry/GetMyQuotationPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<EnquiryInfoDTOResult, any>({
        path: `/api/Enquiry/QuotationUpdate`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<EnquiryInfoDTOResult, any>({
        path: `/api/Enquiry/GetQuotationByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<EnquiryinfoPageResultResult, any>({
        path: `/api/Enquiry/GetQuotationAssessPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<QuotationAssessDTOResult, any>({
        path: `/api/Enquiry/GetQuotationAssessByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Int32Result, any>({
        path: `/api/Enquiry/EndQuotation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<EnquiryInfoDTOResult, any>({
        path: `/api/Enquiry/QuotationAssessUpdate`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<EnquiryInfoDTOResult, any>({
        path: `/api/Enquiry/QuotationAssessReject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<EnquiryinfoPageResultResult, any>({
        path: `/api/Enquiry/GetQuotationEndPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
        ...params,
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
        ...params,
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
        ...params,
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
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LaborinfoPageResultResult, any>({
        path: `/api/Labor/GetLaborInfoPageAPI`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Labor/LaborInfoApprove`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Labor/LaborInfoReject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LaborinfoResult, any>({
        path: `/api/Labor/GetLaborByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LaborinfoResult, any>({
        path: `/api/Labor/GetLaborFullByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LaborinfoResult, any>({
        path: `/api/Labor/GetLaborForPay`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LaborinfoPageResultResult, any>({
        path: `/api/Labor/GetWinLaborAPI`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LaborinfoPageResultResult, any>({
        path: `/api/Labor/GetLaborPayApplyAPI`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Int32Result, any>({
        path: `/api/Labor/ConfirmFinLabor`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LaborinfoPageResultResult, any>({
        path: `/api/Labor/GetLaborInfoEndPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LaborinfoResult, any>({
        path: `/api/Labor/LaborPayApproval`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LaboraPayInfoPageResultResult, any>({
        path: `/api/Labor/GetLaborPayApprove`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LaboraPayInfoPageResultResult, any>({
        path: `/api/Labor/GetLaborPayApproveSuccess`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Labor/LaborPayApprove`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Labor/LaborPayReject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LaboraPayInfoResult, any>({
        path: `/api/Labor/GetLaborPay`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LaboraPayInfoPageResultResult, any>({
        path: `/api/Labor/GetLaborPayEndPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Labor/UpdateLaborPaySettlement`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LaborinfoResult, any>({
        path: `/api/Labor/LaborChangeUpdateAPI`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LaborinfochangePageResultResult, any>({
        path: `/api/Labor/GetLaborChangeApproveAPI`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LaborinfochangeResult, any>({
        path: `/api/Labor/GetLaborChangeFullByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Labor/LaborChangeApprove`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Labor/LaborChangeReject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LeaseinfoPageResultResult, any>({
        path: `/api/Lease/GetMyLeasePage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LeaseinfoPageResultResult, any>({
        path: `/api/Lease/GetLeasePageFinish`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LeaseinfoPageResultResult, any>({
        path: `/api/Lease/GetLeaseApprovePage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Lease/LeaseApproveApi`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Lease/LeaseFinishWork`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LeaseinfoResult, any>({
        path: `/api/Lease/GetLeaseFullById`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LeaseinfoResult, any>({
        path: `/api/Lease/LeaseCompletionApply`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<LeaseinfoPageResultResult, any>({
        path: `/api/Lease/GetLeaseCompletionApproveApi`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Lease/LeaseCompletionApproveApi`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Lease/LeaseCompletionRejectApi`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
        ...params,
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
        ...params,
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
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<MaterialInfoDTOPageResultResult, any>({
        path: `/api/Material/GetMaterialInfoPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<MaterialinfoPageResultResult, any>({
        path: `/api/Material/GetMaterialInfoPageByJobID`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<MaterialInfoDTOPageResultResult, any>({
        path: `/api/Material/GetMaterialPricePage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<MaterialinfoResult, any>({
        path: `/api/Material/GetMaterialInfoByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Material/DelMaterialInfoByID`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<MaterialInfoDTOResult, any>({
        path: `/api/Material/UpdateMaterialInfo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Int32Result, any>({
        path: `/api/Material/UploadMaterialInfoItem`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<OfficeinfoResult, any>({
        path: `/api/Office/GetOfficeInfoByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<OfficeinfoPageResultResult, any>({
        path: `/api/Office/GetOfficePage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Office/OfficeApproveApi`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Office/OfficeRejectApi`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<OfficeinfoPageResultResult, any>({
        path: `/api/Office/GetOfficeApprovePageApi`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<OfficeinfoPageResultResult, any>({
        path: `/api/Office/GetOfficeApproveEndPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<OfficialinfoPageResultResult, any>({
        path: `/api/Official/GetOfficialInfoPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<OfficialinfoResult, any>({
        path: `/api/Official/GetOfficialInfoByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<OfficialinfoResult, any>({
        path: `/api/Official/UpdateOfficialInfo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<OfficialinfoPageResultResult, any>({
        path: `/api/Official/GetOfficialInfoApprovePage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Official/OfficialInfoApprove`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Official/OfficialInfoReject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<OfficialinfoPageResultResult, any>({
        path: `/api/Official/GetOfficialInfoEndPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProcurematerialinfoResult, any>({
        path: `/api/Procure/ProcureMaterialPriceUpdateApi`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProcurematerialinfoResult, any>({
        path: `/api/Procure/GetProcureMaterialByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProcurematerialinfoResult, any>({
        path: `/api/Procure/GetProcureMaterialByID_WithPrice`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProcurematerialinfoPageResultResult, any>({
        path: `/api/Procure/GetMyProcureMaterialPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProcurematerialinfoPageResultResult, any>({
        path: `/api/Procure/GetProcureMaterialPricePageApi`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProcurematerialinfoPageResultResult, any>({
        path: `/api/Procure/GetProcureMaterialPriceApi`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProcurematerialinfoResult, any>({
        path: `/api/Procure/ProcureMaterialApply`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Procure/ProcureMaterialApproveApi`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Procure/ProcureMaterialReject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProcurematerialinfoPageResultResult, any>({
        path: `/api/Procure/GetProcureMaterialApprovePageApi`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProcurematerialinfoPageResultResult, any>({
        path: `/api/Procure/GetProcurePriceEndApi`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProjectinfoPageResultResult, any>({
        path: `/api/Project/GetProjectPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProjectinfoResult, any>({
        path: `/api/Project/ProjectUpdate`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProjectinfoResult, any>({
        path: `/api/Project/GetProjectByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProjectphaseListResult, any>({
        path: `/api/Project/GetProjectPhaseAll`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProjectitemPageResultResult, any>({
        path: `/api/Project/GetProjectItemPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProjectItemMaterialResultPageResultResult, any>({
        path: `/api/Project/GetProjectItemMaterialPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Int32Result, any>({
        path: `/api/Project/UploadProjectItem`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Int32Result, any>({
        path: `/api/Project/UploadProjectItemMaterial`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProjectitemResult, any>({
        path: `/api/Project/GetProjectItemByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Project/DelProjectItemByID`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProjectitemResult, any>({
        path: `/api/Project/GetFullProjectItemByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProjectitemResult, any>({
        path: `/api/Project/UpdateProjectItem`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProjectphasePageResultResult, any>({
        path: `/api/Project/GetProjectPhasePage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProjectphaseResult, any>({
        path: `/api/Project/GetProjectPhaseByID`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/Project/DelProjectPhaseByID`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProjectphaseResult, any>({
        path: `/api/Project/UpdateProjectPhase`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ProjectItemStatisticsListResult, any>({
        path: `/api/Project/GetProjectStatistics`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<QuotationStatisticsListResult, any>({
        path: `/api/Project/GetQuotationStatistics`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<RolePageResultResult, any>({
        path: `/api/System/GetRolePage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<RoleUpdateParamResult, any>({
        path: `/api/System/UpdateRole`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ApiinfoPageResultResult, any>({
        path: `/api/System/GetApiInfoPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<ApiinfoResult, any>({
        path: `/api/System/GetApiInfoById`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Result, any>({
        path: `/api/System/DelApiInfo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<Int64Result, any>({
        path: `/api/System/UpdateApiInfo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<DepartmentPageResultResult, any>({
        path: `/api/System/GetDepartmentPage`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<DepartmentResult, any>({
        path: `/api/System/GetDepartmentById`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
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
      params: RequestParams = {},
    ) =>
      this.request<DepartmentResult, any>({
        path: `/api/System/UpdateDepartment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
