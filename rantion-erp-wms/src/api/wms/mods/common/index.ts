/**
 * @description 通用方法
 */
import * as deleteBill from './deleteBill'
import * as getBoxingReportExcel from './getBoxingReportExcel'
import * as getDeliveryNoteExcel from './getDeliveryNoteExcel'
import * as getLabel from './getLabel'
import * as getLabels from './getLabels'
import * as getProductCodePdf from './getProductCodePdf'
import * as getProductEuPdf from './getProductEuPdf'
import * as pdfParseToText from './pdfParseToText'
import * as setBoxingReportBodyByRedis from './setBoxingReportBodyByRedis'
import * as setDeliveryBodyByRedis from './setDeliveryBodyByRedis'

export { deleteBill, getBoxingReportExcel, getDeliveryNoteExcel, getLabel, getLabels, getProductCodePdf, getProductEuPdf, pdfParseToText, setBoxingReportBodyByRedis, setDeliveryBodyByRedis }
