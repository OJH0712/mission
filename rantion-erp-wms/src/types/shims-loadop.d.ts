/**
 * @user: Antes
 * @emial: tangzhlyd@gmail.com
 * @data: 2020/6/2 下午8:37
 */
// 打印方向及纸张类型
// 1---纵向打印，固定纸张
// 2---横向打印，固定纸张
// 3---纵向打印，宽度固定，高度按打印内容的高度自适应
// 0---方向不定，由操作者自行选择或按打印机缺省设置
type intOrient = 1 | 2 | 3 | 0
type barCodeType = '128A' | '128B' | '128C' | '128Auto' | 'EAN8' | 'EAN13' | 'EAN128A' | 'EAN128B' | 'EAN128C' | 'Code39'
interface Lodop {
	/**
	 * 本系统内的打印机
	 * @constructor
	 */
	GET_PRINTER_COUNT(): number
	/**
	 * 打印份数
	 * @constructor
	 */
	SET_PRINT_COPIES(number: number)

	/**
	 * 用序号获得打印机名，
	 * @param index 一般序号从0开始，-1特指默认打印机；
	 * @constructor
	 */
	GET_PRINTER_NAME(index: number): string
	/**
	 * 立即打印
	 * @constructor
	 */
	PRINT(): void
	/**
	 * 强制分页
	 * @constructor
	 */
	NewPage(): void
	/**
	 *  指定打印机
	 * @param name 名字或者 下标
	 * @constructor
	 */
	SET_PRINTER_INDEX(name: string | number): boolean
	/**
	 * 打印任务始化 设置打印任务名称
	 * @param tile
	 * @constructor
	 */
	PRINT_INIT(tile: string): void
	/**
	 * 为使内容不出轨，输出位置一般是以“可打区域”边缘为基点的，但由于各种打印机物理边距不一样，
	 * 这样就造成同一程序用不同打印机输出的位置有差异，这对通用套打是非常不利的
	 * @param type POS_BASEON_PAPER
	 * @param ok
	 * @constructor
	 */
	SET_PRINT_MODE(type: string, ok: boolean): void
	/**
	 *  制纸张大小、打印方向、连续打印和位置基点
	 * @param type
	 * @param intPageWidth 纸张宽，单位为0.1mm 譬如该参数值为45，则表示4.5mm,计量精度是0.1mm
	 * @param intPageHeight 固定纸张时该参数是纸张高
	 * @param strPageName  纸张类型名， intPageWidth等于零时本参数才有效，具体名称参见操作系统打印服务属性中的格式定义
	 * @constructor
	 */
	SET_PRINT_PAGESIZE(type: intOrient, intPageWidth: number | string, intPageHeight: number | string, strPageName?: string): void
	/**
	 *  设置文字字体或者大小
	 * @param type 'FontSize' | 'FontName'
	 * @param number
	 * @constructor
	 */
	SET_PRINT_STYLE(type: 'FontSize' | 'FontName', number: number | string): void // 设置字体 大小

	SET_PRINT_STYLEA(type: number, fontType: 'FontSize' | 'FontName', number: number | string): void // 设置字体 大小
	/**
	 * 打印PDF
	 * @param top
	 * @param left
	 * @param width
	 * @param height
	 * @param pdf PDF Blob 内容
	 * @constructor
	 */
	ADD_PRINT_PDF(top: number, left: number, width: string | number, height: string | number, pdf: string): void
	/**
	 *
	 * @param Top 上边距离
	 * @param Left 左边距离
	 * @param Width 文字宽度
	 * @param Height 文字高度
	 * @param Value 文字内容
	 * @constructor
	 */
	ADD_PRINT_TEXT(Top: number, Left: number, Width: number, Height: number, Value: string): void // 最佳文字
	/**
	 * 打印html内容
	 * @param Top
	 * @param Left
	 * @param Width 建议 100%
	 * @param Height  建议 100%
	 * @param Value
	 * @constructor
	 */
	ADD_PRINT_HTML(Top: number, Left: number, Width: number | string, Height: number | string, Value: string): void

	/**
	 * 打印html内容
	 * @param Top
	 * @param Left
	 * @param Width 建议 100%
	 * @param Height  建议 100%
	 * @param Value
	 * @constructor
	 */
	ADD_PRINT_HTM(Top: number, Left: number, Width: number | string, Height: number | string, Value: string): void
	/**
	 *
	 * @param Top 上边距离
	 * @param Left 左边距离
	 * @param Width 条码宽度
	 * @param Height 条码高度
	 * @param BarCodeType 条码类型  128A  128B 128C  128Auto EAN8  EAN13 EAN128A  EAN128B EAN128C Code39
	 * @param BarCodeValue 条码内容
	 * @constructor
	 */
	ADD_PRINT_BARCODE(Top: number, Left: number, Width: number, Height: number, BarCodeType: barCodeType, BarCodeValue: string): boolean
}
declare function getCLodop(): Lodop
