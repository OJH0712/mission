import { defs as ucenterDefs, ucenter } from './ucenter'

import { defs as basicsDefs, basics } from './basics'

;(window as any).defs = {
	ucenter: ucenterDefs,
	basics: basicsDefs,
}
;(window as any).API = {
	ucenter,
	basics,
}
