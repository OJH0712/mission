import { defs as ucenterDefs, ucenter } from './ucenter'

import { defs as wmsDefs, wms } from './wms'

;(window as any).defs = {
	ucenter: ucenterDefs,
	wms: wmsDefs,
}
;(window as any).API = {
	ucenter,
	wms,
}
